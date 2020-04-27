export const paginatedArray = (array, current_page) => {
    let count_item = 10;
    let lastIndex = count_item * current_page
    let firstIndex = lastIndex - count_item;

    return array.filter((x, index) => index >= firstIndex && index < lastIndex)
}

export const searchList = (array, search_text) => {
    if(search_text.length === 0) {
        return array
    } else {
        return array.filter((item, _) => item.symbol.toLowerCase().includes(search_text.toLowerCase()))
    }
}