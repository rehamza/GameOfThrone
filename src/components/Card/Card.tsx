import React from 'react';
import { CharacterType } from '../../types/Character';

type Props = {
    character: CharacterType;
}

const Card: React.FC<Props> = ({ character }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${character.image})` }}>
            <a data-testid="slug" href={`/character/${character.slug}`} className="card-body">
                <div className="course-title">
                    <h5 data-testid="origin" className="pr-2">{character.origin[0]}</h5>
                </div>
                <div className="user-data">
                    <span data-testid="name">{character?.name}</span>
                    <span data-testid="age"><i className="fa fa-clock"></i> {character?.age?.age ? `${character.age.age} years` : ""} </span>
                </div>
            </a>
        </div>
    );
};

export default Card
