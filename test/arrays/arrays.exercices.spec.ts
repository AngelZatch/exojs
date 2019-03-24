import * as chai from "chai";
const expect = chai.expect;

import arraysExercices from "../../src/arrays/arrays.exercices";

describe("Exercices sur les tableaux", () => {

    it("Ex 1 : Renvoie le premier élément d'un tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];

        expect(arraysExercices.sendFirstElement(fighters)).to.equal('Mario');
    });

    it("Ex 2 : Inverse le tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];
        let reversedArray = ['Samus', 'Captain Falcon', 'Rondoudou', 'Fox', 'Pikachu', 'Kirby', 'Luigi', 'Mario'];

        expect(arraysExercices.reverseArray(fighters)).to.eql(reversedArray);
    });

    it("Ex 3 : Renvoie un tableau d'éléments avec une longueur d'au moins 5 caractères", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];
        let matchingElements = ['Fox'];

        expect(arraysExercices.elementsOverLength(fighters, 5)).to.eql(matchingElements);
    });

    it("Ex 4 : Renvoie un tableau d'éléments contenant la lettre 'i'", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];
        let matchingElements = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Captain Falcon'];

        expect(arraysExercices.filterByLetter(fighters, 'i')).to.eql(matchingElements);

    });

    it("Ex 5 : Ajoute un élément, obligatoirement une chaîne de caractères au tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];
        let addedElement = 'Bowser';

        const result = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus', 'Bowser'];

        expect(arraysExercices.addToArray(fighters, addedElement)).to.eql(result);
    });

    it("Ex 6 : Inverse deux éléments d'un tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];

        const swappedArray: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Captain Falcon', 'Fox', 'Rondoudou', 'Pikachu', 'Samus'];
        expect(arraysExercices.swapElements(fighters, 3, 6)).to.eql(swappedArray);
    });

    it("Ex 7 : Ajoute un caractère à tous les éléments du tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];

        const result: Array<string> = ['MarioB', 'LuigiB', 'KirbyB', 'PikachuB', 'FoxB', 'RondoudouB', 'Captain FalconB', 'SamusB'];
        expect(arraysExercices.addCharToElements(fighters, 'B')).to.eql(result);
    });

    it("Ex 8 : Renvoie la concaténation de tous les éléments du tableau", () => {
        const fighters: Array<string> = ['Mario', 'Luigi', 'Kirby', 'Pikachu', 'Fox', 'Rondoudou', 'Captain Falcon', 'Samus'];

        const concatenatedString: string = 'MarioLuigiKirbyPikachuFoxRondoudouCaptain FalconSamus';

        expect(arraysExercices.concatenateAllElements(fighters)).to.equal(concatenatedString);

    });
})