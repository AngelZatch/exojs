import * as chai from "chai";
const expect = chai.expect;

import objectExercices from "../../src/objects/objects.exercices";

interface Mario {
    name: string,
    year: number,
    games: Array<Game>
};

interface Game {
    title: string,
    year: number,
    score: number,
    console?: string
};

interface Console {
    console: string,
    year: number
};

describe("Exercices objets", () => {

    let mario: Mario = {
        name: "Mario",
        year: 1981,
        games: [{
            title: "Donkey Kong",
            year: 1981,
            score: 84
        }]
    };

    const consoles: Array<Console> = [
        { console: "NES", year: 1983 },
        { console: "Super NES", year: 1990 },
        { console: "Nintendo 64", year: 1996 },
        { console: "GameCube", year: 2001 },
        { console: "Wii", year: 2006 },
        { console: "WiiU", year: 2012 },
    ]

    it("Ex 1 : Affiche la valeur d'une propriété de l'objet mario", () => {
        const displayedProperty: string = objectExercices.displayProperty(mario, "name");

        expect(displayedProperty).to.equal("Mario");
    });

    it("Ex 2 : Ajoute un objet à games", () => {
        let secondGame: Game = {
            title: "Super Mario Bros.",
            year: 1985,
            score: 82
        };

        const updatedMario = objectExercices.addGame(mario, secondGame);

        const testMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [{
                title: "Donkey Kong",
                year: 1981,
                score: 84
            }, {
                title: "Super Mario Bros.",
                year: 1985,
                score: 82
            }]
        };

        expect(updatedMario).to.be.eql(testMario);
    });

    it("Ex 4 : Ajouter la console à chaque jeu en fonction des dates de sortie ", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82 },
                { title: "Super Mario Bros. 3", year: 1988, score: 87 },
                { title: "Dr. Mario", year: 1989, score: 81 },
                { title: "Super Mario World", year: 1990, score: 88 },
                { title: "Super Mario 64", year: 1996, score: 97 },
                { title: "Super Mario Sunshine", year: 2002, score: 88 },
                { title: "Super Mario Galaxy", year: 2007, score: 98 },
                { title: "Mario Party", year: 1998, score: 87 },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72 }
            ]
        };

        const targetMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const updatedMario: Mario = objectExercices.matchConsoleToGame(sourceMario, consoles);

        expect(updatedMario).to.be.eql(targetMario);
    });

    it("Ex 5 : Renvoie tous les jeux pour une console donnée", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const gamesOfConsole: Array<Game> = [
            { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
            { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
            { title: "Dr. Mario", year: 1989, score: 81, console: "NES" }
        ];

        expect(objectExercices.getGamesOfConsole(sourceMario, 'NES')).to.eql(gamesOfConsole);
    });

    it("Ex 6 : Renvoie tous les jeux sortis à une certaine année", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const gamesOfYear: Array<Game> = [
            { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" }
        ];

        expect(objectExercices.getGamesOfYear(sourceMario, 2007)).to.eql(gamesOfYear);
    });

    it("Ex 7 : Renvoie tous les jeux sortis après une certaine année", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const gamesAfterYear: Array<Game> = [
            { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
            { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
        ];

        expect(objectExercices.getGamesAfterYear(sourceMario, 2007)).to.eql(gamesAfterYear);
    });

    it("Ex 8 : Renvoie tous les jeux sortis à ou après une certaine année", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const gamesOfYear: Array<Game> = [
            { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" }
        ];

        const gamesAfterYear: Array<Game> = [
            { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
            { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
        ];

        const gamesBeforeYear: Array<Game> = [
            { title: "Donkey Kong", year: 1981, score: 84 },
            { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
            { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
            { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
            { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
            { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
            { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
            { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
            { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" }
        ];

        expect(objectExercices.getGamesByYear(sourceMario, 2007, 'at')).to.eql(gamesOfYear);
        expect(objectExercices.getGamesByYear(sourceMario, 2007, 'after')).to.eql(gamesAfterYear);
        expect(objectExercices.getGamesByYear(sourceMario, 2007, 'before')).to.eql(gamesBeforeYear);
    });

    it("Ex 9 : Trie les jeux par année, ascendant ou descendant", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const targetMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        expect(objectExercices.sortGamesByYear(sourceMario, 'asc')).to.eql(targetMario);
    });

    it("Ex 10 : Trie les jeux par ordre alphabétique, ascendant ou descendant", () => {
        const sourceMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" }
            ]
        };

        const targetMario: Mario = {
            name: "Mario",
            year: 1981,
            games: [
                { title: "Donkey Kong", year: 1981, score: 84 },
                { title: "Dr. Mario", year: 1989, score: 81, console: "NES" },
                { title: "Mario Party", year: 1998, score: 87, console: "Nintendo 64" },
                { title: "Paper Mario: Color Splash", year: 2016, score: 72, console: "WiiU" },
                { title: "Super Mario 64", year: 1996, score: 97, console: "Nintendo 64" },
                { title: "Super Mario Bros.", year: 1985, score: 82, console: "NES" },
                { title: "Super Mario Bros. 3", year: 1988, score: 87, console: "NES" },
                { title: "Super Mario Galaxy", year: 2007, score: 98, console: "Wii" },
                { title: "Super Mario Sunshine", year: 2002, score: 88, console: "GameCube" },
                { title: "Super Mario World", year: 1990, score: 88, console: "Super NES" }
            ]
        };

        expect(objectExercices.sortGamesByAlphabeticalOrder(sourceMario, 'asc')).to.eql(targetMario);
    });
});