import { Item } from './models/item';

export class TickitShop {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {

        this.items = items;
    }

    updateQuality(): Array<Item> {

        this.items.forEach(item => {

            item.updateQuality();
            item.updateSellIn();

        });

        return this.items;
    }

}
