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
    const [showdiscounts, setShowdiscounts] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [results, setResults] = React.useState([]);
    const [filter, setFilter] = React.useState([]);
    const [preferred, setPreferred] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:2345/products").then((res) => {
            setData(res.data.product)
            setIsLoading(false);
        });
    }, []);

    React.useEffect(() => {
        if (filter.length && results.length) {
            let a = results.filter((e)=>e.Coupon);            
            console.log(a);
            setPreferred(a);
        }
        else {
            results.length ? setPreferred(results) : filter.length ? setPreferred(filter) : setPreferred(data);            
        }
    }, [results, filter, data]);
    
    React.useEffect(() => {
        if (search.length > 0) {
            let a = data.filter((e) => {
                return e.Title.toLowerCase().includes(search)
            });
            navigate(`/query=${search}`);
            setResults(a);            
        } else {
            setResults([]);
            navigate(`/`);
        }
    },[data,search])

    const handleDeal = (product) => {
        navigate(`/deal=${product._id}`);
        setDeal(product);
    }
    const handleChange = (e) => {
        
        if (e.target.checked) {
            let a = data.filter((e) => {
                return e.Coupon;
            });
            navigate("/?coupon=true");
            setFilter(a)
        } else {
            navigate("/");
            setFilter([]);            
        }
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
                        <input type="checkbox" onChange={handleChange} />
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
                        <input type="text" placeholder="Search in lowercase" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <div className="prodContainer">
                    {isLoading ? <div>...Loading</div> :  preferred.map((e) => {
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