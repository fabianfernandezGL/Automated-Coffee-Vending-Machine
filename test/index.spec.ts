import { createPricer } from "../src/index.ts";

describe('createPricer function', () => {
    it('provides the latest price given the options selected so far', () => {
        // starting a coffee order
        const pricer = createPricer();

        // set the default options
        pricer('size', 'small');
        const defaultPrice = pricer('creamer', 'none');
        expect(defaultPrice).toBe(1.00);

        // user selects dairy creamer
        const priceAfterFirstSelection = pricer('creamer', 'dairy');
        expect(priceAfterFirstSelection).toBe(1.25);

        // user selects non-dairy creamer
        const priceAfterSecondSelection = pricer('creamer', 'non-dairy');
        expect(priceAfterSecondSelection).toBe(1.50);

        // user selects large
        const priceAfterThirdSelection = pricer('size', 'large');
        expect(priceAfterThirdSelection).toBe(2.50);
    });

    it('returns the correct price for a given category and option', () => {
        let pricer = createPricer();
        expect(pricer('size', 'small')).toBe(1.00);

        // reset pricer
        pricer = createPricer();
        expect(pricer('size', 'medium')).toBe(1.50);

        // reset pricer
        pricer = createPricer();
        expect(pricer('size', 'large')).toBe(2.00);

        // reset pricer
        pricer = createPricer();
        expect(pricer('creamer', 'none')).toBe(0);

        // reset pricer
        pricer = createPricer();
        expect(pricer('creamer', 'dairy')).toBe(0.25);

        // reset pricer
        pricer = createPricer();
        expect(pricer('creamer', 'non-dairy')).toBe(0.50);
    });

    it('can calculate the total price of multiple selections', () => {
        const pricer = createPricer();
        pricer('size', 'small');
        pricer('creamer', 'dairy');
        expect(pricer('creamer', 'non-dairy')).toBe(1.50);
    });

    it('can calculate in different calling order: creamer first, then size', () => {
        const pricer = createPricer();
        pricer('creamer', 'dairy');
        pricer('size', 'small');
        expect(pricer('creamer', 'non-dairy')).toBe(1.50);
    });

    it('can calculate in different calling order: size first, then creamer', () => {
        const pricer = createPricer();
        pricer('size', 'small');
        pricer('creamer', 'dairy');
        expect(pricer('creamer', 'non-dairy')).toBe(1.50);
    });
});