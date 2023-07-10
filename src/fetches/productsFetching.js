// get all products
// export const productsUrl = 'https://6a97-195-158-30-69.ngrok-free.app';
export const productsUrl = 'https://tarasivka.pythonanywhere.com';
export const fechtAllProducts = async (dispatch) => {
    // dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/products/');
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: { products: data} })
    } catch (error) {
        console.log(error);
    }  
}

export const fechtAllCategory = async (dispatch) => {
    // dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/category/');
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'FETCH_CATEGORY_LIST', payload: { categories: data} })
    } catch (error) {
        console.log(error);
    }  
}