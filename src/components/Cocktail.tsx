import { IDrink } from "../context/MainProvider";

interface CocktailProps {
    cocktail: IDrink
    backgroundColor: string
}


const Cocktail = ({cocktail, backgroundColor}: CocktailProps) => {
    console.log(backgroundColor);
    return ( 
        <article>
            <div className={`${backgroundColor} flex px-5 py-10`}>
                <img className="w-1/2" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h2 className="text-black">{cocktail.strDrink}</h2>
            </div>
        </article>
     );
}
 
export default Cocktail;