import axios from "axios";
import { createContext, useEffect, useState } from "react";

export interface IDrink {
    strDrink: string,
    strDrinkThumb: string,
    idDrink: string
}

export const mainContext = createContext({});

const MainProvider = ({children}: {children: React.ReactNode}) => {

    //erster State, um gefetchte Daten zu speichern
    // zweiter State, um den fetch Link dynamisch zu gestalten: hier für alkoholfrei/zufällig und alkoholsorte
    const [data, setData] = useState<IDrink[]>([]);
    const [link, setLink] = useState("")
    const [backgroundColor, setBackgroundColor] = useState<string>("")

    // useEffect(()=> {
    //     const fetchData = async () => {
    //         let url = "";
    //         if (link) {
    //             if (link === "zufall") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    //             } else if (link === "gin") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
    //             } else if (link === "vodka") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
    //             } else if (link === "scotch") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch"
    //             } else if (link === "rum") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum"
    //             }else if (link === "alkoholfrei") {
    //                 url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    //             }
    //             try {
    //                 const response = await axios.get(url)
    //                 if(response.data.drinks) {
    //                     setData(response.data.drinks)
    //                 }
    //             } catch (error) {
    //                 console.log("Error" + error);
    //             }
    //         }
    //     }
    //     fetchData()
    // }, [link])

    console.log(link);

    return ( 
        <>
        <mainContext.Provider value={{data, setLink, link, setData, backgroundColor, setBackgroundColor}}>
            {children}
        </mainContext.Provider>
        </>
     );
}
 
export default MainProvider;