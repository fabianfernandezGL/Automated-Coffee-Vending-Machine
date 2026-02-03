import { Category, Price, PricingConfig, Option } from "./pricing.types.ts";
import prices from "./prices.json" with { type: "json" };

export interface Pricer {
    /**
    * Invoked each time the user makes a selection.
    * No need to validate arguments,the caller validates the arguments
    before this function is invoked.
    * @returns the _total_ price of the coffee so far given all the
    selections made
    */

    (category: Category, option: Option): Price
}

/**
 * A new pricer is created for each coffee being purchased.
*/
export const createPricer = (): Pricer => {
    const pricing = prices as PricingConfig;
    const selections: Partial<Record<Category, Option>> = {};

    return (category: Category, option: Option): Price => {
        selections[category] = option;

        let totalPrice = 0;
        for (const cat in selections) {
            // Using "!" since we validate the inputs before this function is invoked
            const currentOption = selections[cat as Category]!;

            totalPrice += pricing[cat as Category][currentOption];
        }

        return totalPrice;
    };
}