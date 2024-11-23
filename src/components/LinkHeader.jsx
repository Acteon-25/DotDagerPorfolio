import { NavLink } from "react-router-dom"

function LinkHeader({ to, title, type }) {
  const isActive = window.location.pathname === to;
  return (
    <div
      className={`flex items-center space-x-4 w-full`}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-red-500 py-2 px-6 mx-auto rounded-full"
            : "py-2 px-6 mx-auto rounded-full transition-transform transform hover:scale-105 text-white"}
      >
        {title}
      </NavLink>
      <div
        className={`size-6 flex items-center justify-center ${type === "circle"
          ? "rounded-full"
          : "transform rotate-45"
          } border-2 border-white`}
      >
        <div
          className={
            `size-3 ${type === "circle" ? "rounded-full" : ""
            } ${isActive ? "bg-orange-500" : "bg-black"}`
          }
        ></div>
      </div>
    </div>
  )
}

export default LinkHeader