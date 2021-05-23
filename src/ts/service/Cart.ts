import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
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
            return akk += el.price;
        }, 0)
        return totalPrice
    }

    sumDiscountPrice() {
        const totalDiscountPrice = this._items.reduce((akk, el) => {
            if (el.percent) {
                return akk += (el.price - (el.price / 100 * el.percent));
            } else {
                return akk += el.price;
            }
            
        }, 0)
        return totalDiscountPrice
    }
}