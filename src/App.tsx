import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import CocktailList from "./pages/CocktailList"
import axios from "axios"
import { useContext, useEffect } from "react"
import { mainContext } from "./context/MainProvider"


function App() {

   const {data, setData, link, setLink} = useContext(mainContext) as any

  useEffect(()=> {
    const fetchData = async () => {
        let url = "";
        if (link) {
            if (link === "zufall") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            } else if (link === "gin") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
            } else if (link === "vodka") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
            } else if (link === "scotch") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch"
            } else if (link === "rum") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum"
            }else if (link === "alkoholfrei") {
                url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
            }
            try {
                const response = await axios.get(url)
                if(response.data.drinks) {
                    setData(response.data.drinks)
                    console.log(response.data.drinks);
                }
            } catch (error) {
                console.log("Error" + error);
            }
        }
    }
    fetchData()
}, [link])



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path=":categoryParam" element={<CocktailList/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
