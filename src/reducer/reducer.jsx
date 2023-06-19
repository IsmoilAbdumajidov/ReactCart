export const reducer = (state, action) => {

    if (action.type === "LOADING") return { ...state, loading: true }

    if (action.type==='FETCH_PRODUCTS_LIST') return {...state,products:action.payload.products,categories:action.payload.categories,loading:false}
    
    if (action.type==='SELECT_CATEGORY') return {...state,products:action.payload,loading:false}

    if (action.type==='SEARCH') return {...state,products:action.payload,loading:false}

    if(action.type==='UPDATE_CART') return {...state,cart:action.payload}
    
    if(action.type==='UPDATE_WISHLIST') return {...state,wishlist:action.payload}

    return state 
}   