import Buyable from './Buyable';

export default class Movie implements Buyable {
    // constructor(
    //     readonly id: number,
    //     readonly name: string,
    //     readonly price: number,
    //     readonly country: string,
    //     readonly year: number,
    //     readonly tagline: string,
    //     readonly time: string,
    //     readonly ganre: Array<string>, 
    //     readonly percent?: number, 
    // ) { }

        readonly count: number;
        readonly increasing: boolean;
        readonly id: number;
        readonly name: string;
        readonly tagline: string;
        readonly price: number;
        readonly country: string;
        readonly percent?: number;
        readonly time: string;
        readonly ganre: Array<string>;
        readonly year: number;
        constructor(id: number, name: string, price: number, country: string, year: number, tagline: string, time: string, ganre: Array<string>, percent?: number ) { 
        this.count = 1,
        this.increasing = false,
        this.id = id,
        this.name = name,
        this.tagline = tagline,
        this.price = price,
        this.country = country,
        this.percent = percent,
        this.time = time,
        this.ganre = ganre,
        this.year = year
    }
}