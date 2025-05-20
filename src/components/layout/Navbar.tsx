import { Bell, LayoutDashboard, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface NavProps {
  title?: string;
  icons?: {
    first: {
      icon: LucideIcon,
      path: string;
    },
    second?: {
      icon: LucideIcon,
      path: string;
    }
  }
}

const Navbar = ({
  title, icons
}: NavProps) => {
  return (
    <div>
      <div className="flex justify-between px-3 py-2 bg-background shadow-sm">
        {icons?.first ? (
          <Link href={icons.first.path}>
            <icons.first.icon className="w-5 h-5" />
          </Link>
        ) : (
          <LayoutDashboard className="w-5 h-5" />
        )}
        <p className="text-sm font-extrabold uppercase">
          {title ? title : "FUOYE SPORTS"}
        </p>
        <Bell />
      </div>
    </div>
  )
}
export default Navbar