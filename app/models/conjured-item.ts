import { Item } from './item';

export class ConjuredItem extends Item {

    private readonly QUALITY_DEGRADES_FOUR: number = 4;
    private readonly QUALITY_DEGRADES_TWO: number = 2;

    // "Conjured" items degrade in Quality twice as fast as normal items
    updateQuality() {

        if (this.sellIn <= this.SELLIN_DUE_DATE) {
            this.setQuality(this.quality - this.QUALITY_DEGRADES_FOUR);
        } else {
            this.setQuality(this.quality - this.QUALITY_DEGRADES_TWO);
        }

    }

}