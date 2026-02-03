# Automated Coffee Vending Machine

This is a simple automated coffee vending machine simulator written in TypeScript.

## Statement

We’re building an automated coffee vending machine. This machine might be found at a train station or a large office building. The user interface for this coffee vending machine presents the user with options. The user can change their options many times before they choose the purchase. Your job is to write a function that provides an updated price each time an option is selected. This function is deep inside the coffee vending machine, this function is not exposed as an HTTP API. All other parts of the coffee vending machine have already been built. The interface for this function has already been defined. You cannot change the signature of the function even though there may be a better way to design the function.

The following variables affect the price of the coffee: **size** and **creamer**.

The prices are:

### Size
- Small: $1.00
- Medium: $1.50
- Large: $2.00

### Creamer
- None: $0.00
- Dairy: $0.25
- Non-Dairy: $0.50

## Task

Write a function that provides an updated price each time an option is selected. This function is deep inside the coffee vending machine, this function is not exposed as an HTTP API. All other parts of the coffee vending machine have already been built. The interface for this function has already been defined. You cannot change the signature of the function even though there may be a better way to design the function.

## Implementation

I have implemented the function in `src/index.ts`.

### Design Decisions

- Change and move the types to a separate file `src/pricing.types.ts`.
- Create `CategoryOptions` to define a source of truth for the allowed categories and options.
- Define immutable types for the pricing configuration, so categories, prices and options cannot be changed at runtime.
- Create a simple key-value structure to hold the pricing configuration.
- Implement the pricer function to calculate the total price based on the current selections.
- Unit tests are implemented in `src/index.test.ts`.
- Implement 2 extra unit tests to validate:
    - The pricer function calculates the total price correctly.
    - The pricer function handles edge cases correctly.

## Testing

I have implemented the function in `test/index.spec.ts`.
