const isInProduct = (state, id) => {
    return !!state.selectItem.find(item => item.id === id)
}

const quantityCounter = (state, id) => {
    const index = state.selectItem.findIndex(item => item.id === id)
    if(index === -1) {
        return false
    } else {
        return state.selectItem[index].quantity
    }
}

export {isInProduct, quantityCounter}