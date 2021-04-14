/**
 * Map boolean attributes.
 */
const mapBooleanAttributes = map => Object.keys(map)
  .reduce((computed, key) => {
    const keys = map[key]

    computed[key] = function () {
      return keys.find((key) => {
        const {
          $attrs
        } = this

        const value = $attrs[key]

        return typeof value !== 'undefined' && value !== false
      }) || keys[0]
    }

    return computed
  }, {})

export default mapBooleanAttributes
