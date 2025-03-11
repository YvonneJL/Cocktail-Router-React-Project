import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav className="flex justify-between pb-15">
            <h2>DRINKS & CHILL</h2>
            <Link to="/" className="montserrat">HOME</Link>
        </nav>
        </>
     );
}
 
export default Nav;