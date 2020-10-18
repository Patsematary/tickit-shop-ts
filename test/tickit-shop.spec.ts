import { expect } from 'chai';
import { Item } from '../app/models/item';
import { NormalItem } from '../app/models/normal-item';
import { SharpCheddarItem } from '../app/models/sharp-cheddar-item';
import { ConcertItem } from '../app/models/concert-item';
import { LegendaryItem } from '../app/models/legendary-item';
import { ConjuredItem } from '../app/models/conjured-item';
import { TickitShop } from '../app/tickit-shop';

// Method that calls update quality any number of times based on the parameter passed 
function callShop(shop: TickitShop, calls: number) {
    for (let i = 0; i < calls; i++) {
        shop.updateQuality();
    }
}

describe('TickitShop', () => {

    // Initialize item Tests
    // ************************
    it('Initialize item with an empty name', () => {

        expect(() => new NormalItem('', 20, 30)).to.throw();
    });

    it('Initialize item with negative quality', () => {

        let cellPhone = new NormalItem('cellphone', 20, -30);

        expect(0).to.equal(cellPhone.quality);
    });

    it('Initialize item with quality above 50', () => {

        let cellPhone = new NormalItem('cellphone', 20, 90);

        expect(50).to.equal(cellPhone.quality);
    });

    // Normal Item Tests
    // ************************
    it('Normal item degrades before due date', () => {

        let cellPhone = new NormalItem('cellphone', 20, 30);
        let fancyPants = new NormalItem('fancy pants', 15, 25);

        let items = [] as Array<Item>;

        items.push(cellPhone);
        items.push(fancyPants);

        let shop = new TickitShop(items);

        callShop(shop, 5);

        expect(25).to.equal(items[0].quality);
        expect(20).to.equal(items[1].quality);
    });

    it('Normal item degrades after due date', () => {
        let cellPhone = new NormalItem('cellphone', 0, 30);
        let fancyPants = new NormalItem('fancy pants', 0, 20);

        let items = [] as Array<Item>;

        items.push(cellPhone);
        items.push(fancyPants);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(10).to.equal(items[0].quality);
        expect(0).to.equal(items[1].quality);
    });

    it('Item quality is never negative', () => {
        let cellPhone = new NormalItem('cellphone', 5, 5);

        let items = [] as Array<Item>;

        items.push(cellPhone);

        let shop = new TickitShop(items);

        callShop(shop, 30);

        expect(0).to.equal(items[0].quality);
    });

    it('Negative test for item quality is never negative', () => {
        let cellPhone = new NormalItem('cellphone', 10, 5);

        let items = [] as Array<Item>;

        items.push(cellPhone);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(-5).to.not.equal(items[0].quality);
    });

    // Sharp Cheddar Item Tests
    // ************************
    it('Sharp cheddar item increases before due date', () => {

        let sharpCheddar = new SharpCheddarItem('Sharp Cheddar', 10, 10);
        let wine = new SharpCheddarItem('Wine', 10, 15);

        let items = [] as Array<Item>;

        items.push(sharpCheddar);
        items.push(wine);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(20).to.equal(items[0].quality);
        expect(25).to.equal(items[1].quality);
    });

    it('Sharp cheddar item increases after due date', () => {

        let sharpCheddar = new SharpCheddarItem('Sharp Cheddar', 0, 10);
        let wine = new SharpCheddarItem('Wine', 0, 15);

        let items = [] as Array<Item>;

        items.push(sharpCheddar);
        items.push(wine);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(30).to.equal(items[0].quality);
        expect(35).to.equal(items[1].quality);
    });

    it('Sharp cheddar item max quality value never above 50', () => {

        let sharpCheddar = new SharpCheddarItem('Sharp Cheddar', 0, 45);

        let items = [] as Array<Item>;

        items.push(sharpCheddar);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(50).to.equal(items[0].quality);
    });

    it('Sharp cheddar item negative test for max quality value never above 50', () => {

        let sharpCheddar = new SharpCheddarItem('Sharp Cheddar', 0, 45);

        let items = [] as Array<Item>;

        items.push(sharpCheddar);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(65).to.not.equal(items[0].quality);
    });

    // Concert Item Tests
    // ************************
    it('Concert item increases by 1 over 10 days before concert', () => {

        let concertItem = new ConcertItem('Lady Gaga tickets', 20, 10);

        let items = [] as Array<Item>;

        items.push(concertItem);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(20).to.equal(items[0].quality);
    });

    it('Concert item increases by 2 when there are 10 days or less before concert', () => {

        let concertItem = new ConcertItem('Lady Gaga tickets', 10, 10);

        let items = [] as Array<Item>;

        items.push(concertItem);

        let shop = new TickitShop(items);

        callShop(shop, 5);

        expect(20).to.equal(items[0].quality);
    });

    it('Concert item increases by 2 when there are 5 days or less before concert', () => {

        let concertItem = new ConcertItem('Lady Gaga tickets', 5, 10);

        let items = [] as Array<Item>;

        items.push(concertItem);

        let shop = new TickitShop(items);

        callShop(shop, 5);

        expect(25).to.equal(items[0].quality);
    });

    it('Concert item drops to 0 after the concert', () => {

        let concertItem = new ConcertItem('Lady Gaga tickets', -1, 10);

        let items = [] as Array<Item>;

        items.push(concertItem);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(0).to.equal(items[0].quality);
    });

    // Legendary Item
    // ************************
    it('Legendary item never has to be sold and Quality is aways 80', () => {

        let legendaryItem = new LegendaryItem('Ping-pong Paddle', 10, 10);

        let items = [] as Array<Item>;

        items.push(legendaryItem);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(80).to.equal(items[0].quality);
    });

    // Conjured Item
    // ************************
    it('Conjured item degrades by 2 before due date', () => {

        let conjuredItem = new ConjuredItem('Harry Potter wand', 10, 20);

        let items = [] as Array<Item>;

        items.push(conjuredItem);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(0).to.equal(items[0].quality);
    });

    it('Conjured item degrades by 4 after due date', () => {

        let conjuredItem = new ConjuredItem('Harry Potter wand', 0, 40);

        let items = [] as Array<Item>;

        items.push(conjuredItem);

        let shop = new TickitShop(items);

        callShop(shop, 10);

        expect(0).to.equal(items[0].quality);
    });

});
