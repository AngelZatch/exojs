export class Anime {
    public name: string;
    public averageScore: number;
    public seasons: Array<{ name: string, score: number }>;

    constructor(name: string, averageScore: number) {
        this.name = name;
        this.averageScore = averageScore;
        this.seasons = [{ name: name, score: averageScore }];
    }

    public addSeason(season: { name: string, score: number }) {
        this.seasons.push(season);
        this.calculateAverageScore();
        return this;
    }

    public calculateAverageScore() {
        let average = 0;

        this.seasons.forEach((season) => {
            average += season.score;
        });

        average /= this.seasons.length;

        this.averageScore = average

        return this;
    }
}