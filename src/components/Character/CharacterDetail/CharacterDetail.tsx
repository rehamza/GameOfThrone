import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { CharacterType } from '../../../types/Character';
import { getById } from '../../../services';
import { useHistory } from "react-router-dom";




const CharacterDetail: React.FC = () => {
    let history = useHistory();
    const { slug } = useParams<{ slug: string }>();
    const [character, setCharacter] = useState<CharacterType>();

    const getCharacter = useCallback(async () => {
        if (slug) {
            console.log(slug)
            let r = await getById("show/characters/bySlug", slug);
            if (r && r.data) {
                setCharacter(r.data);
            }
        }
    }, [slug]);

    useEffect(() => {
        (async function () {
            if (slug) {
                await getCharacter();
            }
        })();

    }, [slug, getCharacter]);


    return (
        <div className="main-page seeAll-page">
             <div className="container">
                    <button className="arrow-btn" onClick={() => history.goBack()}>
                    <i className="fa fa-chevron-left"></i> <span>Back</span>
                    </button>
                </div>
            <div className="container">
                <div className="content charaterDetail">
                    <div className="card-details" style={{ backgroundImage: `url(${character?.image})`, backgroundPosition: "top left", backgroundSize: "40%" }}>
                        <div className="card-inner">
                            <div className="row">
                                <div className="col-7 offset-5">
                                    <h2 data-testid="name" className="h2">
                                        {character?.name}
                                    </h2>
                                    <p>
                                        {character?.religion[0]}
                                    </p>
                                    <div className="genres">
                                        <h3>Titles:</h3>
                                        <ul>
                                            <li>{character?.titles[0]}</li>
                                            <li>{character?.titles[1]}</li>
                                            <li>{character?.titles[2]}</li>
                                        </ul>
                                    </div>
                                    <h5 data-testid="actor"><b>Actor:</b>{character?.actor}</h5>
                                    <h5 data-testid="gender"><b>Gender:</b>{character?.gender}</h5>
                                    <h5 data-testid="house"><b>House:</b>{character?.house}</h5>
                                    <h5 data-testid="father"><b>Father:</b> {character?.father}</h5>
                                    <h5 data-testid="mother"><b>Mother:</b> {character?.mother}</h5>
                                    <h5 data-testid="spouse"><b>Spouse:</b> {character?.spouse && character.spouse[0]}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CharacterDetail
