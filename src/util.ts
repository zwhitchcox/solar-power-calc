export const memoize = fn => {
  const cache = {}
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    }
    return cache[key] = fn(...args)
  }
}

export const memoizeLS = (prefix, fn) => {
  return (...args) => {
    const key = "memoizeLS1.1" + prefix + JSON.stringify(args)
    if (window.localStorage[key]) {
      return JSON.parse(window.localStorage[key])
    }
    const result = fn(...args)
    window.localStorage[key] = JSON.stringify(result)
    return result
  }
}