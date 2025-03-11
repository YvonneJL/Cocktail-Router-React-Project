import { useContext, useEffect, useState } from "react";
import { IDrink, mainContext } from "../context/MainProvider";
import axios from "axios";
import { useParams } from "react-router-dom";


interface CocktailProps {
  cocktail: IDrink;
  backgroundColor: string;
}

export interface IDrinkDetail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

const Cocktail = ({ cocktail }: CocktailProps) => {
  const [toggleId, setToggleId] = useState<boolean>(false);

  const [recipeData, setRecipeData] = useState<IDrinkDetail>({
    idDrink: "",
    strDrink: "",
    strDrinkAlternate: "",
    strTags: "",
    strVideo: "",
    strCategory: "",
    strIBA: "",
    strAlcoholic: "",
    strGlass: "",
    strInstructions: "",
    strInstructionsES: "",
    strInstructionsDE: "",
    strInstructionsFR: "",
    strInstructionsIT: "",
    strInstructionsZH_HANS: "",
    strInstructionsZH_HANT: "",
    strDrinkThumb: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strImageSource: "",
    strImageAttribution: "",
    strCreativeCommonsConfirmed: "",
    dateModified: "",
  });

  const {backgroundColor} = useContext(mainContext) as any

  //kann das noch in eine Funktion, die dann beim Klicken des Buttons aufgerufen wird?
  //was lief beim fetch falsch?
  //unten die ID wird rot markiert (button)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
      );
      if (response.data) {
        setToggleId(true);
        setRecipeData(response.data.drinks[0]);
        console.log(response.data.drinks[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`${backgroundColor} flex px-5 py-10 gap-4 items-center relative`}>
        <img
          className="w-1/2"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-black text-2xl">{cocktail.strDrink}</h2>
          <button
            onClick={() => fetchData()}
            id={cocktail.idDrink}
            className="bg-footer-header rounded-xl px-4 py-2 montserrat self-start"
          >
            Rezept
          </button>
        </div>
        {recipeData && (
          <section
            className="bg-footer-header absolute z-10 top-10 p-5 pb-10 left-1/2 -translate-x-1/2 w-full"
            style={{ display: toggleId ? "block" : "none" }}
          >
            <button className="mb-2 text-right" onClick={() => setToggleId(false)}>X</button>
            <h1 className="text-2xl mb-3 text-center">{recipeData.strDrink}</h1>
            <div className="flex justify-center mb-10">
              <img className="w-1/2" src={recipeData.strDrinkThumb} alt={recipeData.strDrink} />
            </div>
            <article>
              <h4 className="mb-4 text-xl montserrat">Zutaten</h4>
              <article className="mb-4 text-sm montserrat">
              <p>{recipeData.strIngredient1}</p>
              <p>{recipeData.strIngredient2}</p>
              <p>{recipeData.strIngredient3}</p>
              </article>

              <p className="montserrat text-sm">{recipeData.strInstructions}</p>
            </article>
            
          </section>
        )}
      </div>
    </>
  );
};

export default Cocktail;
