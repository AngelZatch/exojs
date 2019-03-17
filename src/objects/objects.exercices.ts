class ObjectsExercices {

    private mario: Mario = {
        name: "Mario",
        year: 1981,
        games: [
            {
                title: "Donkey Kong",
                year: 1981,
                score: 84
            }
        ]
    };

    constructor() {

    }

    displayProperty(object: Mario, property: string): string {
        return object[property];
    }

    addGame(character: Mario, game: Game): Mario {
        character.games.push(game);

        return character;
    }

    matchConsoleToGame(character: Mario, consoles: Array<Console>): Mario {
        character.games.forEach((game: Game) => {
            let matchedConsoles: Array<Console> = consoles.filter((consoleItem: Console) => {
                return consoleItem.year <= game.year;
            });

            if (matchedConsoles.length > 0) {
                const lastElementIndex = matchedConsoles.length - 1;
                game.console = matchedConsoles[lastElementIndex].console;
            }
        });
        return character;
    }

    getGamesOfConsole(character: Mario, consoleName: string): Array<Game> {
        return character.games.filter((game: Game) => {
            return game.console === consoleName;
        });
    }

    getGamesOfYear(character: Mario, year: number): Array<Game> {
        return character.games.filter((game: Game) => {
            return game.year === year;
        });
    }

    getGamesAfterYear(character: Mario, year: number): Array<Game> {
        return character.games.filter((game: Game) => {
            return game.year >= year;
        });
    }

    getGamesByYear(character: Mario, year: number, indicator: string): Array<Game> {
        // indicator can be "at", "before", "after"
        let matchingGames = [];
        switch (indicator) {
            case 'after':
                matchingGames = character.games.filter((game: Game) => {
                    return game.year >= year;
                });
                break;

            case 'before':
                matchingGames = character.games.filter((game: Game) => {
                    return game.year <= year;
                });
                break;

            default:
                matchingGames = character.games.filter((game: Game) => {
                    return game.year === year;
                });
                break;
        }
        return matchingGames;
    }

    sortGamesByYear(character: Mario, order: string): Mario {
        character.games.sort((a, b) => {
            return (a.year > b.year) ? 1 : -1;
        });

        if(order === 'desc'){
            character.games.reverse();
        }

        return character;
    }

    sortGamesByAlphabeticalOrder(character: Mario, order: string): Mario {
        character.games.sort((a: Game, b: Game) => {
            return (a.title > b.title) ? 1 : -1;
        });

        if(order === 'desc'){
            character.games.reverse();
        }

        return character;
    }

}

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

const objectsExercices = new ObjectsExercices();
export default objectsExercices;