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
"[project]/MediSaathi/app/api/vitals/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/supabase.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const action = searchParams.get('action');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'User ID is required'
            }, {
                status: 400
            });
        }
        if (action === 'latest' || !action) {
            // Get latest vital signs readings
            const { data: vitals, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').select(`
          id,
          type,
          value,
          unit,
          recorded_at
        `).eq('user_id', userId).order('recorded_at', {
                ascending: false
            }).limit(20);
            if (error) {
                console.error('Database error:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Failed to fetch vital signs',
                    details: error.message
                }, {
                    status: 500
                });
            }
            // Group by type and get latest for each
            const latestByType = vitals?.reduce((acc, vital)=>{
                if (!acc.find((v)=>v.type === vital.type)) {
                    acc.push({
                        type: vital.type,
                        data: {
                            value: vital.value,
                            unit: vital.unit,
                            recorded_at: vital.recorded_at
                        }
                    });
                }
                return acc;
            }, []) || [];
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: latestByType
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Invalid action'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Vitals API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
        const { user_id, type, value, unit } = body;
        if (!user_id || !type || !value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing required fields: user_id, type, value'
            }, {
                status: 400
            });
        }
        // Check for abnormal readings
        const isAbnormal = checkAbnormalVital(type, value);
        const { data: vital, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('vital_signs').insert({
            user_id,
            type,
            value,
            unit: unit || '',
            recorded_at: new Date().toISOString()
        }).select().single();
        if (error) {
            console.error('Database error:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Failed to record vital signs',
                details: error.message
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: vital,
            abnormal: isAbnormal
        });
    } catch (error) {
        console.error('Vitals POST API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
function checkAbnormalVital(type, value) {
    const numValue = parseFloat(value);
    switch(type){
        case 'heart_rate':
            if (numValue < 60 || numValue > 100) {
                return {
                    isAbnormal: true,
                    message: 'Heart rate is outside normal range (60-100 bpm)'
                };
            }
            break;
        case 'temperature':
            if (numValue < 97.0 || numValue > 100.4) {
                return {
                    isAbnormal: true,
                    message: 'Temperature is outside normal range (97.0-100.4°F)'
                };
            }
            break;
        case 'blood_sugar':
            if (numValue < 70 || numValue > 140) {
                return {
                    isAbnormal: true,
                    message: 'Blood sugar is outside normal range (70-140 mg/dL)'
                };
            }
            break;
        case 'blood_pressure':
            const [systolic, diastolic] = value.split('/').map((v)=>parseInt(v));
            if (systolic > 140 || diastolic > 90 || systolic < 90 || diastolic < 60) {
                return {
                    isAbnormal: true,
                    message: 'Blood pressure is outside normal range'
                };
            }
            break;
    }
    return {
        isAbnormal: false,
        message: ''
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5eda521d._.js.map