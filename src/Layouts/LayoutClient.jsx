import Header from "@/components/Header"
import Logo from "@/assets/svg/Logo.jsx"

function LayoutClient({ children }) {
  return (
    <>
      <Header />
      <main className="bg-black text-slate-200 min-h-screen">
        <Logo className="fixed top-0 left-0 right-0 z-50 flex flex-col justify-between items-center py-2 px-4 size-32"
        />
        {children}
      </main>
    </>
  )
}

export default LayoutClient