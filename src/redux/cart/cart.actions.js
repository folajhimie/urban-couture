import { CartActionTypes } from './cart.types';

// we are not passing a payload because we dont need one 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});