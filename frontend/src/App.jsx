import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SidebarProvider } from './components/ui/sidebar';
import AppSidebar from './components/shared/AppSidebar';

// Student Components
import Beranda from './components/student/Beranda';
import Francis from './components/student/Francis';
import KataPengantar from './components/student/KataPengantar';
import Pendahuluan from './components/student/Pendahuluan';
import Kerangka from './components/student/Kerangka';
import Kegiatan1 from './components/student/Kegiatan1';
import Kegiatan2 from './components/student/Kegiatan2';
import Kegiatan3 from './components/student/Kegiatan3';
import Kegiatan4 from './components/student/Kegiatan4';
import Evaluasi from './components/student/Evaluasi';
import KunciJawaban from './components/student/KunciJawaban';
import Glosarium from './components/student/Glosarium';
import DaftarPustaka from './components/student/DaftarPustaka';

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

const RoleBasedRedirect = () => {
  const { user } = useAuth();
  
  if (user?.role === 'ADMIN') {
    return <Navigate to="/admin" replace />;
  }
  
  return <Beranda />;
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
        <Route 
          path="/login" 
          element={
            !user ? <Login /> : (
              user.role === 'ADMIN' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/register" 
          element={
            !user ? <Register /> : (
              user.role === 'ADMIN' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />
            )
          } 
        />

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
                      element={<RoleBasedRedirect />} 
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
                      path="/kerangka-modul" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Kerangka />
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
                      path="/kegiatan-3" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Kegiatan3 />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/kegiatan-4" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Kegiatan4 />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/evaluasi" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Evaluasi />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/kunci-jawaban" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <KunciJawaban />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/glosarium" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <Glosarium />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/daftar-pustaka" 
                      element={
                        <ProtectedRoute allowedRoles={['SISWA']}>
                          <DaftarPustaka />
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