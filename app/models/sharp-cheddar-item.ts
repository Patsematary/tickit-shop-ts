import { Item } from './item';

export class SharpCheddarItem extends Item {

    private readonly QUALITY_INCREASES_TWO: number = 2;
    private readonly QUALITY_INCREASES_ONE: number = 1;

    // "Sharp Cheddar" actually increases in Quality the older it gets
    updateQuality() {

        if (this.sellIn <= this.SELLIN_DUE_DATE) {
            this.setQuality(this.quality + this.QUALITY_INCREASES_TWO);

        } else {
            this.setQuality(this.quality + this.QUALITY_INCREASES_ONE);
        }

    }

}