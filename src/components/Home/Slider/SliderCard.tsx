import React, { useState, useEffect, useCallback } from 'react';
import { getById } from '../../../services';
import { CharacterType } from '../../../types/Character';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../Card/Card';

type Props = {
    houseTitle: string
}

const SliderCard: React.FC<Props> = (props) => {

    const [characterList, setCharacterList] = useState<CharacterType[]>([]);

    const getCharacters = useCallback(async () => {
        if (props.houseTitle) {
            let r = await getById("show/characters/byHouse", props.houseTitle);;
            if (r && r.data) {
                setCharacterList(r.data);
            }
        }
    }, [props.houseTitle])

    useEffect(() => {
        (async function () {
            if (props.houseTitle) {
                await getCharacters();
            }

        })();

    }, [props.houseTitle, getCharacters]);



    return (
        <>
            <div className="row">
                <div className="col-6"><h2 className="h2">
                    {props.houseTitle} </h2>
                </div>
                <div className="col-6 text-right">
                    <Link className="seeAll" to={`characters/${props.houseTitle}`}>See All <i className="fa fa-angle-right"></i></Link>
                </div>
            </div>

            <Slider {...{
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4

            }} className={`slider-wrapper ${characterList.length <= 8 && characterList.length > 4 && "slider-main"} ${characterList.length <= 4 && "slider-main2"}`}>
                {characterList && characterList.map((v) => {
                    return (
                        <>
                            <div key={v.id}>
                                <Card character={v} />
                            </div>
                        </>
                    )
                })}
            </Slider>

        </>
    );
};
export default SliderCard
