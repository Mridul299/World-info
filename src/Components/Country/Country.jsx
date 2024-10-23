import { useState } from 'react';
import './Country.css';

const Country = ({country ,handleVisitedCountries,handleflags}) => {
    const {name,flags,area,capital,population,cca3}= country;

    const [visited,setVisited]=useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color:visited && 'purple'}}> {name?.common}</h3>
            <img src={flags.png} className='png'/>
            <p><small>cca3:{cca3}</small></p>
            <p>Area : {area}</p>
            <p> Capital : {capital}</p>
            <p>Population : {population}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited?'visited':'Going'}</button>
            <br />
            <button onClick={()=>handleflags(country.flags.png)}>Flag</button>
        </div>
    );
};

export default Country;