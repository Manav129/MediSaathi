module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://vnjpebomxqfuppkqakua.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuanBlYm9teHFmdXBwa3Fha3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDMxMTIsImV4cCI6MjA3OTU3OTExMn0.lFP0WGbxDAEZOITSTLXkWJnFhokz6bCGYrDn9vhr5zQ");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/lib/services/appointment.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppointmentService",
    ()=>AppointmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
;
class AppointmentService {
    // Get appointments for patient
    static async getPatientAppointments(patientId, status) {
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          *,
          doctors:doctor_id(
            id,
            users!doctors_user_id_fkey(full_name, avatar_url),
            specialty,
            consultation_fee
          ),
          hospitals:hospital_id(name, address, phone)
        `).eq('patient_id', patientId);
            if (status) {
                query = query.eq('status', status);
            }
            const { data, error } = await query.order('appointment_date', {
                ascending: true
            }).order('appointment_time', {
                ascending: true
            });
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get appointments for doctor
    static async getDoctorAppointments(doctorId, date) {
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          *,
          patients:patient_id(full_name, avatar_url, phone, date_of_birth),
          hospitals:hospital_id(name)
        `).eq('doctor_id', doctorId);
            if (date) {
                query = query.eq('appointment_date', date);
            }
            const { data, error } = await query.order('appointment_date', {
                ascending: true
            }).order('appointment_time', {
                ascending: true
            });
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get appointments for hospital
    static async getHospitalAppointments(hospitalId, date) {
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          *,
          patients:patient_id(full_name, phone),
          doctors:doctor_id(
            users!doctors_user_id_fkey(full_name),
            specialty
          )
        `).eq('hospital_id', hospitalId);
            if (date) {
                query = query.eq('appointment_date', date);
            }
            const { data, error } = await query.order('appointment_date', {
                ascending: true
            }).order('appointment_time', {
                ascending: true
            });
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Book new appointment
    static async bookAppointment(appointmentData) {
        try {
            // Check for conflicts
            const { data: conflicts } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select('*').eq('doctor_id', appointmentData.doctor_id).eq('appointment_date', appointmentData.appointment_date).eq('appointment_time', appointmentData.appointment_time).neq('status', 'cancelled');
            if (conflicts && conflicts.length > 0) {
                throw new Error('Time slot already booked');
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').insert(appointmentData).select(`
          *,
          doctors:doctor_id(
            users!doctors_user_id_fkey(full_name),
            specialty,
            consultation_fee
          )
        `).single();
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Update appointment
    static async updateAppointment(appointmentId, updates) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').update(updates).eq('id', appointmentId).select().single();
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Cancel appointment
    static async cancelAppointment(appointmentId, reason) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').update({
                status: 'cancelled',
                notes: reason ? `Cancelled: ${reason}` : 'Cancelled'
            }).eq('id', appointmentId).select().single();
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get available time slots for doctor
    static async getAvailableSlots(doctorId, date) {
        try {
            // Get doctor's working hours and existing appointments
            const [doctorData, appointmentsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('doctors').select('available_hours, available_days').eq('id', doctorId).single(),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select('appointment_time, duration').eq('doctor_id', doctorId).eq('appointment_date', date).neq('status', 'cancelled')
            ]);
            if (doctorData.error) throw doctorData.error;
            const doctor = doctorData.data;
            const appointments = appointmentsData.data || [];
            // Parse working hours (e.g., "09:00-17:00")
            const [startTime, endTime] = doctor.available_hours.split('-');
            // Generate 30-minute slots
            const slots = [];
            const start = new Date(`2000-01-01T${startTime}`);
            const end = new Date(`2000-01-01T${endTime}`);
            while(start < end){
                const timeStr = start.toTimeString().slice(0, 5);
                // Check if slot is already booked
                const isBooked = appointments.some((apt)=>{
                    const aptTime = new Date(`2000-01-01T${apt.appointment_time}`);
                    const aptEnd = new Date(aptTime.getTime() + (apt.duration || 30) * 60000);
                    const slotTime = new Date(`2000-01-01T${timeStr}`);
                    const slotEnd = new Date(slotTime.getTime() + 30 * 60000);
                    return slotTime < aptEnd && slotEnd > aptTime;
                });
                if (!isBooked) {
                    slots.push(timeStr);
                }
                start.setMinutes(start.getMinutes() + 30);
            }
            return {
                data: slots,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get appointment statistics
    static async getAppointmentStats(doctorId, hospitalId, startDate, endDate) {
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select('status, type, created_at');
            if (doctorId) query = query.eq('doctor_id', doctorId);
            if (hospitalId) query = query.eq('hospital_id', hospitalId);
            if (startDate) query = query.gte('appointment_date', startDate);
            if (endDate) query = query.lte('appointment_date', endDate);
            const { data, error } = await query;
            if (error) throw error;
            const stats = {
                total: data?.length || 0,
                byStatus: {},
                byType: {},
                completed: 0,
                cancelled: 0,
                revenue: 0
            };
            data?.forEach((appointment)=>{
                stats.byStatus[appointment.status] = (stats.byStatus[appointment.status] || 0) + 1;
                stats.byType[appointment.type] = (stats.byType[appointment.type] || 0) + 1;
                if (appointment.status === 'completed') stats.completed++;
                if (appointment.status === 'cancelled') stats.cancelled++;
            });
            return {
                data: stats,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get upcoming appointments (next 7 days)
    static async getUpcomingAppointments(userId, userType) {
        try {
            const today = new Date().toISOString().split('T')[0];
            const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          *,
          ${userType === 'patient' ? 'doctors:doctor_id(users!doctors_user_id_fkey(full_name), specialty)' : 'patients:patient_id(full_name)'}
        `).gte('appointment_date', today).lte('appointment_date', nextWeek).in('status', [
                'scheduled',
                'confirmed'
            ]);
            if (userType === 'patient') {
                query = query.eq('patient_id', userId);
            } else {
                // For doctors, need to get doctor record first
                const { data: doctorData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('doctors').select('id').eq('user_id', userId).single();
                if (doctorData) {
                    query = query.eq('doctor_id', doctorData.id);
                }
            }
            const { data, error } = await query.order('appointment_date', {
                ascending: true
            }).order('appointment_time', {
                ascending: true
            });
            if (error) throw error;
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Send appointment reminders
    static async sendReminders() {
        try {
            // Get appointments for tomorrow
            const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          *,
          patients:patient_id(full_name, email, phone),
          doctors:doctor_id(users!doctors_user_id_fkey(full_name))
        `).eq('appointment_date', tomorrow).eq('status', 'confirmed');
            if (error) throw error;
            // Here you would integrate with your notification system
            // For now, return the appointments that need reminders
            return {
                data: data || [],
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
}
}),
"[project]/app/api/appointments/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/appointment.service.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const doctorId = searchParams.get('doctorId');
        const userType = searchParams.get('userType');
        const action = searchParams.get('action');
        const date = searchParams.get('date');
        // Handle doctor-specific queries
        if (doctorId && date) {
            // Get appointments for a specific doctor on a specific date
            const { data: appointments, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          id,
          appointment_date,
          appointment_time,
          status,
          notes,
          appointment_type,
          is_urgent,
          patients:patient_id (
            id,
            users:user_id (
              id,
              full_name,
              email,
              avatar_url,
              date_of_birth
            )
          )
        `).eq('doctor_id', doctorId).eq('appointment_date', date).order('appointment_time', {
                ascending: true
            });
            if (error) {
                console.error('Database error:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Failed to fetch doctor appointments',
                    details: error.message
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: appointments || []
            });
        }
        // Handle patient-specific queries (existing logic)
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'User ID or Doctor ID is required'
            }, {
                status: 400
            });
        }
        if (action === 'upcoming' || !action) {
            // Get upcoming appointments for patient
            const { data: appointments, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select(`
          id,
          appointment_date,
          appointment_time,
          status,
          notes,
          doctors:doctor_id (
            id,
            specialty,
            users:user_id (
              full_name,
              email
            )
          )
        `).eq('patient_id', userId).gte('appointment_date', new Date().toISOString().split('T')[0]).order('appointment_date', {
                ascending: true
            }).limit(10);
            if (error) {
                console.error('Database error:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Failed to fetch appointments',
                    details: error.message
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: appointments || []
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Invalid action'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Appointments API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { action, appointmentData } = body;
        switch(action){
            case 'book':
                if (!appointmentData.patient_id || !appointmentData.doctor_id || !appointmentData.appointment_date || !appointmentData.appointment_time) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: 'Required appointment data missing'
                    }, {
                        status: 400
                    });
                }
                const bookResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppointmentService"].bookAppointment(appointmentData);
                if (bookResult.error) throw bookResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: bookResult.data,
                    message: 'Appointment booked successfully'
                });
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (error) {
        console.error('Appointment Booking Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to book appointment'
        }, {
            status: 400
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { action, appointmentId, updates, reason } = body;
        if (!appointmentId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Appointment ID required'
            }, {
                status: 400
            });
        }
        switch(action){
            case 'update':
                const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppointmentService"].updateAppointment(appointmentId, updates);
                if (updateResult.error) throw updateResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: updateResult.data,
                    message: 'Appointment updated successfully'
                });
            case 'cancel':
                const cancelResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppointmentService"].cancelAppointment(appointmentId, reason);
                if (cancelResult.error) throw cancelResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: cancelResult.data,
                    message: 'Appointment cancelled successfully'
                });
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (error) {
        console.error('Appointment Update Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to update appointment'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d4295707._.js.map