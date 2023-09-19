import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper cursor-pointer flex items-center justify-between md:justify-center md:gap-8 leftPadding rightPadding topPadding bottomPadding">
                <span className="logo">
                    SHOP.CO
                </span>
                <ul className="ul hidden md:flex items-center justify-center md:gap-4">
                    <li className='flex items-center justify-center gap-2'>
                        <span className='navbar_li'>Shop</span>
                        <img src="/images/navbar/down_arrow.png" alt="" />
                    </li>
                    <li className="navbar_li">On Sale</li>
                    <li className="navbar_li">New Arrivals</li>
                    <li className="navbar_li">Brands</li>
                </ul>
                <div className="input_boundary hidden md:flex items-center justify-center">
                    <input className='navbar_search_input w-full p-2 pl-0 pr-0 md:block hidden' type="text" />
                    <img src="/images/navbar/search_bar.png" alt="" />
                </div>
                <div className="carts_images flex items-center justify-center gap-2">
                    <img className=' md:hidden block' src="/images/navbar/search_bar.png" alt="" />
                    <img src="/images/navbar/shoping_cart.png" alt="" />
                    <img src="/images/navbar/person.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Navbar