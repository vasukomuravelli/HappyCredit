import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    const [showshop, setShowshop] = React.useState(false);
    const [showhelp, setShowhelp] = React.useState(false);
    const [showmenu,setShowmenu] = React.useState(false);
    return (
        <>
        <div className="navbar">
            <div className="navbar-left">
               <svg width="81" height="20" viewBox="0 0 81 20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0, 0) scale(1)"><path class="fill" d="M78.3352549,14.3292706 C77.0678017,14.3292706 76.0403439,15.3567284 76.0403439,16.6243597 C76.0403439,17.8916348 77.0678017,18.9192707 78.3352549,18.9192707 C79.6027081,18.9192707 80.630344,17.8916348 80.630344,16.6243597 C80.630344,15.3567284 79.6027081,14.3292706 78.3352549,14.3292706" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M70.7958568,7.22817345 L70.7958568,6.4467803 L74.4529833,6.4467803 L74.4529833,18.6618356 L70.7958568,18.6618356 L70.7958568,17.8811547 C69.7626656,18.5857975 68.5156063,19 67.1704277,19 C63.6107082,19 60.7250027,16.1142945 60.7250027,12.554575 C60.7250027,8.99485561 63.6107082,6.10915009 67.1704277,6.10915009 C68.5156063,6.10915009 69.7626656,6.52335256 70.7958568,7.22817345 Z M67.4697718,15.6974209 C69.3000267,15.6974209 70.7835696,14.2902722 70.7835696,12.554575 C70.7835696,10.8188779 69.3000267,9.41208536 67.4697718,9.41208536 C65.6395168,9.41208536 64.1559739,10.8188779 64.1559739,12.554575 C64.1559739,14.2902722 65.6395168,15.6974209 67.4697718,15.6974209 Z" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M54.2263333,6.11823191 C52.765406,6.11823191 51.3828316,6.57178896 50.4584442,7.82312205 L50.4584442,6.4474926 L46.8169884,6.4474926 L46.8169884,18.6618356 L50.503141,18.6618356 L50.503141,12.2427657 C50.503141,10.3852653 51.7487757,9.47565814 53.2485235,9.47565814 C54.8558285,9.47565814 55.7798597,10.4358386 55.7798597,12.2174791 L55.7798597,18.6618356 L59.4327124,18.6618356 L59.4327124,10.8940256 C59.4327124,8.05141421 57.1725844,6.11823191 54.2263333,6.11823191" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M41.5278044,8.03788051 L41.5278044,6.44695838 L37.7834212,6.44695838 L37.7834212,18.6618356 L41.536174,18.6618356 L41.536174,12.9588053 C41.536174,11.0347048 43.6216104,10.0004452 45.0686479,10.0004452 C45.0834281,10.0004452 45.097318,10.0018698 45.1120982,10.0020479 L45.1120982,6.44767068 C43.6269526,6.44767068 42.2609392,7.08357654 41.5278044,8.03788051" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M32.2128788,7.22817345 L32.2128788,6.4467803 L35.8701833,6.4467803 L35.8701833,18.6618356 L32.2128788,18.6618356 L32.2128788,17.8811547 C31.1796876,18.5857975 29.9326283,19 28.5876277,19 C25.0279083,19 22.1422028,16.1142945 22.1422028,12.554575 C22.1422028,8.99485561 25.0279083,6.10915009 28.5876277,6.10915009 C29.9326283,6.10915009 31.1796876,6.52335256 32.2128788,7.22817345 Z M28.8867938,15.6974209 C30.7170487,15.6974209 32.2007697,14.2902722 32.2007697,12.554575 C32.2007697,10.8188779 30.7170487,9.41208536 28.8867938,9.41208536 C27.0567169,9.41208536 25.5729959,10.8188779 25.5729959,12.554575 C25.5729959,14.2902722 27.0567169,15.6974209 28.8867938,15.6974209 Z" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M16.8150889 18.6618356 20.6429893 18.6618356 20.6429893 1.00338343 16.8150889 1.00338343z" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M14.1770857,1 L10.2104649,1 C10.2104649,4.25111544 8.71570325,7.23511837 6.10957549,9.1873547 L4.53806353,10.3642524 L10.6271604,18.6673559 L15.6335612,18.6673559 L10.0307872,11.0272257 C12.6865979,8.38263373 14.1770857,4.82469505 14.1770857,1" fill="rgba(23, 18, 15, 1)"></path><path class="fill" d="M0 18.6666436 4.05334336 18.6666436 4.05334336 1 0 1z" fill="rgba(23, 18, 15, 1)"></path></g></svg>
                <div className="navbarOptions">
                    <div onMouseEnter={()=>setShowshop(true)} onMouseLeave={()=>setShowshop(false)}>
                        <p style={{fontWeight:500}}>Shop</p>
                        {showshop  ? <div className="dropdown">
                        <div>
                            <h3>Deals</h3>
                            <h3>Trends</h3>
                            <h3>Klarna stores</h3>
                            <h3>Browser extension</h3>
                            <h3>In-store</h3>
                            <h3>Rewards club</h3>
                        </div>
                        <div>
                            <p>Categories</p>
                            <p className="navCat">Auto</p>
                            <p className="navCat">Beauty</p>
                            <p className="navCat">Black owned businesses</p>
                            <p className="navCat">Clothes & fashion</p>
                            <p className="navCat">Electronics</p>
                            <p className="navCat">Home</p>
                            <p className="navCat">Luxury</p>
                            <p className="navCat">Toys & entertainment</p>
                        </div>
                        <div>
                            <p className="navCat">Featured stores</p>
                            <p className="navCat">Bed Bath & Beyond</p>
                            <p className="navCat">Macy's</p>
                            <p className="navCat">Sephora</p>
                            <p className="navCat">H&M</p>
                        </div>
                    </div> : null}    
                    </div>        
                    <p>How it works</p>
                    <p>Pay in 4</p>
                    <p>The shopping app</p>
                    <div onMouseEnter={()=>setShowhelp(true)} onMouseLeave={()=>setShowhelp(false)}>
                        <p style={{fontWeight:500}}>Help</p>
                        { showhelp && <div className="dropdown" >
                                        <p>Customer support</p>
                                        <p>Business support</p>
                                        <p>Operational status</p>
                                    </div>}                            
                    </div>    
                </div>
            </div>
            <div className="navbar-right">
                <button>Log in</button>
                <button>Get the app</button>
                    <GiHamburgerMenu className="hamburger" onClick={()=>setShowmenu(!showmenu)}/>
            </div>
            {showmenu && <div className="showMenu">
                <p>Shop</p>
                <p>How it works</p>
                <p>Pay in 4</p>
                <p>The shopping app</p>
                <p>Help</p>
            </div>}
        </div>                        
    </>)
}