module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next-auth [external] (next-auth, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next-auth", () => require("next-auth"));

module.exports = mod;
}),
"[externals]/next-auth/providers/google [external] (next-auth/providers/google, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next-auth/providers/google", () => require("next-auth/providers/google"));

module.exports = mod;
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}),
"[project]/pages/api/auth/[...nextauth].ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth [external] (next-auth, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$google__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$google$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/providers/google [external] (next-auth/providers/google, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
;
;
// Create a service role client that bypasses RLS
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(("TURBOPACK compile-time value", "https://vnjpebomxqfuppkqakua.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuanBlYm9teHFmdXBwa3Fha3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDMxMTIsImV4cCI6MjA3OTU3OTExMn0.lFP0WGbxDAEZOITSTLXkWJnFhokz6bCGYrDn9vhr5zQ") || process.env.SUPABASE_JWT_SECRET, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$google__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$google$2c$__cjs$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn ({ user, account, profile }) {
            if (account?.provider === 'google') {
                try {
                    // Check if user profile exists in our custom users table
                    const { data: existingUser } = await supabaseAdmin.from('users').select('*').eq('email', user.email).single();
                    // If user doesn't exist, create a profile
                    if (!existingUser) {
                        // Default to patient, this will be updated by the client-side logic
                        const { error } = await supabaseAdmin.from('users').insert({
                            email: user.email,
                            full_name: user.name || '',
                            avatar_url: user.image || '',
                            user_type: 'patient',
                            created_at: new Date().toISOString(),
                            updated_at: new Date().toISOString()
                        });
                        if (error) {
                            console.log("------------------");
                            console.log("Error because of not able to create a user in table");
                            console.error('Error creating user profile:', error);
                            return false;
                        }
                    }
                    return true;
                } catch (error) {
                    console.error('Sign-in error:', error);
                    return false;
                }
            }
            return true;
        },
        async session ({ session, token }) {
            // Add custom user data to session
            if (session?.user?.email) {
                const { data: userData } = await supabaseAdmin.from('users').select('*').eq('email', session.user.email).single();
                if (userData) {
                    session.user.userType = userData.user_type;
                    session.user.userId = userData.id;
                    session.user.fullName = userData.full_name;
                }
            }
            return session;
        },
        async redirect ({ url, baseUrl }) {
            // If it's a sign-in redirect, go to the dashboard
            if (url === `${baseUrl}/api/auth/signin` || url === baseUrl) {
                return `${baseUrl}/dashboard`;
            }
            // Custom redirect logic for other cases
            if (url.startsWith('/')) {
                return `${baseUrl}${url}`;
            }
            if (url.startsWith(baseUrl)) {
                return url;
            }
            // Default to dashboard for successful sign-ins
            return `${baseUrl}/dashboard`;
        },
        async jwt ({ token, user, account }) {
            if (user) {
                token.userId = user.id;
                token.email = user.email;
            }
            return token;
        }
    },
    pages: {
        signIn: '/login',
        error: '/auth/error'
    },
    session: {
        strategy: 'jwt'
    },
    debug: ("TURBOPACK compile-time value", "development") === 'development'
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__47e2dedc._.js.map