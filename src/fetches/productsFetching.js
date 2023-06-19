// get all products
const productsUrl = 'https://dummyjson.com/products';
export const fechtAllProducts = async (dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl);
        const data = await resp.json()
        let categories = data.products.map(product => product.category)
        categories = ['all', ...new Set(categories)]
        dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: { products: data.products, categories } })
    } catch (error) {
        console.log(error);
    }  
}

// get products by category
const categoryUrl = 'https://dummyjson.com/products/category/'
export const fechProductsByCategory = async (cat,dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(categoryUrl + cat)
        const data = await resp.json()
        dispatch({ type: 'SELECT_CATEGORY', payload: data.products })
    } catch (error) {
        console.log(error);
    }
}


// searching products
const searchUrl = 'https://dummyjson.com/products/search?'
export const searchByQuery = async (value,dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const config = new URLSearchParams({q:value || ''})
        const resp = await fetch(searchUrl+config)
        const data = await resp.json()
        dispatch({ type: 'SEARCH', payload: data.products })
    } catch (error) {
        console.log(error);
    }
}