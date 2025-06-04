import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom" 

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<h1>Lista dei miei film</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
