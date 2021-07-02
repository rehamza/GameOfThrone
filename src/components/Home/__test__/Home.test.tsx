
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Home from "../Home";
import slider from '../Slider/SliderCard';

jest.mock("../Slider/SliderCard", () => {
    return function DummyMap(props: { houseTitle: string }) {
        return (
            <div data-testid="slider">
                {props.houseTitle}
            </div>
        );
    };
});


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

it("should render Home information", () => {
    const center = { lat: 0, long: 0 };
    act(() => {
        render(
            <Home />,
            container
        );
    });

    expect(container.querySelector('[data-testid="home"]').textContent).toEqual("House StarkHouse TargaryenHouse ArrynHouse GreyjoyHouse Martell");
});