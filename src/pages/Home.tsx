

import CategoryAlcohol from "../components/CategoryAlcohol";
import { allAlcCategories, IAlcoholCategory } from "../data/data";


const Home = () => {

    return ( 
    <>
        {allAlcCategories.map((item, index)=> (
            <div key={index}>
                <CategoryAlcohol item={item}/>
            </div>
        ))}
    </> 
);
}
 
export default Home;