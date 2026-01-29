import { Link, useLocation, useNavigate } from "react-router-dom"
import { 
  ChevronDown, 
  ChevronUp, 
  Home, 
  User, 
  BookOpen, 
  FileText, 
  ClipboardList, 
  BookMarked, 
  LayoutDashboard, 
  Users, 
  FlaskConical
} from "lucide-react"
import { useAuth } from "@/context/AuthContext";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

const AppSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const studentMenus = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Halaman Francis", href: "/francis", icon: User },
    { label: "Kata Pengantar", href: "/kata-pengantar", icon: BookOpen },
    { label: "Pendahuluan", href: "/pendahuluan", icon: FileText },
    { label: "Pretest", href: "/pretest", icon: ClipboardList },
    { 
      label: "Materi dan Kata Kunci", 
      href: "/materi", 
      icon: BookMarked,
      submenu: [
        { label: "Pengertian Kimia Hijau", href: "#a" },
        { label: "12 Prinsip Kimia Hijau", href: "#b" },
        { label: "1. Waste Prevention", href: "#1" },
        { label: "2. Atom Economy", href: "#2" },
        { label: "3. Less Hazardous Chemical Synthesis", href: "#3" },
        { label: "4. Design Safer Chemical", href: "#4" },
        { label: "5. Safer Solvents & Auxiliaries", href: "#5" },
        { label: "6. Design for Energy Efficiency", href: "#6" },
        { label: "7. Use of Renewable Feddstocks", href: "#7" },
        { label: "8. Reduce Derivatives", href: "#8" },
        { label: "9. Catalyst", href: "#9" },
        { label: "10. Design for Degradation", href: "#10" },
        { label: "11. Real-Time Pollution Prevention", href: "#11" },
        { label: "12. Safer Chemistry for Accident Prevention", href: "#12" },
      ],
    },
    {
      label: "Kegiatan 1",
      href: "/kegiatan-1",
      icon: FlaskConical,
      submenu: [
        { label: "Identifikasi Masalah", href: "#a" },
        { label: "Merumuskan Hipotesis", href: "#b" },
        { label: "Mengumpulkan Data dan Menguji Hipotesis", href: "#c" },
        { label: "Hasil Pengamatan", href: "#d" },
        { label: "Analisis Data", href: "#e" },
        { label: "Kesimpulan", href: "#f" },
        { label: "Evaluasi Proses Belajar", href: "#g" },
      ],
    },
    {
      label: "Kegiatan 2",
      href: "/kegiatan-2",
      icon: FlaskConical,
      submenu: [
        { label: "Identifikasi Masalah", href: "#h" },
        { label: "Merumuskan Hipotesis", href: "#i" },
        { label: "Mengumpulkan Data dan Menguji Hipotesis", href: "#j" },
        { label: "Hasil Pengamatan", href: "#k" },
        { label: "Analisis Data", href: "#l" },
        { label: "Kesimpulan", href: "#m" },
        { label: "Evaluasi Proses Belajar", href: "#n" },
      ],
    },
    {
      label: "Kegiatan 3",
      href: "/kegiatan-3",
      icon: FlaskConical,
      submenu: [
        { label: "Identifikasi Masalah", href: "#o" },
        { label: "Merumuskan Hipotesis", href: "#p" },
        { label: "Mengumpulkan Data dan Menguji Hipotesis", href: "#q" },
        { label: "Hasil Pengamatan", href: "#r" },
        { label: "Analisis Data", href: "#s" },
        { label: "Kesimpulan", href: "#t" },
        { label: "Evaluasi Proses Belajar", href: "#u" },
      ],
    },
    { label: "Post Test", href: "/post-test", icon: ClipboardList },
  ]

  const adminMenus = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Data Siswa', href: '/admin/students', icon: Users }
  ];

  const menus = user?.role === 'ADMIN' ? adminMenus : studentMenus;

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full">
        <SidebarGroup className="flex flex-col h-full">
          <SidebarHeader className="mb-1 flex-shrink-0">
            <div className="p-2 flex items-center">
              <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-full h-8 rounded-lg flex gap-4 items-center justify-center text-green-500">
                  <img src="/gr-ch.png" alt="Green Chemistry" className="w-8 h-8" />
                  <h3>E-Modul <br/>Kimia Hijau</h3>
                </div>
              </Link>
            </div>
          </SidebarHeader>
          <Separator className="flex-shrink-0" />
          <SidebarGroupContent className="mt-2 flex-1 overflow-y-auto">
            <SidebarMenu>
              {menus.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <SidebarMenuItem key={item.label}>
                    {item.submenu ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={isActive ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-500" : ""}
                          >
                            <a href={item.href} className="flex items-center gap-2 w-full">
                              {Icon && <Icon className="w-4 h-4" />}
                              <span>{item.label}</span>
                            </a>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.submenu.map((subItem) => {
                              const isSubActive = location.hash === subItem.href;
                              
                              return (
                                <SidebarMenuSubItem key={subItem.label}>
                                  <SidebarMenuSubButton 
                                    asChild
                                    className={isSubActive ? "bg-green-50 text-green-600 font-medium" : ""}
                                  >
                                    <a href={subItem.href}>
                                      <span>{subItem.label}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton 
                        asChild
                        className={isActive ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-500" : ""}
                      >
                        <a href={item.href} className="flex items-center gap-2">
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="flex-shrink-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User /> {user?.email}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {/* <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem> */}
                <DropdownMenuItem onClick={handleLogout}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar