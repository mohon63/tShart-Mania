import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseCount = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h3>House: {house}</h3>
            <h4>Aunty</h4>
            <button onClick={handleHouseCount}>HouseCount</button>
        </div>
    );
};

export default Aunty;