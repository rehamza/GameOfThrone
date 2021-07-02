
export type CharacterType = {
    id: string;
    actor?: string;
    age?: CharacterAge;
    alive?: boolean;
    allegiances?: Array<string>;
    appearances?: Array<string>;
    birth?: number;
    createdAt?: string;
    culture?: Array<string>;
    father: string;
    first_seen: string;
    gender: string;
    house: string;
    image: string;
    mother: string;
    name: string;
    origin: Array<string>;
    pagerank: CharacterRank;
    related: Array<CharacterRelated>;
    religion: Array<string>;
    siblings: Array<string>;
    slug: string;
    spouse: Array<string>;
    titles: Array<string>;
}

export type CharacterAge = {
    name: string;
     age: number;
}

export type CharacterRank = {
    title: string;
    rank: number;
}

export type CharacterRelated = {
    _id: string;
    name: string;
    mentions: number;
    slug: string;
}