// get all products
// export const productsUrl = 'https://2a5b-213-230-74-203.ngrok-free.app';
export const productsUrl = 'https://tarasivka.pythonanywhere.com';
// export const productsUrl = 'http://185.65.244.63';
export const fechtAllProducts = async (dispatch, search) => {
    dispatch({ type: "LOADING" })
    // dispatch({ type: "LOADING" })
    // const params = new URLSearchParams()
    // console.log(params)
    // params.append('q', q)
    // console.log(search)
    // const config = new URLSearchParams({
    //     // q:value || '',
    //     // cat:value || '',
    // })
    // console.log(search);
    try {
        // const resp = await fetch(productsUrl + '/api/products/', {params});

        const resp = await fetch(productsUrl + '/api/products/' + (search ? `?search=${search}`: ''));
        // console.log(productsUrl + '/api/products/' + (search ? `?search=${search}`: ''))
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: data  })
    } catch (error) {
        console.log(error);
    }
}


export const fechtAllCategory = async (dispatch) => {
    dispatch({ type: "LOADING" })
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
    dispatch({ type: "LOADING" })
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
// export const fechProductsByCategory = async (cat,dispatch) => {
    // dispatch({ type: "LOADING" })
//     try {
//         const resp = await fetch(productsUrl + `/api/products?category_slug=${cat}`)
//         const data = await resp.json()
//         // console.log(data);
//         dispatch({ type: 'SELECT_CATEGORY', payload: data })
//     } catch (error) {
//         console.log(error);
//     }
// }

// searching products
// export const searchByQuery = async (value,dispatch) => {
//     try {
//         const resp = await fetch(productsUrl + `/api/products?q=${value}`)
//         const data = await resp.json()
//         // console.log(data);
//         dispatch({ type: 'SEARCH', payload: data })
//     } catch (error) {
//         console.log(error);
//     }
// }

export const fetchDiscount = async (dispatch) => {
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl + `/api/products?discount=1`)
        const data = await resp.json()
        // console.log(data);
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
        // console.log(data);
    } catch (error) {

    }
}