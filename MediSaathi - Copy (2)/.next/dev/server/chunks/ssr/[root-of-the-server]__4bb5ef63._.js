module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[next]/internal/font/google/inter_5972bc34.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/MediSaathi/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Client for MediSaathi Frontend
// Centralized HTTP client with error handling and authentication
__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
class ApiClient {
    baseURL;
    defaultHeaders;
    constructor(){
        this.baseURL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '/api';
        this.defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }
    async request(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            const config = {
                ...options,
                headers: {
                    ...this.defaultHeaders,
                    ...options.headers
                }
            };
            const response = await fetch(url, config);
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || `HTTP error! status: ${response.status}`);
            }
            return result;
        } catch (error) {
            console.error(`API Error [${endpoint}]:`, error);
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Unknown error',
                success: false
            };
        }
    }
    // User Management APIs
    users = {
        getCurrentProfile: ()=>this.request('/users?action=profile'),
        signUp: (userData)=>this.request('/users', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'signup',
                    userData
                })
            }),
        signIn: (credentials)=>this.request('/users', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'signin',
                    userData: credentials
                })
            }),
        signOut: ()=>this.request('/users', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'signout'
                })
            }),
        updateProfile: (userId, updates)=>this.request('/users', {
                method: 'PUT',
                body: JSON.stringify({
                    userId,
                    updates
                })
            }),
        searchUsers: (query, type)=>this.request(`/users?action=search&q=${encodeURIComponent(query)}${type ? `&type=${type}` : ''}`)
    };
    // Family Members APIs
    family = {
        getMembers: (userId)=>this.request(`/family-members?userId=${userId}`),
        getMember: (userId, memberId)=>this.request(`/family-members?userId=${userId}&memberId=${memberId}`),
        addMember: (memberData)=>this.request('/family-members', {
                method: 'POST',
                body: JSON.stringify({
                    memberData
                })
            }),
        updateMember: (memberId, updates)=>this.request('/family-members', {
                method: 'PUT',
                body: JSON.stringify({
                    memberId,
                    updates
                })
            }),
        deleteMember: (memberId)=>this.request(`/family-members?memberId=${memberId}`, {
                method: 'DELETE'
            })
    };
    // Health Records APIs
    healthRecords = {
        getRecords: (userId, familyMemberId)=>this.request(`/health-records?action=get-records&userId=${userId}${familyMemberId ? `&familyMemberId=${familyMemberId}` : ''}`),
        getRecord: (recordId)=>this.request(`/health-records?action=get-record&recordId=${recordId}`),
        getRecordsByType: (userId, type)=>this.request(`/health-records?action=by-type&userId=${userId}&type=${type}`),
        searchRecords: (userId, query)=>this.request(`/health-records?action=search&userId=${userId}&q=${encodeURIComponent(query)}`),
        getCriticalRecords: (userId)=>this.request(`/health-records?action=critical&userId=${userId}`),
        getAnalytics: (userId)=>this.request(`/health-records?action=analytics&userId=${userId}`),
        addRecord: (recordData)=>this.request('/health-records', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'add-record',
                    recordData
                })
            }),
        uploadFile: (recordData, file)=>this.request('/health-records', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'upload-file',
                    recordData,
                    file
                })
            }),
        updateRecord: (recordId, updates)=>this.request('/health-records', {
                method: 'PUT',
                body: JSON.stringify({
                    recordId,
                    updates
                })
            }),
        deleteRecord: (recordId)=>this.request(`/health-records?recordId=${recordId}`, {
                method: 'DELETE'
            })
    };
    // Vital Signs APIs
    vitals = {
        getVitals: (userId, familyMemberId, type)=>this.request(`/vital-signs?action=get-vitals&userId=${userId}${familyMemberId ? `&familyMemberId=${familyMemberId}` : ''}${type ? `&type=${type}` : ''}`),
        getLatestReadings: (userId, familyMemberId)=>this.request(`/vital-signs?action=latest-readings&userId=${userId}${familyMemberId ? `&familyMemberId=${familyMemberId}` : ''}`),
        getAnalytics: (userId, type, days)=>this.request(`/vital-signs?action=analytics&userId=${userId}&type=${type}${days ? `&days=${days}` : ''}`),
        getReminders: (userId)=>this.request(`/vital-signs?action=reminders&userId=${userId}`),
        addReading: (vitalData)=>this.request('/vital-signs', {
                method: 'POST',
                body: JSON.stringify({
                    vitalData
                })
            }),
        updateReading: (vitalId, updates)=>this.request('/vital-signs', {
                method: 'PUT',
                body: JSON.stringify({
                    vitalId,
                    updates
                })
            }),
        deleteReading: (vitalId)=>this.request(`/vital-signs?vitalId=${vitalId}`, {
                method: 'DELETE'
            })
    };
    // Appointments APIs
    appointments = {
        getPatientAppointments: (userId, status)=>this.request(`/appointments?action=patient-appointments&userId=${userId}${status ? `&status=${status}` : ''}`),
        getDoctorAppointments: (doctorId, date)=>this.request(`/appointments?action=doctor-appointments&doctorId=${doctorId}${date ? `&date=${date}` : ''}`),
        getHospitalAppointments: (hospitalId, date)=>this.request(`/appointments?action=hospital-appointments&hospitalId=${hospitalId}${date ? `&date=${date}` : ''}`),
        getAvailableSlots: (doctorId, date)=>this.request(`/appointments?action=available-slots&doctorId=${doctorId}&date=${date}`),
        getUpcoming: (userId, userType)=>this.request(`/appointments?action=upcoming&userId=${userId}&userType=${userType}`),
        getStats: (doctorId, hospitalId, startDate, endDate)=>{
            const params = new URLSearchParams({
                action: 'stats'
            });
            if (doctorId) params.append('doctorId', doctorId);
            if (hospitalId) params.append('hospitalId', hospitalId);
            if (startDate) params.append('startDate', startDate);
            if (endDate) params.append('endDate', endDate);
            return this.request(`/appointments?${params}`);
        },
        bookAppointment: (appointmentData)=>this.request('/appointments', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'book',
                    appointmentData
                })
            }),
        updateAppointment: (appointmentId, updates)=>this.request('/appointments', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update',
                    appointmentId,
                    updates
                })
            }),
        cancelAppointment: (appointmentId, reason)=>this.request('/appointments', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'cancel',
                    appointmentId,
                    reason
                })
            })
    };
    // Doctors APIs
    doctors = {
        getByUser: (userId)=>this.request(`/doctors?action=get-by-user&userId=${userId}`),
        getDoctor: (doctorId)=>this.request(`/doctors?action=get-doctor&doctorId=${doctorId}`),
        search: (query, specialty, hospitalId)=>{
            const params = new URLSearchParams({
                action: 'search'
            });
            if (query) params.append('q', query);
            if (specialty) params.append('specialty', specialty);
            if (hospitalId) params.append('hospitalId', hospitalId);
            return this.request(`/doctors?${params}`);
        },
        getByHospital: (hospitalId)=>this.request(`/doctors?action=by-hospital&hospitalId=${hospitalId}`),
        getPatients: (doctorId)=>this.request(`/doctors?action=patients&doctorId=${doctorId}`),
        getStats: (doctorId)=>this.request(`/doctors?action=stats&doctorId=${doctorId}`),
        getSpecialties: ()=>this.request('/doctors?action=specialties'),
        getTopRated: (limit)=>this.request(`/doctors?action=top-rated${limit ? `&limit=${limit}` : ''}`),
        checkAvailability: (doctorId, date, time)=>this.request(`/doctors?action=check-availability&doctorId=${doctorId}&date=${date}&time=${time}`),
        createProfile: (doctorData)=>this.request('/doctors', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'create',
                    doctorData
                })
            }),
        updateProfile: (doctorId, updates)=>this.request('/doctors', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update',
                    doctorId,
                    updates
                })
            }),
        updateRating: (doctorId, rating)=>this.request('/doctors', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update-rating',
                    doctorId,
                    rating
                })
            })
    };
    // Hospitals APIs
    hospitals = {
        getByUser: (userId)=>this.request(`/hospitals?action=get-by-user&userId=${userId}`),
        getHospital: (hospitalId)=>this.request(`/hospitals?action=get-hospital&hospitalId=${hospitalId}`),
        search: (query, services, emergencyServices)=>{
            const params = new URLSearchParams({
                action: 'search'
            });
            if (query) params.append('q', query);
            if (services) params.append('services', services.join(','));
            if (emergencyServices !== undefined) params.append('emergencyServices', emergencyServices.toString());
            return this.request(`/hospitals?${params}`);
        },
        getAll: ()=>this.request('/hospitals?action=all'),
        getStats: (hospitalId)=>this.request(`/hospitals?action=stats&hospitalId=${hospitalId}`),
        getWithBeds: (minimumBeds)=>this.request(`/hospitals?action=with-beds${minimumBeds ? `&minimumBeds=${minimumBeds}` : ''}`),
        getByService: (service)=>this.request(`/hospitals?action=by-service&service=${service}`),
        getEmergency: ()=>this.request('/hospitals?action=emergency'),
        getDepartments: (hospitalId)=>this.request(`/hospitals?action=departments&hospitalId=${hospitalId}`),
        getTopRated: (limit)=>this.request(`/hospitals?action=top-rated${limit ? `&limit=${limit}` : ''}`),
        getOccupancy: (hospitalId)=>this.request(`/hospitals?action=occupancy&hospitalId=${hospitalId}`),
        createProfile: (hospitalData)=>this.request('/hospitals', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'create',
                    hospitalData
                })
            }),
        updateProfile: (hospitalId, updates)=>this.request('/hospitals', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update',
                    hospitalId,
                    updates
                })
            }),
        updateBeds: (hospitalId, availableBeds)=>this.request('/hospitals', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update-beds',
                    hospitalId,
                    availableBeds
                })
            }),
        updateServices: (hospitalId, services)=>this.request('/hospitals', {
                method: 'PUT',
                body: JSON.stringify({
                    action: 'update-services',
                    hospitalId,
                    services
                })
            })
    };
}
const apiClient = new ApiClient();
}),
"[project]/MediSaathi/contexts/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/lib/api-client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === 'loading') {
            setLoading(true);
            return;
        }
        if (session?.user) {
            // Convert NextAuth session to our User type
            setUser({
                id: session.user.userId || '',
                email: session.user.email || '',
                full_name: session.user.fullName || session.user.name || '',
                user_type: session.user.userType || 'patient',
                avatar_url: session.user.image || ''
            });
        } else {
            setUser(null);
        }
        setLoading(false);
    }, [
        session,
        status
    ]);
    const signInWithGoogle = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])('google', {
            callbackUrl: '/dashboard'
        });
    };
    const signInWithEmail = async (email, password)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].users.signIn({
                email,
                password
            });
            if (result.success && result.data) {
                setUser(result.data.profile);
                router.push(`/${result.data.profile.user_type}-dashboard`);
                return {
                    success: true
                };
            }
            return {
                success: false,
                error: result.error
            };
        } catch (error) {
            return {
                success: false,
                error: 'Sign in failed'
            };
        }
    };
    const signUpWithEmail = async (userData)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].users.signUp(userData);
            if (result.success && result.data) {
                setUser(result.data.profile);
                router.push(`/${result.data.profile.user_type}-dashboard`);
                return {
                    success: true
                };
            }
            return {
                success: false,
                error: result.error
            };
        } catch (error) {
            return {
                success: false,
                error: 'Sign up failed'
            };
        }
    };
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
        setUser(null);
    };
    const updateProfile = async (updates)=>{
        if (!user) return {
            success: false,
            error: 'No user logged in'
        };
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].users.updateProfile(user.id, updates);
            if (result.success && result.data) {
                setUser({
                    ...user,
                    ...result.data
                });
                return {
                    success: true
                };
            }
            return {
                success: false,
                error: result.error
            };
        } catch (error) {
            return {
                success: false,
                error: 'Profile update failed'
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            signInWithGoogle,
            signInWithEmail,
            signUpWithEmail,
            logout,
            updateProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/MediSaathi/contexts/auth-context.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/MediSaathi/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MediSaathi/node_modules/@vercel/analytics/dist/next/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "MediSaathi - Your Smart Health Companion"
                    }, void 0, false, {
                        fileName: "[project]/MediSaathi/app/layout.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Connect patients, doctors, and hospitals with AI-powered healthcare management. Manage family health records, book appointments, and access AI medical insights."
                    }, void 0, false, {
                        fileName: "[project]/MediSaathi/app/layout.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/MediSaathi/app/layout.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/MediSaathi/app/layout.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/MediSaathi/app/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$MediSaathi$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                        fileName: "[project]/MediSaathi/app/layout.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/MediSaathi/app/layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/MediSaathi/app/layout.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4bb5ef63._.js.map