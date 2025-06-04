import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import HomePage from "./pages/Homepage"
import MovieDetailPage from "./pages/MovieDetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
