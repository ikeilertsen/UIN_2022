import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-green-300">
      <Outlet />
    </main>
  )
}
