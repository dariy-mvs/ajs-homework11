import Buyable from './Buyable';

export default class Phones implements Buyable {
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

        count: number;
        readonly increasing: boolean;
        readonly id: number;
        readonly name: string;
        readonly model: string;
        readonly price: number;
        readonly country: string;
        readonly percent?: number;
        readonly year: number;
        constructor(id: number, name: string, price: number, country: string, year: number, model: string, percent?: number ) { 
        this.count = 1,
        this.increasing = true,
        this.id = id,
        this.name = name,
        this.model = model,
        this.price = price,
        this.country = country,
        this.percent = percent,
        this.year = year
    }
}