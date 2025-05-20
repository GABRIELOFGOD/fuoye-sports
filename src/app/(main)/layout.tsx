import BottomNav from "@/components/layout/BottomNav"
import { ReactNode } from "react"

const MainLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="flex flex-col h-screen md:shadow-md md:rounded-md overflow-hidden w-full md:w-md mx-auto justify-between">
      {children}
      <div className="mt-auto w-full">
        <BottomNav />
      </div>
    </div>
  )
}
export default MainLayout