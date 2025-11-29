# MediSaathi Backend Setup Guide

## Overview
This guide will help you set up the complete MediSaathi backend with Supabase database, authentication, and all API endpoints.

## Prerequisites
- Node.js 18+ installed
- Supabase account created
- Git installed

## 1. Supabase Setup

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project
3. Note down your project URL and API keys

### Step 2: Run Database Schema
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents from `database/schema.sql`
4. Run the SQL script to create all tables, indexes, and policies

### Step 3: Configure Storage
1. In Supabase dashboard, go to Storage
2. Create a new bucket called `health-records`
3. Set it to public if you want direct file access (optional)

## 2. Environment Configuration

### Update `.env.local` with your actual keys:
```bash
# Replace with your actual Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://vnjpebomxqfuppkqakua.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key

# Generate secure secrets for production
SUPABASE_JWT_SECRET=your-jwt-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# File upload settings
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/*,application/pdf,text/*
```

## 3. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

## 4. Backend Features Implemented

### ✅ Database Schema
- **Users table** - User profiles and authentication
- **Family Members** - Manage family member health records
- **Doctors** - Doctor profiles with specialties and availability
- **Hospitals** - Hospital profiles with services and bed management
- **Health Records** - Medical documents and file storage
- **Vital Signs** - Health metrics tracking with trend analysis
- **Appointments** - Booking system with availability checking
- **Prescriptions** - Digital prescription management
- **Health Wallet** - Expense tracking and insurance claims
- **AI Insights** - Health predictions and recommendations

### ✅ API Endpoints
- **Authentication** - `/api/users` (signup, signin, profile management)
- **Family Management** - `/api/family-members` (CRUD operations)
- **Health Records** - `/api/health-records` (file upload, search, analytics)
- **Vital Signs** - `/api/vital-signs` (tracking, analytics, abnormal detection)
- **Appointments** - `/api/appointments` (booking, scheduling, management)
- **Doctors** - `/api/doctors` (profiles, search, availability)
- **Hospitals** - `/api/hospitals` (profiles, services, bed management)

### ✅ Services Layer
- **UserService** - User management and authentication
- **HealthRecordService** - Medical records with file handling
- **VitalSignService** - Health metrics with trend analysis
- **AppointmentService** - Booking system with conflict detection
- **DoctorService** - Doctor profiles and availability
- **HospitalService** - Hospital management and statistics

### ✅ Security Features
- Row Level Security (RLS) policies
- User data isolation
- Input validation and sanitization
- File upload security
- Authentication middleware ready

## 5. API Usage Examples

### User Authentication
```typescript
import { apiClient } from '@/lib/api-client'

// Sign up new user
const { data, error } = await apiClient.users.signUp({
  email: 'user@example.com',
  password: 'securepassword',
  full_name: 'John Doe',
  user_type: 'patient'
})

// Sign in
const result = await apiClient.users.signIn({
  email: 'user@example.com',
  password: 'securepassword'
})
```

### Health Records
```typescript
// Add health record
await apiClient.healthRecords.addRecord({
  user_id: userId,
  title: 'Blood Test Results',
  type: 'lab_report',
  date_recorded: '2024-01-15',
  content: 'Test results show...'
})

// Upload file
await apiClient.healthRecords.uploadFile(recordData, fileData)
```

### Appointments
```typescript
// Book appointment
await apiClient.appointments.bookAppointment({
  patient_id: userId,
  doctor_id: doctorId,
  appointment_date: '2024-01-20',
  appointment_time: '10:00',
  reason: 'Regular checkup'
})

// Get available slots
const slots = await apiClient.appointments.getAvailableSlots(doctorId, '2024-01-20')
```

## 6. Testing the Backend

### Start Development Server
```bash
npm run dev
```

### Test API Endpoints
Use tools like Postman or curl to test the endpoints:

```bash
# Test user profile
curl -X GET "http://localhost:3000/api/users?action=profile" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Test doctor search
curl -X GET "http://localhost:3000/api/doctors?action=search&specialty=cardiology"
```

## 7. Production Deployment

### Environment Setup
1. Update production URLs in `.env.local`
2. Set secure JWT secrets
3. Configure CORS settings
4. Set up SSL certificates

### Database Optimization
1. Review and optimize queries
2. Set up database backups
3. Monitor performance metrics
4. Configure connection pooling

## 8. Next Steps

### Frontend Integration
1. **Connect dashboards** to backend APIs
2. **Implement authentication** flow in UI
3. **Add real-time updates** with Supabase subscriptions
4. **File upload components** for health records
5. **Data visualization** for analytics

### Advanced Features
1. **AI Integration** - Connect OpenAI/Claude for health insights
2. **Push Notifications** - Appointment reminders and alerts  
3. **Payment Integration** - Stripe for appointment fees
4. **Telemedicine** - Video call integration
5. **Insurance Claims** - API integration with insurance providers

### Mobile App
1. **React Native** version using same backend
2. **Offline sync** capabilities
3. **Health device integration** (fitness trackers, etc.)
4. **Emergency features** with location services

## 9. Monitoring & Maintenance

### Database Monitoring
- Query performance analysis
- Storage usage tracking
- User activity metrics

### API Monitoring
- Response time tracking
- Error rate monitoring
- Usage analytics per endpoint

### Security Audits
- Regular security reviews
- Dependency updates
- Penetration testing

## 10. Support & Documentation

### API Documentation
- Complete endpoint documentation available
- Example requests and responses
- Error codes and handling

### Developer Resources
- Code examples in repository
- Integration guides
- Best practices documentation

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run database migrations (after setting up Supabase)
# Copy schema.sql content to Supabase SQL Editor and run

# Test API endpoints
npm run test  # (when tests are implemented)
```

Your MediSaathi backend is now fully implemented and ready for integration with the frontend dashboards!