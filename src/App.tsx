
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ApplicationRoutes } from "./routes";
import { About } from "./pages/About";
import { OrderProject } from "./pages/OrderProject";


function App() {

  const [_, i18n] = useTranslation()

  useEffect(
    () => {
      if (i18n.dir(i18n.language) === "rtl") {
        document.body.setAttribute("dir", "rtl")
      }
      else {
        document.body.setAttribute("dir", "ltr")
      }
    },
    [i18n.language]
  )

  return (
    <ApplicationLayout>

      <Routes>

        <Route
          path={ApplicationRoutes.pages.home}
          element={<HomePage />}
        />

        <Route
          path={ApplicationRoutes.pages.about}
          element={<About />}
        />

        <Route
          path={ApplicationRoutes.pages.orderProject}
          element={<OrderProject />}
        />

      </Routes>

    </ApplicationLayout>

  )
}

export default App