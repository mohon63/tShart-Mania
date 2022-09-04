import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <h4>Gift: {house}</h4>
            <button onClick={() => setHouse(house + 1)}>Gift House</button>
        </div>
    );
};

export default Special;