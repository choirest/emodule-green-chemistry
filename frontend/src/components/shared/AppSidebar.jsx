import { Link, useLocation, useNavigate } from "react-router-dom"
import { ChevronDown, User2, ChevronUp } from "lucide-react"
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
    { label: "Beranda", href: "/" },
    { label: "Halaman Francis", href: "/francis" },
    { label: "Kata Pengantar", href: "/kata-pengantar" },
    { label: "Pendahuluan", href: "/pendahuluan" },
    { label: "Pretest", href: "/pretest" },
    { label: "Materi dan Kata Kunci", href: "/materi" },
    {
      label: "Kegiatan 1",
      href: "/kegiatan-1",
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
    { label: "Post Test", href: "/post-test" },
  ]

  const adminMenus = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Data Siswa', href: '/admin/students' }
  ];

  const menus = user?.role === 'ADMIN' ? adminMenus : studentMenus;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="mb-1">
            <div className="p-2 flex items-center">
              <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
                <div className="w-full h-8 rounded-lg flex gap-4 items-center justify-center text-green-500">
                  <img src="/gr-ch.png" alt="Green Chemistry" className="w-8 h-8" />
                  <h3>E-Modul <br/>Green Chemistry</h3>
                </div>
              </Link>
            </div>
          </SidebarHeader>
          <Separator />
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {menus.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <SidebarMenuItem key={item.label}>
                    {item.submenu ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={isActive ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-500" : ""}
                          >
                            <a href={item.href}>
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
                        <a href={item.href}>
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user?.email}
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