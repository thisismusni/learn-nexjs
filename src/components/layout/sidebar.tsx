import Link from "next/link";
import { Box, Settings, Tag, Users } from "lucide-react";
import ButtonMenu, { ButtonMenuProps } from "@/components/button/button-menu";

const ListMenu: ButtonMenuProps[] = [
  {
    title: "Produk",
    icon: <Box />,
    href: "/dashboard/produk",
  },
  {
    title: "Kategori",
    icon: <Tag />,
    href: "/dashboard/kategori",
  },
  {
    title: "User",
    icon: <Users />,
    href: "/dashboard/user",
  },
  {
    title: "Setting",
    icon: <Settings />,
    href: "/dashboard/setting",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-slate-600 text-white flex flex-col ">
      <Link
        href="/dashboard"
        className="w-full h-[70px] text-3xl font-bold text-center py-4 px-2 border-b-[1px] border-slate-100/50"
      >
        Admin
      </Link>
      <nav className="p-4">
        <ul className="space-y-2">
          {ListMenu.map((menu) => {
            return (
              <li key={menu.href}>
                <ButtonMenu
                  title={menu.title}
                  icon={menu.icon}
                  href={menu.href}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
