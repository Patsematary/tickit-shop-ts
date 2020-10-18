import { Item } from './item';

export class NormalItem extends Item {

    private readonly QUALITY_DEGRADES_TWO: number = 2;
    private readonly QUALITY_DEGRADES_ONE: number = 1;

    // Once the sell by date has passed, Quality degrades twice as fast
    updateQuality() {

        if (this.sellIn <= this.SELLIN_DUE_DATE) {
            this.setQuality(this.quality - this.QUALITY_DEGRADES_TWO);

        } else {
            this.setQuality(this.quality - this.QUALITY_DEGRADES_ONE);
        }
    }

}