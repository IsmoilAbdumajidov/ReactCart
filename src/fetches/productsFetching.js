// get all products
// export const productsUrl = 'https://5927-195-158-30-69.ngrok-free.app';
export const productsUrl = 'https://tarasivka.pythonanywhere.com';
export const fechtAllProducts = async (dispatch) => {
    // dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/products/');
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: data  })
    } catch (error) {
        console.log(error);
    }
}

export const fechtAllCategory = async (dispatch) => {
    // dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/category/');
        const data = await resp.json()
        let newData = [{name:"Всі Продукти",slug:"all-product"},...data]
        dispatch({ type: 'FETCH_CATEGORY_LIST', payload:  newData })
    } catch (error) {
        console.log(error);
    }
}
export const DetailFunck = async (id, dispatch) => {
    // dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?product_slug=${id}`);
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'FETCH_DETAIL_PAGE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

// get products by category
export const fechProductsByCategory = async (cat,dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?category_slug=${cat}`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'SELECT_CATEGORY', payload: data })
    } catch (error) {
        console.log(error);
    }
}

// searching products
export const searchByQuery = async (value,dispatch) => {
    try {
        const resp = await fetch(productsUrl + `/api/products?q=${value}`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'SEARCH', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const fetchDiscount = async (dispatch) => {
    try {
        const resp = await fetch(productsUrl + `/api/products?discount=1`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'DISCOUNT', payload: data })
    } catch (error) {
        console.log(error);
    }
}