import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const action = searchParams.get('action')

    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 })
    }

    if (action === 'latest' || !action) {
      // Get latest vital signs readings
      const { data: vitals, error } = await supabase
        .from('vital_signs')
        .select(`
          id,
          type,
          value,
          unit,
          recorded_at
        `)
        .eq('user_id', userId)
        .order('recorded_at', { ascending: false })
        .limit(20)

      if (error) {
        console.error('Database error:', error)
        return NextResponse.json({ 
          success: false, 
          error: 'Failed to fetch vital signs',
          details: error.message
        }, { status: 500 })
      }

      // Group by type and get latest for each
      const latestByType = vitals?.reduce((acc: any[], vital: any) => {
        if (!acc.find(v => v.type === vital.type)) {
          acc.push({
            type: vital.type,
            data: {
              value: vital.value,
              unit: vital.unit,
              recorded_at: vital.recorded_at
            }
          })
        }
        return acc
      }, []) || []

      return NextResponse.json({ 
        success: true, 
        data: latestByType 
      })
    }

    return NextResponse.json({ 
      success: false, 
      error: 'Invalid action' 
    }, { status: 400 })

  } catch (error) {
    console.error('Vitals API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, type, value, unit } = body

    if (!user_id || !type || !value) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: user_id, type, value' 
      }, { status: 400 })
    }

    // Check for abnormal readings
    const isAbnormal = checkAbnormalVital(type, value)

    const { data: vital, error } = await supabase
      .from('vital_signs')
      .insert({
        user_id,
        type,
        value,
        unit: unit || '',
        recorded_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to record vital signs',
        details: error.message
      }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      data: vital,
      abnormal: isAbnormal
    })

  } catch (error) {
    console.error('Vitals POST API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

function checkAbnormalVital(type: string, value: string) {
  const numValue = parseFloat(value)
  
  switch (type) {
    case 'heart_rate':
      if (numValue < 60 || numValue > 100) {
        return { isAbnormal: true, message: 'Heart rate is outside normal range (60-100 bpm)' }
      }
      break
    case 'temperature':
      if (numValue < 97.0 || numValue > 100.4) {
        return { isAbnormal: true, message: 'Temperature is outside normal range (97.0-100.4°F)' }
      }
      break
    case 'blood_sugar':
      if (numValue < 70 || numValue > 140) {
        return { isAbnormal: true, message: 'Blood sugar is outside normal range (70-140 mg/dL)' }
      }
      break
    case 'blood_pressure':
      const [systolic, diastolic] = value.split('/').map(v => parseInt(v))
      if (systolic > 140 || diastolic > 90 || systolic < 90 || diastolic < 60) {
        return { isAbnormal: true, message: 'Blood pressure is outside normal range' }
      }
      break
  }
  
  return { isAbnormal: false, message: '' }
}