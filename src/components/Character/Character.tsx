import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { useParams } from "react-router-dom";
import CharacterList from './CharacterList/CharacterList';
import { CharacterType } from '../../types/Character';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import { useHistory } from "react-router-dom";



import { getById } from '../../services';


const Character: React.FC = () => {
    let history = useHistory();
    const [characterList, setCharacterList] = useState<CharacterType[]>([])
    const [displayCharacterList, setDisplayCharacterList] = useState<CharacterType[]>([])
    const { house } = useParams<{ house: string }>();

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(12);


    const getCharacterList = useCallback(async () => {
        if (house) {
            let res = await getById("show/characters/byHouse", house);
            if (res && res.data) {
                setCharacterList(res.data);
            }
        }
    }, [house]);


    const onChangeSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            if (characterList.length > 0) {
                let filterCharacter = characterList.filter((v) => v.name.toLowerCase().includes(e.target.value) === true);
                setDisplayCharacterList(filterCharacter);
            }
        } else {
            setDisplayCharacterList(characterList);
        }
    }, [characterList])

    const onSearch = useCallback((value: string) => {
        if (characterList.length > 0) {
            let filterCharacter = characterList.filter((v) => v.name.toLowerCase().includes(value) === true);
            setDisplayCharacterList(filterCharacter);
        }

    }, [characterList]);

    const getPaginatedData = () => {
        if (!displayCharacterList.length)
            setDisplayCharacterList(characterList);

        const lastIndex = currentPage * dataPerPage;
        const startIndex = lastIndex - dataPerPage;
        return displayCharacterList.slice(startIndex, lastIndex);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const nextPage = () => {
        setCurrentPage((page) => page + 1)
    }

    const prevPage = () => {
        setCurrentPage((page) => page - 1)
    }


    useEffect(() => {
        (async function () {
            if (house) {
                await getCharacterList()
            }
        })();
    }, [house, getCharacterList]);


    return (
        <div className="main-page p-0">
            <div className="search-input">
                <div className="container">
                <button className="arrow-btn" onClick={() => history.goBack()}>
                    <i className="fa fa-chevron-left"></i> <span>Back</span>
                    </button>
                </div>
                <Search onChangeSearchInput={onChangeSearchInput} onSearch={onSearch} />
            </div>

            <div className="container">
                <div className="content">
                    <section className="see-all">
                        <div className="card-wrapper">
                            <CharacterList characterList={getPaginatedData} />
                        </div>
                        <Pagination
                            dataPerPage={dataPerPage}
                            dataLength={characterList.length}
                            paginate={paginate}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            currentPage={currentPage}
                        />
                    </section>
                </div>
            </div>
        </div>

    );
};
export default Character
