import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    total(): number {
        let sum = [...this._items].reduce(function (s, a) {
            return s + a.price;
        }, 0);
        return sum;
    }

    totalWithD(discount: number): number {
        let sum = [...this._items].reduce(function (s, a) {
            return s + a.price;
        }, 0);
        const persent = discount / 100;
        const total = sum - (sum * persent);
        return total;
    }

    remove(id: number): void {
        [...this._items].filter((item) => item.id !== id);
    }
}