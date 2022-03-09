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

export const getUniqueSet = (obj, child1, child2) => {
  return Array.from(
    new Set(
      obj
        .sort((a, b) =>
          a?.[child1]?.[child2] > b?.[child1]?.[child2] ? -1 : 1
        )
        .map((projeto) => projeto?.[child1]?.[child2])
    )
  )
}
