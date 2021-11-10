export function sortArray(array, sortTo) {
  const resp = array.sort((a, b) => {
    if (a[`${sortTo}`] > b[`${sortTo}`]) {
      return 1
    }
    if (a[`${sortTo}`] < b[`${sortTo}`]) {
      return -1
    }
    // a must be equal to b
    return 0
  })
  return resp
}

export function searchInArray(array, key, searchFor) {
  return array.filter((item) => {
    if (item[`${key}`].toLowerCase().match(searchFor.toLowerCase())) {
      return item
    }
  })
}
