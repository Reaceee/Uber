import React from 'react'
import ProductsIcon from '../assets/images/Products.svg'
import Logo from '../assets/images/UberLogo.png'

const Header = () => {

    const drop = React.useRef()
    const [dropdn, toggleDropdn] = React.useState(0)
    const [dropBox, toggleDropBox] = React.useState("DropDown invisible duration-700 opacity-0 -mt-6 absolute bg-white pb-2 - z-2 shadow-xl top-[11vh]")
    const Dropdown = () => {
        return (
            <>
                <div ref={drop} className={dropBox}>
                    <a href='/about' > <div className="li">About Us </div></a>
                    <div className="li">Our Offerings</div>
                    <div className="li">How Uber works</div>
                    <div className="li">Global Citizenship</div>
                    <div className="li">Newsroom</div>
                    <div className="li">Investor Relations</div>
                    <div className="li">Blog</div>
                    <div className="li">Careers</div>
                </div>
            </>
        )
    }
    function showDropDown() {
        if (dropdn === 0) {
            toggleDropdn(180);
            toggleDropBox("DropDown visible duration-70  z-10 absolute opacity-1 bg-white pb-2 shadow-xl top-[11vh]");
        } else {
            toggleDropdn(0);
            toggleDropBox('DropDown invisible  duration-700 opacity-0 -mt-6 absolute bg-white pb-2 -z-2 shadow-xl top-[11vh]')
        }
    }

    const globeIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="#fff" d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" ></path></svg>
    let DropArrow = <svg style={{ 'rotate': dropdn + 'deg', transition: '.23s' }} width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path></svg>


    return (
        <>
            <div className="flex items-center text-white lg:pl-14 px-4 bg-black min-h-[50px] h-[11vh] justify-between">


                <div className="COL1 flex items-center">
                <a href="/"><img src={Logo} className="ml-3 min-h-[7px] h-[2.7vh] lg:h-[3vh]" /></a>

                    <div className="lg:flex hidden ml-5 gap-1">
                        <div className="allCom">
                            <div className="flex ">
                                <div className="link Company flex gap-2 items-center" onClick={showDropDown}> Company {DropArrow} </div>
                                <Dropdown />

                            </div>
                        </div>

                        <div className="link">Safety</div>
                        <div className="link">Help</div>
                    </div>
                </div>


                <div className="COL2 flex gap-2 items-center">

                    <div className="lg:flex hidden gap-1 mr-2">
                        <div className="link flex gap-2 items-center">{globeIcon} EN</div>
                        <div className="link flex gap-2 items-center"><img src={ProductsIcon} width={15} className="mr-1" /> Products</div>
                    </div>

                    <div className="link flex gap-2 items-center">Log in</div>
                    <a href="/sign-up" className="link signUp flex gap-2 items-center text-black bg-white">Sign up</a>

                    <div className="Hamb link flex flex-col justify-center gap-2 aspect-square scale-50 lg:invisible">
                        <div className="line w-6 h-1 bg-white"></div>
                        <div className="line w-6 h-1 bg-white"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;