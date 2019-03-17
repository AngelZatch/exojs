class ArraysExercices {

    constructor() { }

    sendFirstElement(fighters: Array<string>): string {
        return fighters[0];
    }

    reverseArray(fighters: Array<string>): Array<string> {
        return fighters.reverse();
    }

    elementsOverLength(fighters: Array<string>, length: number): Array<string> {
        return fighters.filter((element) => {
            return element.length < 5;
        });
    }

    filterByLetter(fighters: Array<string>, letter: string): Array<string> {
        return fighters.filter((fighter) => {
            return fighter.includes(letter);
        });
    }

    addToArray(fighters: Array<string>, element: string): Array<string> {
        fighters.push(element);
        return fighters;
    }

    swapElements(fighters: Array<string>, pos1: number, pos2: number): Array<string> {
        const storedVariable = fighters[pos1];
        fighters[pos1] = fighters[pos2];
        fighters[pos2] = storedVariable;
        return fighters;
    }

    addCharToElements(fighters: Array<string>, letter: string): Array<string> {
        return fighters.map((fighter) => {
            return fighter + letter;
        });
    }

    concatenateAllElements(fighters: Array<string>): string {
        return fighters.join('');
    }

}

const arraysExercices = new ArraysExercices();
export default arraysExercices;