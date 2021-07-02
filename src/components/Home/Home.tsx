import React from 'react';
import SliderCard from './Slider/SliderCard';
import { houseData } from '../../utills/HouseData';

const Home: React.FC = () => {


    return (
        <div className="main-page">
            <div className="container">
                <div data-testid="home" className="content" id="HomePage">
                    {houseData.length && houseData.map((v, i) => {
                        return (
                            <section className="see-popular" key={i}>
                                <SliderCard houseTitle={v.name} />
                            </section>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default Home
