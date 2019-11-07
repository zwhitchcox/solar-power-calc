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

const memoizeLSPrefix = "memoizeLS"
const memoizeLSVersion = "1"
const savedVersion = window.localStorage.memoizeLSVersion
if (typeof savedVersion !== "undefined" && savedVersion !== memoizeLSVersion) {
  for (const key in window.localStorage) {
    if (key.startsWith(memoizeLSPrefix)) {
      delete window.localStorage[key]
    }
  }
}

export const memoizeLS = (prefix, fn) => {
  return (...args) => {
    const key = memoizeLSPrefix + memoizeLSVersion + prefix + JSON.stringify(args)
    if (window.localStorage[key]) {
      return JSON.parse(window.localStorage[key])
    }
    const result = fn(...args)
    window.localStorage[key] = JSON.stringify(result)
    return result
  }
}

export const truncate = (num, precision) => {
  const factor = 10**precision
  return (num * factor | 0) / factor
}