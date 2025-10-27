export type Money = {
  amount: string;
  currencyCode: string;
};

export type CartLine = {
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    /** This is the Variant Title */
    title: string;
    product: {
      /** This is the Product Name */
      title: string;
    };
  };
};

export type ShopifyCart = {
  /** ADDED: The total quantity of all items in the cart. */
  totalQuantity: number;
  cost: {
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: CartLine[];
};