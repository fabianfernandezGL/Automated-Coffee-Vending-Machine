// Category options
export type CategoryOptions = Readonly<{
  size: "small" | "medium" | "large";
  creamer: "none" | "dairy" | "non-dairy";
}>;

// Allowed categories
export type Category = keyof CategoryOptions;

// Allowed options
export type Option = CategoryOptions[Category];

// Price type
export type Price = number;

// Pricing configuration type
export type PricingConfig = Readonly<{
  [cat in Category]: Readonly<Record<Option, Price>>;
}>;
