export const saveToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
};