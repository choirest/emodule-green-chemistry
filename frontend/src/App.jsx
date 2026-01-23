import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import AppSidebar from './components/shared/AppSidebar';

// Student Components
import Beranda from './components/student/Beranda';
import Francis from './components/student/Francis';
import Pendahuluan from './components/student/Pendahuluan';
import KataPengantar from './components/student/KataPengantar';
import Pretest from './components/student/Pretest';
import Materi from './components/student/Materi';
import Kegiatan1 from './components/student/Kegiatan1';
import Kegiatan2 from './components/student/Kegiatan2';
import Posttest from './components/student/Posttest';

// Admin Components
import Dashboard from './components/admin/Dashboard';
import StudentList from './components/admin/StudentList';
import ResultAnalysis from './components/admin/ResultAnalysis';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

function AppRoutes() {
  const { user, loading } = useAuth();
  
  // Tampilkan loading saat cek auth
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />
        
        {/* Protected Routes */}
        <Route 
          path="*" 
          element={
            user ? (
              <SidebarProvider>
                <AppSidebar />
                <main className="w-full">
                  <Navbar />
                  <Routes>
                    <Route 
                      path="/" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Beranda />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/francis" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Francis />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/kata-pengantar" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <KataPengantar />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/pendahuluan" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Pendahuluan />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/pretest" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Pretest />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/materi" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Materi />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/kegiatan-1" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Kegiatan1 />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/kegiatan-2" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Kegiatan2 />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/post-test" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Posttest />
                        </ProtectedRoute>
                      } 
                    />
                    
                    {/* Admin Routes */}
                    <Route 
                      path="/admin" 
                      element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                          <Dashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/admin/students" 
                      element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                          <StudentList />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/admin/results/:studentId" 
                      element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                          <ResultAnalysis />
                        </ProtectedRoute>
                      } 
                    />
                  </Routes>
                </main>
              </SidebarProvider>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;