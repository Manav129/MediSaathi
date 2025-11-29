import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 })
    }

    // Get family members - direct data from family_members table
    const { data: familyMembers, error } = await supabase
      .from('family_members')
      .select(`
        id,
        full_name,
        relationship,
        date_of_birth,
        gender,
        phone,
        emergency_contact,
        created_at
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch family members',
        details: error.message
      }, { status: 500 })
    }

    // Format the data to match the expected frontend structure
    const formattedFamilyMembers = familyMembers?.map(member => ({
      id: member.id,
      relationship: member.relationship,
      created_at: member.created_at,
      member: {
        id: member.id,
        full_name: member.full_name,
        date_of_birth: member.date_of_birth,
        gender: member.gender,
        phone: member.phone,
        emergency_contact: member.emergency_contact
      }
    })) || []

    return NextResponse.json({ 
      success: true, 
      data: formattedFamilyMembers 
    })

  } catch (error) {
    console.error('Family API error:', error)
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
    const { user_id, member_name, relationship, date_of_birth, gender, phone, emergency_contact } = body

    if (!user_id || !member_name || !relationship) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: user_id, member_name, relationship' 
      }, { status: 400 })
    }

    // Parse and validate date of birth
    let parsedDateOfBirth = date_of_birth
    if (!parsedDateOfBirth) {
      // Default to a reasonable date if not provided
      parsedDateOfBirth = '2000-01-01'
    }

    // Validate gender
    const validGenders = ['male', 'female', 'other']
    const memberGender = gender && validGenders.includes(gender.toLowerCase()) 
      ? gender.toLowerCase() 
      : 'other'

    // Check if family member with same name and relationship already exists
    const { data: existing } = await supabase
      .from('family_members')
      .select('id')
      .eq('user_id', user_id)
      .eq('full_name', member_name.trim())
      .eq('relationship', relationship)
      .single()

    if (existing) {
      return NextResponse.json({ 
        success: false, 
        error: 'Family member with same name and relationship already exists' 
      }, { status: 400 })
    }

    // Insert family member directly into family_members table
    const { data: familyMember, error } = await supabase
      .from('family_members')
      .insert({
        user_id,
        full_name: member_name.trim(),
        relationship,
        date_of_birth: parsedDateOfBirth,
        gender: memberGender,
        phone: phone?.trim() || null,
        emergency_contact: emergency_contact || false
      })
      .select(`
        id,
        full_name,
        relationship,
        date_of_birth,
        gender,
        phone,
        emergency_contact,
        created_at
      `)
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to add family member',
        details: error.message
      }, { status: 500 })
    }

    // Format response to match expected frontend structure
    const formattedResponse = {
      id: familyMember.id,
      relationship: familyMember.relationship,
      created_at: familyMember.created_at,
      member: {
        id: familyMember.id,
        full_name: familyMember.full_name,
        date_of_birth: familyMember.date_of_birth,
        gender: familyMember.gender,
        phone: familyMember.phone,
        emergency_contact: familyMember.emergency_contact
      }
    }

    return NextResponse.json({ 
      success: true, 
      data: formattedResponse
    })

  } catch (error) {
    console.error('Family POST API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const familyId = searchParams.get('familyId')

    if (!familyId) {
      return NextResponse.json({ 
        success: false, 
        error: 'Family ID is required' 
      }, { status: 400 })
    }

    const { error } = await supabase
      .from('family_members')
      .delete()
      .eq('id', familyId)

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to remove family member',
        details: error.message
      }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Family member removed successfully' 
    })

  } catch (error) {
    console.error('Family DELETE API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}