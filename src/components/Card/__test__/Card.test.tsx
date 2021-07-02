import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { CharacterType } from '../../../types/Character';

import Card from '../Card';

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

it("should render Card information", () => {
    const character: CharacterType = {
        actor: "Maisie Williams",
        age: { name: "Arya Stark", age: 22 },
        alive: true,
        allegiances: ["House Stark", "Faceless Men"],
        appearances: ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
        birth: 287,
        createdAt: "2019-04-24T14:41:00.775Z",
        culture: ["NorthmenAndal"],
        father: "Eddard Stark",
        first_seen: "Winter Is Coming\"",
        gender: "female",
        house: "House Stark",
        id: "5cc0757c04e71a0010b86b76",
        image: "https://vignette.wikia.nocookie.net/gameofthrones/images/b/b1/Arya_Season_8.jpg/revision/latest/scale-to-width-down/350?cb=20190206213617",
        mother: "Catelyn Stark",
        name: "Arya Stark",
        origin: ["Winterfell"],
        pagerank: { title: "Arya_Stark", rank: 1022 },
        related: [{ _id: "5cc0757c04e71a0010b86baf", name: "Eddard Stark", slug: "Eddard_Stark", mentions: 58 }],
        religion: ["Many-Faced GodOld Gods of the Forest (formerly)Faith of the Seven (formerly)"],
        siblings: ["Robb Stark", "Sansa Stark", "Bran Stark", "Rickon Stark", "Jon Snow"],
        slug: "Arya_Stark",
        spouse: [],
        titles: ["Prince"],
    };
    act(() => {
        render(
            <Card
                character={character}
            />,
            container
        );
    });
    expect(
        container.querySelector("[data-testid='slug']").getAttribute("href")
    ).toEqual("/character/Arya_Stark");

    expect(
        container.querySelector('[data-testid="origin"]').textContent
    ).toBe(character.origin[0]);

    expect(
        container.querySelector('[data-testid="name"]').textContent
    ).toBe(character.name);

    expect(
        container.querySelector('[data-testid="age"]').textContent
    ).toBe(" 22 years ");

});

