import React from 'react';
import { CharacterType } from '../../../types/Character';
import Card from '../../Card/Card';

type Props = {
    characterList: Function
}

const CharacterList: React.FC<Props> = (props) => {

    return (
        <>
            {props.characterList().map((v: CharacterType, i: number) => {
                return (
                    <Card character={v} key={i} />
                )
            })}
        </>

    );
};
export default CharacterList
