import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
  Search,
  Plus,
  Bell,
  Settings,
  UserPlus,
  Stethoscope,
  BedSingle,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
} from "lucide-react"

export default function HospitalDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-green-50/30">
      {/* Header */}
      <div className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">City General Hospital</h1>
                <p className="text-sm text-muted-foreground">Administrative Dashboard • Dr. James Wilson, Chief Administrator</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <Badge className="ml-1 h-4 w-4 rounded-full p-0 text-xs">8</Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Doctors</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">48</p>
                    <Badge variant="secondary" className="text-xs">+3</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Patients Today</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">324</p>
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUpRight className="h-3 w-3" />
                      12%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BedSingle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bed Occupancy</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">85%</p>
                    <div className="flex items-center text-red-600 text-xs">
                      <ArrowUpRight className="h-3 w-3" />
                      5%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">$2.4M</p>
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUpRight className="h-3 w-3" />
                      8%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Management */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Doctor Management</CardTitle>
                  <CardDescription>Manage hospital medical staff</CardDescription>
                </div>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Add Doctor
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Search doctors..." />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Dr. Sarah Smith",
                      specialty: "Cardiology",
                      patients: 45,
                      rating: 4.9,
                      status: "available",
                      avatar: "SS",
                      schedule: "9 AM - 5 PM"
                    },
                    {
                      name: "Dr. Michael Chen",
                      specialty: "Neurology",
                      patients: 38,
                      rating: 4.8,
                      status: "busy",
                      avatar: "MC",
                      schedule: "8 AM - 4 PM"
                    },
                    {
                      name: "Dr. Emily Davis",
                      specialty: "Pediatrics",
                      patients: 52,
                      rating: 4.9,
                      status: "available",
                      avatar: "ED",
                      schedule: "10 AM - 6 PM"
                    },
                    {
                      name: "Dr. Robert Wilson",
                      specialty: "Surgery",
                      patients: 23,
                      rating: 4.7,
                      status: "surgery",
                      avatar: "RW",
                      schedule: "7 AM - 3 PM"
                    },
                  ].map((doctor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg card-hover">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{doctor.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{doctor.name}</p>
                            <Badge
                              variant={
                                doctor.status === 'available' ? 'default' :
                                doctor.status === 'busy' ? 'secondary' :
                                'destructive'
                              }
                              className="text-xs"
                            >
                              {doctor.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                            <span>{doctor.patients} patients</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {doctor.rating}
                            </div>
                            <span>{doctor.schedule}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointment Management */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Overview</CardTitle>
                <CardDescription>Today's appointment statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="today" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="week">This Week</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                  </TabsList>

                  <TabsContent value="today" className="space-y-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">89</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">24</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-orange-600">15</p>
                        <p className="text-xs text-muted-foreground">Waiting</p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">8</p>
                        <p className="text-xs text-muted-foreground">Cancelled</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Recent Appointments</h4>
                      {[
                        {
                          time: "2:30 PM",
                          patient: "Alice Johnson",
                          doctor: "Dr. Smith",
                          type: "Consultation",
                          status: "completed"
                        },
                        {
                          time: "3:00 PM",
                          patient: "Bob Wilson",
                          doctor: "Dr. Chen",
                          type: "Follow-up",
                          status: "in-progress"
                        },
                        {
                          time: "3:30 PM",
                          patient: "Carol Davis",
                          doctor: "Dr. Davis",
                          type: "Checkup",
                          status: "waiting"
                        },
                      ].map((appointment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <p className="text-sm font-medium">{appointment.time}</p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">{appointment.patient}</p>
                              <p className="text-xs text-muted-foreground">
                                {appointment.doctor} • {appointment.type}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              appointment.status === 'completed' ? 'default' :
                              appointment.status === 'in-progress' ? 'secondary' :
                              'outline'
                            }
                            className="text-xs"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="week">
                    <div className="text-center py-8">
                      <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Weekly appointment analytics</p>
                      <Button variant="outline" className="mt-2">
                        View Analytics
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="month">
                    <div className="text-center py-8">
                      <PieChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Monthly performance overview</p>
                      <Button variant="outline" className="mt-2">
                        Generate Report
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Department Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Performance metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Cardiology",
                      patients: 125,
                      satisfaction: 94,
                      revenue: "$450K",
                      growth: 12
                    },
                    {
                      name: "Neurology",
                      patients: 89,
                      satisfaction: 91,
                      revenue: "$380K",
                      growth: 8
                    },
                    {
                      name: "Pediatrics",
                      patients: 203,
                      satisfaction: 96,
                      revenue: "$320K",
                      growth: 15
                    },
                    {
                      name: "Surgery",
                      patients: 67,
                      satisfaction: 89,
                      revenue: "$890K",
                      growth: -3
                    },
                  ].map((dept, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{dept.name}</h4>
                        <div className="flex items-center gap-1 text-sm">
                          {dept.growth > 0 ? (
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-600" />
                          )}
                          <span className={dept.growth > 0 ? "text-green-600" : "text-red-600"}>
                            {Math.abs(dept.growth)}%
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Patients</p>
                          <p className="font-medium">{dept.patients}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Satisfaction</p>
                          <div className="flex items-center gap-1">
                            <p className="font-medium">{dept.satisfaction}%</p>
                            <Progress value={dept.satisfaction} className="w-12 h-1" />
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium">{dept.revenue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Hospital Analytics */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Analytics Overview</CardTitle>
                </div>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Patient Satisfaction</p>
                      <p className="text-2xl font-bold text-green-600">92%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                  <Progress value={92} className="mt-2" />
                </div>
                
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Average Wait Time</p>
                      <p className="text-2xl font-bold">18 min</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Emergency Response</p>
                      <p className="text-2xl font-bold">4.2 min</p>
                    </div>
                    <AlertCircle className="h-8 w-8 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource Management */}
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>Current resource utilization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>ICU Beds</span>
                    <span>18/20</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>General Beds</span>
                    <span>145/180</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Operating Rooms</span>
                    <span>6/8</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Equipment Usage</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            {/* Alerts & Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Important notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border-l-4 border-red-500 bg-red-50/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-900">Critical Equipment</p>
                      <p className="text-xs text-red-700">MRI Machine #2 requires maintenance</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-l-4 border-orange-500 bg-orange-50/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-900">Staff Shortage</p>
                      <p className="text-xs text-orange-700">Night shift nursing understaffed</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-l-4 border-green-500 bg-green-50/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Certification Complete</p>
                      <p className="text-xs text-green-700">Hospital accreditation renewed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New Doctor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Schedules
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* Subscription Info */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>MediSaathi Enterprise</CardTitle>
                <CardDescription>Current subscription plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Plan</span>
                  <Badge className="bg-primary">Enterprise</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Doctors</span>
                  <span className="font-medium">48/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Storage</span>
                  <span className="font-medium">2.4TB/5TB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Next Billing</span>
                  <span className="font-medium">Dec 23, 2024</span>
                </div>
                <Button size="sm" className="w-full">
                  Manage Subscription
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}