import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import "./Dashboard.css";

export const Dashboard = () => {
    const [showbanner, setShowbanner] = React.useState(true);
    return (
        <div className="dashboard">
            <h1>All deals and coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>
            {showbanner && <div className="banner">
                <div>
                    <p>Pay in 4 anywhere with the Chrome extension. </p>
                    <u className="extension"> Add to Chrome </u>
                </div>
                <AiOutlineClose onClick={() => setShowbanner(false)} className="closer"/>
            </div>}
        </div>
    )
}