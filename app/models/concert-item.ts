import { Item } from './item';

export class ConcertItem extends Item {

    private readonly SELLIN_FIVE_TO_DUE_DATE: number = 5;
    private readonly SELLIN_TEN_TO_DUE_DATE: number = 10;

    private readonly QUALITY_DROPS_TO_ZERO: number = 0;
    private readonly QUALITY_INCREASES_THREE: number = 3;
    private readonly QUALITY_INCREASES_TWO: number = 2;
    private readonly QUALITY_INCREASES_ONE: number = 1;

    // Increases in Quality as it's sellIn value approaches
    // Quality increases by 2 when there are 10 days or less
    // Quality increases by 3 when there are 5 days or less
    // Quality drops to 0 after the concert
    updateQuality() {

        if (this.sellIn <= this.SELLIN_DUE_DATE) {
            this.setQuality(this.QUALITY_DROPS_TO_ZERO);

        } else if (this.sellIn <= this.SELLIN_FIVE_TO_DUE_DATE) {
            this.setQuality(this.quality + this.QUALITY_INCREASES_THREE);

        } else if (this.sellIn <= this.SELLIN_TEN_TO_DUE_DATE) {
            this.setQuality(this.quality + this.QUALITY_INCREASES_TWO);

        } else {
            this.setQuality(this.quality + this.QUALITY_INCREASES_ONE);
        }

    }

}