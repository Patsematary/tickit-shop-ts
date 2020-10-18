export abstract class Item {

    private readonly MIN_QUALITY: number = 0;
    private readonly MAX_QUALITY: number = 50;

    protected readonly SELLIN_DUE_DATE: number = 0;
    protected readonly QUALITY_LEGENDARY: number = 80;

    name: string = "";
    sellIn: number = 0;
    quality: number = 0;

    constructor(name: string, sellIn: number, quality: number) {
        this.setName(name);
        this.setSellIn(sellIn);
        this.setQuality(quality);
    }

    // Method that sets value to name
    protected setName(name: string) {
        if (name) {
            this.name = name;
        } else {
            throw "Invalid name";
        }
    }

    // Method that sets value to sellIn
    protected setSellIn(sellIn: number) {
        this.sellIn = sellIn;
    };

    // Method that sets value to quality
    // The Quality of an item is never negative
    // The Quality of an item is never more than 50
    setQuality(quality: number) {

        if (quality < this.MIN_QUALITY) {
            this.quality = this.MIN_QUALITY;

        } else if (quality > this.MAX_QUALITY) {
            this.quality = this.MAX_QUALITY;

        } else {
            this.quality = quality;
        }
    }

    // Method that updates quality value
    abstract updateQuality();

    // Method that decreases sell in value every time updateSellIn is called
    updateSellIn() {
        this.sellIn--;
    }


}