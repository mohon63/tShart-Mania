import React from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt
                        tShirt={tShirt}
                        key={tShirt._id}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;