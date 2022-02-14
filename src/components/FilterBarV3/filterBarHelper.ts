export const getUniqueValues = (array, value) => {
  const newValue = array.slice()
  newValue.push(value)
  return Array.from(new Set(newValue))
}

export const removeValue = (array, value) => {
  return array.slice().filter((e) => e !== value)
}

export const getResultsText = (array) => {
  const arrayCopy = array.slice()
  if (arrayCopy.length === 1) {
    return `${arrayCopy[0]}`
  } else if (arrayCopy.length > 1) {
    const lastItem = arrayCopy[arrayCopy.length - 1]
    arrayCopy.pop()
    return `${arrayCopy.join(', ')} e ${lastItem}`
  } else {
    return ''
  }
}
