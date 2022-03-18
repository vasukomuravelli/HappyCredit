import React from 'react';
import { AiOutlineSearch, AiOutlineDown,AiOutlineClose,AiOutlineUp } from "react-icons/ai";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [deal, setDeal] = React.useState({});
    const [extraOptions, setExtraOptions] = React.useState(true);
    const [showfilters,setShowfilters] = React.useState(false);
    const [showdiscounts,setShowdiscounts] = React.useState(false);
    React.useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:2345/products").then((res) => {
            setData(res.data.product)
            setIsLoading(false);
        });
    }, []);

    const handleDeal = (product) => {
        setDeal(product);
        console.log(deal);
    }
    return (
    <div>
        <div className="container">
            <div>
                <h3>Categories</h3>
                <div className="category">
                    <p>All</p>
                    <p>Babies & Kids</p>
                    <p>Clothing & Apparel</p>
                    <p>Computers & Accessories</p>
                    <p>Consumer Electronics</p>
                    <p>Gifts</p>
                    <p>Health & Beauty</p>
                    <p>Holidays & Occasions</p>
                    <p>Household</p>
                    <p>Media</p>
                    {extraOptions ? <p onClick={() =>setExtraOptions(false)} style={{textDecoration:"underline"}}>See all 14</p> : <div>
                        <p>Office</p>
                        <p>Sporting Goods</p>
                        <p>Travel</p>
                        <p>Women's</p>
                        <p onClick={() =>setExtraOptions(true)} style={{textDecoration:"underline"}}>See fewer</p>
                    </div>}
                </div>
                <hr />
                <h3 className="filter">Filter</h3>
                <div className="hideOptions" onClick={() =>setShowfilters(!showfilters)}>
                    <h4>Types</h4>
                    {showfilters ? <AiOutlineDown/>  : <AiOutlineUp />}
                </div>
                {showfilters && <div className="options">
                    <div>
                        <input type="checkbox" />
                        <p>Only Coupons</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>Exclusives</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>BOGO and more</p>
                    </div>
                </div>}
                <hr />
                <div className="hideOptions" onClick={() =>setShowdiscounts(!showdiscounts)}>
                    <h4>Discount</h4>
                    {showdiscounts ?  <AiOutlineDown/>  : <AiOutlineUp />}
                </div>
                { showdiscounts && <div className="options">
                    <div>
                        <input type="checkbox" />
                        <p>0-49% off</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>50-80% off</p>
                    </div>
                </div>}
            </div>
            <div>
                <div className="search">
                    <AiOutlineSearch  className="searchicon"/>
                    <input type="text" placeholder="search" />
                </div>
                <div className="prodContainer">
                    {isLoading ? <div>...Loading</div> :  data.map((e) => {
                        return (
                            <div key={e._id} onClick={()=>handleDeal(e)}>
                                <img src={e.Image} alt={e.Title} />
                                <h3>{e.Title}</h3>
                                <p>{e.Tag}</p>
                                <div className="offer">
                                    <p>{e.Offer.split(' ')[0]}</p>
                                    <div>
                                        <p>{e.Offer.split(' ')[1]}</p>
                                        <p>{e.Offer.split(' ')?.[2]}</p>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
            {deal.Title && <div className="popup">
                <div>
                    <div>
                        <img src={deal.Image} alt={deal.Title} />
                    </div>
                    <AiOutlineClose className="close" onClick={()=>setDeal(false)}/>
                    <div className="popoffer">
                        <p>{deal.Offer.split(' ')[0]}</p>
                        <div>
                            <p>{deal.Offer.split(' ')[1]}</p>
                            <p>{deal.Offer.split(' ')?.[2]}</p>
                        </div>
                    </div>
                </div>
                <div className="des">
                    <h2>{deal.Tag}</h2>
                    <p>{deal.Description}</p>
                    <h4 style={{display : deal.Code ? "block" : "none"}}>{deal?.Code}</h4>
                    <h5>Copy code and shop</h5>
                </div>
        </div>}    
    </div>
    )
}