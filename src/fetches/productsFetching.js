// get all products
export const productsUrl = 'https://tarasivka.pythonanywhere.com';
// export const productsUrl = 'https://tarasivski-kovbasy.com.ua';
export const fechtAllProducts = async (dispatch, search) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/products/' + (search ? `?search=${search}` : ''));
        const data = await resp.json()
        dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: data })
    } catch (error) {
        console.log(error);
    }
}


export const fechtAllCategory = async (dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/category/');
        const data = await resp.json()
        let newData = [{ name: "Всі Продукти", slug: "all-product" }, ...data]
        dispatch({ type: 'FETCH_CATEGORY_LIST', payload: newData })
    } catch (error) {
        console.log(error);
    }
}
export const DetailFunck = async (id, dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?product_slug=${id}`);
        const data = await resp.json()
        dispatch({ type: 'FETCH_DETAIL_PAGE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

// get products by category
export const fechProductsByCategory = async (cat, dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?category_slug=${cat}`)
        const data = await resp.json()
        dispatch({ type: 'SELECT_CATEGORY', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const fetchDiscount = async (dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?discount=1`)
        const data = await resp.json()
        dispatch({ type: 'DISCOUNT', payload: data })
    } catch (error) {
        console.log(error);
    }
}


export const fetchContact = async (dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + '/api/contact/');
        const data = await resp.json()
        dispatch({ type: 'CONTACT', payload: data })
    } catch (error) {
        console.log(error);
    }
}