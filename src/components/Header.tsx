import Nav from "./Nav";

const Header = () => {
    return ( 
<header className="bg-footer-header p-5">
    <Nav/>
    <section className="pb-10">
    <h1 className="text-4xl pb-3">Cocktails & Getränke!</h1>
    <h2 className="montserrat font-light text-sm">Herzlich Willkommen in der Welt der Cocktails 
    und Getränke!</h2>
    </section>
    <section className="pb-5 montserrat flex gap-3">
        <input className="bg-my-white rounded-xl placeholder-footer-header text-center text-sm" type="text" placeholder="type something"/>
        <button className="bg-cocktial-blue text-sm px-4 py-2 rounded-xl text-footer-header">Search</button>
    </section>
    <div className="flex justify-center">
        <img src="../../public/images/Arrows.png" alt="arrows pointing down" />
    </div>
</header>

     );
}
 
export default Header;