import { cn } from "@/lib/utils"
import { Bookmark, Home, Table, User } from "lucide-react"
import Link from "next/link"

const BottomNav = () => {

  const bottomNavItems = [
    {
      id: 1,
      name: "home",
      path: "/",
      icon: Home
    },
    {
      id: 2,
      name: "standing",
      path: "/standing",
      icon: Table
    },
    {
      id: 3,
      name: "favourite",
      path: "/favourite",
      icon: Bookmark
    },
    {
      id: 4,
      name: "profile",
      path: "/profile",
      icon: User
    }
  ]
  
  return (
    <div>
      <div className="w-full shadow-md px-3 py-5 grid grid-cols-4 border-separate">
        {bottomNavItems.map(({
          icon: Icon,
          id, path
        }) => (
          <Link
            key={id}
            className={cn(
              "w-full flex justify-center items-center"
            )}
            href={path}
          >
            <Icon
              size={20}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default BottomNav