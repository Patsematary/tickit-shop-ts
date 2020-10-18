import { Item } from './item';

export class LegendaryItem extends Item {

    // Overrights setQuality method from abstract class item
    // The Quality is "80" and never alters 
    // Only item that overrights setQuality method from abstract class item
    setQuality() {
        this.quality = this.QUALITY_LEGENDARY;
    }

    updateQuality() {
        // Being a legendary item, never has to be sold or decreases in Quality
    }

    // Only item that overrights updateSellIn method from abstract class item
    updateSellIn() {
        // Being a legendary item, never has to be sold or decreases in Quality
    }

}