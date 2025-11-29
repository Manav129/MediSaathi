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
"[project]/MediSaathi/lib/services/user.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserService",
    ()=>UserService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/supabase.ts [app-route] (ecmascript)");
;
class UserService {
    // Get current user profile
    static async getCurrentUser() {
        try {
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (authError || !user) throw authError;
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', user.id).single();
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
    // Create user profile after auth signup
    static async createUserProfile(userData) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').insert(userData).select().single();
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
    // Update user profile
    static async updateUserProfile(userId, updates) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update(updates).eq('id', userId).select().single();
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
    // Get users by type (for admin purposes)
    static async getUsersByType(userType) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('user_type', userType).order('created_at', {
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
    // Search users
    static async searchUsers(query, userType) {
        try {
            let queryBuilder = __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').or(`full_name.ilike.%${query}%, email.ilike.%${query}%`);
            if (userType) {
                queryBuilder = queryBuilder.eq('user_type', userType);
            }
            const { data, error } = await queryBuilder.order('created_at', {
                ascending: false
            }).limit(20);
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
    // Delete user account
    static async deleteUser(userId) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId);
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
}
}),
"[project]/MediSaathi/app/api/users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/services/user.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/supabase.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get('action');
        const userType = searchParams.get('type');
        const query = searchParams.get('q');
        switch(action){
            case 'profile':
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].getCurrentUser();
                if (error) throw error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data
                });
            case 'search':
                if (!query) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: 'Query parameter required'
                    }, {
                        status: 400
                    });
                }
                const searchResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].searchUsers(query, userType || undefined);
                if (searchResult.error) throw searchResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: searchResult.data
                });
            case 'by-type':
                if (!userType || ![
                    'patient',
                    'doctor',
                    'hospital'
                ].includes(userType)) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: 'Valid user type required'
                    }, {
                        status: 400
                    });
                }
                const typeResult = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].getUsersByType(userType);
                if (typeResult.error) throw typeResult.error;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: typeResult.data
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
        console.error('User API Error:', error);
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
        const { action, userData } = body;
        switch(action){
            case 'signup':
                // Create auth user first
                const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                    email: userData.email,
                    password: userData.password
                });
                if (authError) throw authError;
                if (!authData.user) throw new Error('Failed to create user');
                // Create user profile
                const profileData = {
                    id: authData.user.id,
                    email: userData.email,
                    full_name: userData.full_name,
                    user_type: userData.user_type,
                    phone: userData.phone || null,
                    date_of_birth: userData.date_of_birth || null,
                    gender: userData.gender || null,
                    address: userData.address || null
                };
                const { data: profile, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].createUserProfile(profileData);
                if (profileError) throw profileError;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: {
                        user: authData.user,
                        profile
                    },
                    message: 'User created successfully'
                });
            case 'signin':
                const { data: signInData, error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                    email: userData.email,
                    password: userData.password
                });
                if (signInError) throw signInError;
                // Get user profile
                const { data: userProfile } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].getCurrentUser();
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data: {
                        user: signInData.user,
                        profile: userProfile
                    },
                    message: 'Signed in successfully'
                });
            case 'signout':
                const { error: signOutError } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                if (signOutError) throw signOutError;
                return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    message: 'Signed out successfully'
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
        console.error('User Auth Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Authentication failed'
        }, {
            status: 400
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { userId, updates } = body;
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'User ID required'
            }, {
                status: 400
            });
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].updateUserProfile(userId, updates);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data,
            message: 'Profile updated successfully'
        });
    } catch (error) {
        console.error('User Update Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to update profile'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'User ID required'
            }, {
                status: 400
            });
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserService"].deleteUser(userId);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.error('User Delete Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to delete user'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dd34adf._.js.map