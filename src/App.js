import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import MainSection from "./components/MainSection/MainSection"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<MainSection />} />
            <Route path="products/:productId" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
