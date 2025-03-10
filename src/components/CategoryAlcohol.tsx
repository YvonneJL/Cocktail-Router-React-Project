import { Link } from "react-router-dom";
import { IAlcoholCategory } from "../data/data";

interface IAlcoholCategoryProps {
  item: IAlcoholCategory;
}

const CategoryAlcohol = ({ item }: IAlcoholCategoryProps) => {
  return (
    <>
      <article className={`px-5 py-20 ${item.backgroundColor}`}>
        <Link to={item.linkTo} className="text-4xl font-bold">
          {item.name}
        </Link>
        <p className="montserrat pt-3">{item.desc}</p>
      </article>
    </>
  );
};

export default CategoryAlcohol;
