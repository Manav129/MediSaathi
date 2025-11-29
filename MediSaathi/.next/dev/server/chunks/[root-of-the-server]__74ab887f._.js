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
"[project]/MediSaathi/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://vnjpebomxqfuppkqakua.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuanBlYm9teHFmdXBwa3Fha3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDMxMTIsImV4cCI6MjA3OTU3OTExMn0.lFP0WGbxDAEZOITSTLXkWJnFhokz6bCGYrDn9vhr5zQ");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/MediSaathi/lib/services/vital-sign.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VitalSignService",
    ()=>VitalSignService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/supabase.ts [app-route] (ecmascript)");
;
class VitalSignService {
    // Get vital signs for user/family member
    static async getVitalSigns(userId, familyMemberId, type) {
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').select('*').eq('user_id', userId);
            if (familyMemberId) {
                query = query.eq('family_member_id', familyMemberId);
            }
            if (type) {
                query = query.eq('type', type);
            }
            const { data, error } = await query.order('recorded_at', {
                ascending: false
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
    // Add vital sign reading
    static async addVitalSign(vitalData) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').insert(vitalData).select().single();
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
    // Update vital sign reading
    static async updateVitalSign(vitalId, updates) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').update(updates).eq('id', vitalId).select().single();
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
    // Delete vital sign reading
    static async deleteVitalSign(vitalId) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').delete().eq('id', vitalId);
            if (error) throw error;
            return {
                error: null
            };
        } catch (error) {
            return {
                error
            };
        }
    }
    // Get latest readings for all vital types
    static async getLatestReadings(userId, familyMemberId) {
        try {
            const vitalTypes = [
                'blood_pressure',
                'heart_rate',
                'temperature',
                'weight',
                'height',
                'blood_sugar',
                'oxygen_saturation'
            ];
            const latestReadings = await Promise.all(vitalTypes.map(async (type)=>{
                let query = __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').select('*').eq('user_id', userId).eq('type', type);
                if (familyMemberId) {
                    query = query.eq('family_member_id', familyMemberId);
                }
                const { data, error } = await query.order('recorded_at', {
                    ascending: false
                }).limit(1);
                return {
                    type,
                    data: data?.[0] || null,
                    error
                };
            }));
            return {
                data: latestReadings,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Get vital signs analytics
    static async getVitalAnalytics(userId, type, days = 30) {
        try {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - days);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').select('*').eq('user_id', userId).eq('type', type).gte('recorded_at', startDate.toISOString()).order('recorded_at', {
                ascending: true
            });
            if (error) throw error;
            // Calculate analytics
            const analytics = {
                readings: data || [],
                average: 0,
                min: 0,
                max: 0,
                trend: 'stable'
            };
            if (data && data.length > 0) {
                const numericValues = data.map((reading)=>parseFloat(reading.value.split('/')[0])) // Handle BP format
                .filter((val)=>!isNaN(val));
                if (numericValues.length > 0) {
                    analytics.average = numericValues.reduce((a, b)=>a + b, 0) / numericValues.length;
                    analytics.min = Math.min(...numericValues);
                    analytics.max = Math.max(...numericValues);
                    // Simple trend calculation
                    if (numericValues.length > 1) {
                        const recent = numericValues.slice(-5).reduce((a, b)=>a + b, 0) / Math.min(5, numericValues.length);
                        const older = numericValues.slice(0, -5).reduce((a, b)=>a + b, 0) / Math.max(1, numericValues.length - 5);
                        if (recent > older * 1.05) analytics.trend = 'up';
                        else if (recent < older * 0.95) analytics.trend = 'down';
                    }
                }
            }
            return {
                data: analytics,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error
            };
        }
    }
    // Check for abnormal readings
    static checkAbnormalReading(type, value) {
        const numericValue = parseFloat(value.split('/')[0]);
        switch(type){
            case 'blood_pressure':
                const [systolic, diastolic] = value.split('/').map((v)=>parseFloat(v));
                if (systolic > 180 || diastolic > 120) {
                    return {
                        isAbnormal: true,
                        severity: 'high',
                        message: 'Hypertensive crisis - seek immediate medical attention'
                    };
                } else if (systolic > 140 || diastolic > 90) {
                    return {
                        isAbnormal: true,
                        severity: 'medium',
                        message: 'High blood pressure - consult your doctor'
                    };
                } else if (systolic < 90 || diastolic < 60) {
                    return {
                        isAbnormal: true,
                        severity: 'medium',
                        message: 'Low blood pressure - monitor closely'
                    };
                }
                break;
            case 'heart_rate':
                if (numericValue > 100) {
                    return {
                        isAbnormal: true,
                        severity: 'medium',
                        message: 'Elevated heart rate - consider rest'
                    };
                } else if (numericValue < 60) {
                    return {
                        isAbnormal: true,
                        severity: 'low',
                        message: 'Low heart rate - monitor if symptomatic'
                    };
                }
                break;
            case 'temperature':
                if (numericValue > 100.4) {
                    return {
                        isAbnormal: true,
                        severity: 'medium',
                        message: 'Fever detected - monitor and consider medical advice'
                    };
                } else if (numericValue < 95) {
                    return {
                        isAbnormal: true,
                        severity: 'high',
                        message: 'Low body temperature - seek medical attention'
                    };
                }
                break;
            case 'blood_sugar':
                if (numericValue > 200) {
                    return {
                        isAbnormal: true,
                        severity: 'high',
                        message: 'High blood sugar - check with healthcare provider'
                    };
                } else if (numericValue < 70) {
                    return {
                        isAbnormal: true,
                        severity: 'medium',
                        message: 'Low blood sugar - consume glucose'
                    };
                }
                break;
            case 'oxygen_saturation':
                if (numericValue < 95) {
                    return {
                        isAbnormal: true,
                        severity: 'high',
                        message: 'Low oxygen saturation - seek immediate medical attention'
                    };
                }
                break;
        }
        return {
            isAbnormal: false,
            severity: 'low'
        };
    }
    // Get vital signs reminders
    static async getVitalReminders(userId) {
        try {
            // Check when last readings were taken for each vital type
            const vitalTypes = [
                'blood_pressure',
                'heart_rate',
                'temperature',
                'weight',
                'blood_sugar'
            ];
            const reminders = [];
            for (const type of vitalTypes){
                const { data } = await this.getVitalSigns(userId, undefined, type);
                if (!data || data.length === 0) {
                    reminders.push({
                        type,
                        message: `No ${type.replace('_', ' ')} readings recorded`,
                        priority: 'low'
                    });
                } else {
                    const lastReading = new Date(data[0].recorded_at);
                    const daysSinceLastReading = Math.floor((Date.now() - lastReading.getTime()) / (1000 * 60 * 60 * 24));
                    if (daysSinceLastReading > 7) {
                        reminders.push({
                            type,
                            message: `Last ${type.replace('_', ' ')} reading was ${daysSinceLastReading} days ago`,
                            priority: daysSinceLastReading > 30 ? 'high' : 'medium'
                        });
                    }
                }
            }
            return {
                data: reminders,
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
"[project]/MediSaathi/app/api/vital-signs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/services/vital-sign.service.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get('action');
        const userId = searchParams.get('userId');
        const familyMemberId = searchParams.get('familyMemberId');
        const type = searchParams.get('type');
        const days = searchParams.get('days');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'User ID required'
            }, {
                status: 400
            });
        }
        switch(action){
            case 'get-vitals':
                const vitalsResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].getVitalSigns(userId, familyMemberId || undefined, type || undefined);
                if (vitalsResult.error) throw vitalsResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: vitalsResult.data
                });
            case 'latest-readings':
                const latestResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].getLatestReadings(userId, familyMemberId || undefined);
                if (latestResult.error) throw latestResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: latestResult.data
                });
            case 'analytics':
                if (!type) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: 'Vital type required for analytics'
                    }, {
                        status: 400
                    });
                }
                const analyticsResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].getVitalAnalytics(userId, type, days ? parseInt(days) : 30);
                if (analyticsResult.error) throw analyticsResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: analyticsResult.data
                });
            case 'reminders':
                const remindersResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].getVitalReminders(userId);
                if (remindersResult.error) throw remindersResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: remindersResult.data
                });
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (error) {
        console.error('Vital Signs API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { vitalData } = body;
        if (!vitalData.user_id || !vitalData.type || !vitalData.value || !vitalData.unit) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Required vital sign data missing (user_id, type, value, unit)'
            }, {
                status: 400
            });
        }
        // Check for abnormal readings
        const abnormalCheck = __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].checkAbnormalReading(vitalData.type, vitalData.value);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].addVitalSign({
            ...vitalData,
            recorded_at: vitalData.recorded_at || new Date().toISOString()
        });
        if (result.error) throw result.error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: result.data,
            abnormal: abnormalCheck,
            message: 'Vital sign recorded successfully'
        });
    } catch (error) {
        console.error('Vital Sign Recording Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to record vital sign'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { vitalId, updates } = body;
        if (!vitalId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Vital sign ID required'
            }, {
                status: 400
            });
        }
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].updateVitalSign(vitalId, updates);
        if (result.error) throw result.error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: result.data,
            message: 'Vital sign updated successfully'
        });
    } catch (error) {
        console.error('Vital Sign Update Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to update vital sign'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const vitalId = searchParams.get('vitalId');
        if (!vitalId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Vital sign ID required'
            }, {
                status: 400
            });
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$vital$2d$sign$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VitalSignService"].deleteVitalSign(vitalId);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Vital sign deleted successfully'
        });
    } catch (error) {
        console.error('Vital Sign Delete Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to delete vital sign'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__74ab887f._.js.map