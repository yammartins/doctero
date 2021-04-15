/**
 * Return the value.
 * If it's a function, call it
 * otherwise just return it.
 */
export const value = (target, ...args) => typeof target === 'function'
  ? target(...args)
  : target

/**
 * Get something from object using . annotation.
 * Def is returned if the path value is undefined and shouldReturnUndefined is false
 * or if it's null.
 */
export const dot = (target, path, def = null, shouldReturnUndefined = false) => {
  const splited = Array.isArray(path)
    ? path
    : path.split('.')
  const key = splited.shift()

  if (!key) {
    return target === null
      ? value(def)
      : target
  }

  const isUndefined = typeof target[key] === 'undefined'

  if (!target || isUndefined) {
    if (isUndefined && shouldReturnUndefined) {
      return
    }

    return value(def)
  }

  return dot(target[key], splited, def)
}
