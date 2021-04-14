/**
 * Map boolean attributes.
 */
const mapBooleanAttributes = map => Object.keys(map)
  .reduce((computed, key) => {
    const keys = map[key]

    computed[key] = () => {
      return keys.find((key) => {
        const value = this?.$attrs[key]

        return typeof value !== 'undefined' && value !== false
      }) || keys[0]
    }

    return computed
  }, {})

export default mapBooleanAttributes
