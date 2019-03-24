import * as chai from "chai";
const expect = chai.expect;

import { Anime } from '../../src/classes/classes.exercices';

let codeGeass: Anime;

describe("Exercices classes", () => {

    beforeEach(() => {
        this.codeGeass = new Anime('Code Geass', 8.89);
    });

    it("Ex 1 : Instancier un objet de la classe Anime dont la première saison a le même nom que la série", () => {
        let result = {
            name: 'Code Geass',
            averageScore: 8.89,
            seasons: [
                { name: 'Code Geass', score: 8.89 }
            ]
        };

        expect(this.codeGeass).to.eql(result);
    })

    it("Ex 2 : Créer une méthode addSeason() permettant d'ajouter une saison à l'anime", () => {
        let result = new Anime('Code Geass', 8.89);
        result.seasons = [
            { name: 'Code Geass', score: 8.89 },
            { name: 'Lelouch of the Rebellion R2', score: 8.89 }
        ];

        expect(this.codeGeass.addSeason({ name: 'Lelouch of the Rebellion R2', score: 8.89 })).to.eql(result);
    });

    it("Ex 3 : Créer une méthode computeAverageScore() qui détermine la moyenne de l'anime à partir\
    de la note de toutes ses saisons", () => {
            this.codeGeass.seasons = [
                { name: 'Lelouch of the Rebellion', score: 8.89 },
                { name: 'Lelouch of the Rebellion R2', score: 8.83 }
            ];

            this.codeGeass.calculateAverageScore();

            expect(this.codeGeass.averageScore).to.eql(8.86);
        });

    it("Ex 4 : Modifier le code de addSeason() de sorte à ce que la moyenne de l'anime soit \
    recalculé quand une saison est ajoutée", () => {
            let result = new Anime('Code Geass', 8.86);
            result.seasons = [
                { name: 'Lelouch of the Rebellion', score: 8.89 },
                { name: 'Lelouch of the Rebellion R2', score: 8.83 }
            ];

            this.codeGeass.seasons = [
                { name: 'Lelouch of the Rebellion', score: 8.89 }
            ];

            expect(this.codeGeass.addSeason({ name: 'Lelouch of the Rebellion R2', score: 8.83 })).to.eql(result);
        });
})