import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <>
 <header>
    <div className="logo" >My Shop</div>
    <nav>
        <ul>
            <li href="#">Home</li>
            <li href="#">Products</li>
        </ul>
    </nav>
    <AddToCart/>
 </header>
    </>
  );
};

export default Header;
