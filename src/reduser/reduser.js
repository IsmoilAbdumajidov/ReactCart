export const reducer = (state, action) => {
    if (action.type==='FETCH_PRODUCTS_LIST') return {...state,products:action.payload.products}

    if (action.type==='FETCH_CATEGORY_LIST') return {...state,categories:action.payload.categories}

    if(action.type==='UPDATE_CART') return {...state,cart:action.payload}
    
    if(action.type==='UPDATE_WISHLIST') return {...state,wishlist:action.payload}

    if(action.type==='UPDATE_SCALE') return {...state,scale:action.payload}

    if(action.type==='ALL_PPRICE') return {...state,allPrice:action.payload}

    return state 
}   