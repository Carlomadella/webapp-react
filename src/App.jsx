import { BrowserRouter, Route, Routes } from "react-router-dom" 
import HomePage from "./pages/Homepage"
import DefaultLayout from "./layouts/defaultLayout"
import MovieDetailPage from "./pages/MovieDetailPage"
import { MovieProvider } from "./context/MovieContext"
import NotFoundPage from "./pages/NotFoundPage"


function App() {

  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
