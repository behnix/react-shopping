export const AddItemToCart = (cartItems, newCartItem) => {
  const isExistItem = cartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );
  if (isExistItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
