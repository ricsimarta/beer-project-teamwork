import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import MultiRangeSliderPercent from "./multiRangeSlider/MultiRangeSliderPercent";
import Beers from "./Beers";
import { useState } from "react";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';


function MenuElement({ beersData }) {
    const [beersToRender, setBeersToRender] = useState(<Beers beersArray={beersData} />);
    let newBeersArray = beersData;

    const [priceMin, setPriceMin] = useState(700);
    const [priceMax, setPriceMax] = useState(1400);
    const [abvMin, setAbvMin] = useState(2);
    const [abvMax, setAbvMax] = useState(15);
    const [beerType, setBeerType] = useState("");

    return (
        <div className="menuElement" id="menu">
            <div className="filters">
                <p className="filter">Price, HUF</p>
                <MultiRangeSlider min={900} max={1400} onChange={({ min, max }) => {
                        setPriceMin(min);
                        setPriceMax(max);
                    }}
                />

                <p className="filter">ABV, %</p>
                <MultiRangeSliderPercent min={4} max={11} onChange={({ min, max }) => {
                        setAbvMin(min);
                        setAbvMax(max);
                    }}
                />

                <p className="filter">Beer type:</p>
                <DatalistInput placeholder="Beer type" value={beerType}
                    onSelect={item => {
                        setBeerType(item.value);
                    }}
                    items = {[
                        {id: "IPA", value: "IPA"},
                        {id: "APA", value: "APA"},
                        {id: "Wit", value: "Wit"},
                        {id: "Stout", value: "Stout"}
                    ]}
                />

                <button className="applyFilters" onClick={() => {
                    newBeersArray = beersData.filter(beer => (beer.price >= priceMin && beer.price <= priceMax && parseFloat(beer.abv) >= abvMin && parseFloat(beer.abv) <= abvMax && String(beer.description).includes(beerType)))

                    console.log(beerType);
                    setBeersToRender(<Beers beersArray={newBeersArray} />)
                }}>Apply Filters</button>

                <button className="resetFilters" onClick={() => {
                    console.log(priceMin, priceMax);
                    setBeersToRender(<Beers beersArray={beersData} />)

                    window.location.reload(); /* <---- ne bánts pls */
                }}>Reset Filters</button>
            </div>

            {beersToRender}
        </div>
    )
}

export default MenuElement;