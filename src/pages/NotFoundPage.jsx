import { Link } from "react-router-dom"

import Error from "@/assets/img/Error404.webp"
import Home from "@/assets/svg/Home.jsx"

function NotFoundPage() {
  return (
    <div className="bg-slate-950 h-screen content-center justify-center items-center flex flex-col text-[#f7e8c8] font-lora text-center">
      <h1 className="text-xl sm:text-4xl font-bold">Vuelve a la página principal</h1>
      <img src={Error} alt="Error 404" className="w-full sm:w-1/2" />
      <p className="text-xl sm:text-4xl font-bold">La página que estás buscando no existe.</p>
      <Link to="/" className="transition-transform transform hover:scale-110 p-4">
        <Home width="100px" height="100px" />
      </Link>
    </div>
  )
}

export default NotFoundPage