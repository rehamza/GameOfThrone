import React, { useState } from 'react';
type Props = {
    onChangeSearchInput: Function;
    onSearch: Function
}

const Search: React.FC<Props> = (props) => {
    const [searchValue, setSearchValue] = useState("");
    return (
            <div className="container">
                <form action="">
                    <div className="input-wrapper d-flex text-center align-items-center justify-content-center">
                        <div className="input">
                            <input data-testid="searchInput" type="text" onChange={(e) => {
                                setSearchValue(e.target.value)
                                props.onChangeSearchInput(e)
                            }} value={searchValue} className="form-control" />
                            <div className="input-icon" onClick={() => { props.onSearch(searchValue) }} style={{ cursor: "pointer" }}><i className="fa fa-search"></i></div>
                        </div>
                    </div>
                </form>
            </div>
    );
};
export default Search
