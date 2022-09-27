import React from 'react';
import Father from '../Father/Father';
import Uncle from './../Uncle/Uncle';
import Aunty from './../Aunty/Aunty';
import './Grandpa.css';
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext = createContext('ring ')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h2>Grandpa</h2>

                <p>House: {house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex', justifyContent: 'center' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
        // </RingContext.Provider>
    );
};

export default Grandpa;