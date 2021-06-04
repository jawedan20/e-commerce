
export const countCart = cart => {
    if(cart.length > 0){
        const cartItemCount = cart.map(item => item.quantity).reduce((total, num) => (total + num), 0);
        const cartTotal = cart.map(item => item.product.price * item.quantity).reduce((total, num) => (total + num), 0);
        return { cartItemCount, cartTotal }
    }
    return {cartItemCount:0,cartTotal:0}
  }
  