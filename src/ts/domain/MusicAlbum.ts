import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    // constructor(
    //     readonly count = 1,
    //     readonly increasing = false,
    //     readonly id: number,
    //     readonly name: string,
    //     readonly author: string,
    //     readonly price: number,
    //     readonly percent?: number,
    // ) { } Как передать значения по умолчанию в конструктор класса?

        readonly count: number;
        readonly increasing: boolean;
        readonly id: number;
        readonly name: string;
        readonly author: string;
        readonly price: number;
        readonly percent?: number;
        constructor(id: number, name: string, author: string, price: number, percent?: number ) { 
        this.count = 1,
        this.increasing = false,
        this.id = id,
        this.name = name,
        this.author = author,
        this.price = price,
        this.percent = percent
    }
}