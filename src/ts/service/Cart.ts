import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        let arrayItems = this._items;
        const findIndItem = arrayItems.findIndex(el => {
            return el.id === item.id
        });
        if (findIndItem !== -1) {
            let thisItem = arrayItems[findIndItem];
            if(thisItem.increasing) {
                thisItem.count += 1;
            } else return
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    del(id: number) {
        let index = this._items.findIndex(el => {
            el.id === id
        });
        this._items.splice(index, 1);
    }

    sumPrice() {
        const totalPrice = this._items.reduce((akk, el) => {
            return akk += el.price * el.count;
        }, 0)
        return totalPrice
    }

    sumDiscountPrice() {
        const totalDiscountPrice = this._items.reduce((akk, el) => {
            if (el.percent) {
                return akk += (el.price - (el.price / 100 * el.percent)) * el.count;
            } else {
                return akk += el.price * el.count;
            }
            
        }, 0)
        return totalDiscountPrice
    }

    decrementCount(id: number) {
        let arrayItems = this._items;
        const findIndItem = arrayItems.findIndex(el => {
            return el.id === id
        });
        if (findIndItem !== -1) {
            arrayItems[findIndItem].count -= 1;
        }
    }
}