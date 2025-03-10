import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IDrink, mainContext } from "../context/MainProvider";
import Cocktail from "../components/Cocktail";
import { allAlcCategories } from "../data/data";

const CocktailList = () => {

    const {categoryParam} = useParams();
    console.log(categoryParam);

    const {data, setLink} = useContext(mainContext) as any
    console.log(data);

    useEffect(()=> {
        setLink(categoryParam)
    }, [categoryParam])

    return (
    <>
    {data.map((cocktail: IDrink, backgroundColor: string)=> (
        <div key={cocktail.idDrink}>
        <Cocktail cocktail={cocktail} backgroundColor={backgroundColor}/>
    </div>
    ))}
    </>  
);
}
 
export default CocktailList;