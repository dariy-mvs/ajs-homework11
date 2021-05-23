import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly country: string,
        readonly year: number,
        readonly tagline: string,
        readonly time: string,
        readonly ganre: Array<string>, 
        readonly percent?: number, 
    ) { }
}