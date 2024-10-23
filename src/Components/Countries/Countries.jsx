import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    
    const [countries,setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedflags,setFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountries = country =>{
        const newvisitedCountry = [...visitedCountries,country];
        setVisitedCountries(newvisitedCountry);
    }
    const handleflags = (flag) =>{
        const newvisitedflags = [...visitedflags,flag];
        setFlags(newvisitedflags)
        
    }

    return (
        <div>
             {/* visited countries */}
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Country : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* flag */}
            <div className="flag-container">
                {
                    visitedflags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* display countries */}
           <div className="country-container">
           {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleflags={handleflags}
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;