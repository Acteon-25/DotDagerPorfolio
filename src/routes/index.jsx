import { createBrowserRouter } from "react-router-dom"

import HomePage from '@/pages/HomePage'
import NotFoundPage from "@/pages/NotFoundPage"
import WorkPage from "../pages/WorkPage"
import AboutPage from "../pages/AboutPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
])

