import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const diamond = useContext(RingContext);
    return (
        <div>
            <h3>House: {house}</h3>
            <h4>Aunty</h4>
            <h5>Gift: {diamond}</h5>
        </div>
    );
};

export default Aunty;