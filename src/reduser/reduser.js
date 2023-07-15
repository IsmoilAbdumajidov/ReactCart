export const reducer = (state, action) => {
    if (action.type === 'FETCH_PRODUCTS_LIST') return { ...state, products: action.payload }

    if (action.type === 'FETCH_CATEGORY_LIST') return { ...state, categories: action.payload }

    if (action.type === 'UPDATE_CART') return { ...state, cart: action.payload }

    if (action.type === 'UPDATE_WISHLIST') return { ...state, wishlist: action.payload }

    if (action.type === 'UPDATE_SCALE') return { ...state, scale: action.payload }

    if (action.type === 'FETCH_DETAIL_PAGE') return { ...state, detail: action.payload }

    if (action.type === 'ALL_PPRICE') return { ...state, allPrice: action.payload }

    // if (action.type === 'SELECT_CATEGORY') return { ...state, products: action.payload }

    // if (action.type === 'SEARCH') return { ...state, products: action.payload }

    if (action.type === 'SELECTEDID') return { ...state, selectedId: action.payload }

    if (action.type === 'DISCOUNT') return { ...state, discount: action.payload }

    return state
}   