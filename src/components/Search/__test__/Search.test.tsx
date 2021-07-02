import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { CharacterType } from '../../../types/Character';

import Search from '../Search';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render Header information", () => {

    const onChangeSearchInput = jest.fn();
    const onSearch = jest.fn();

    act(() => {
        render(
            <Search onChangeSearchInput={onChangeSearchInput} onSearch={onSearch} />,
            container
        );
    });

    expect(
        container.querySelector('[data-testid="searchInput"]')
    ).toBeInTheDocument();
    expect(
        container.querySelector('[data-testid="searchInput"]')
    ).toHaveAttribute("type" , "text");

});

