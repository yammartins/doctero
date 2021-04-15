<script>
import { dot } from '@/helpers'

export default {
  inject: {
    id: {
      default: ''
    },

    path: {
      default: ''
    },

    prefix: {
      default: ''
    },

    labels: {
      default: () => ({
        //
      })
    },

    handleInput: {
      default: () => () => ({
        //
      })
    }
  },

  props: {
    name: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    hasErrors () {
      return this.errors.length > 0
    },

    label () {
      const {
        name,
        labels
      } = this

      return dot(labels, name)
    },

    resource () {
      return `${this.path}.resource.${this.name}`
    },

    form () {
      return `${this.path}.form.${this.name}`
    },

    errors (state) {
      const {
        prefix
      } = this

      return dot(this.$store.state[prefix], ['errors', this.id, this.name]) || []
    },

    value () {
      const {
        form,
        prefix,
        resource
      } = this

      return dot(this.$store.state[prefix], form, () => dot(this.$store.state[prefix], resource))
    }
  },

  methods: {
    _handleInput (value) {
      const {
        form,
        handleInput
      } = this

      if (handleInput) {
        handleInput(form, value)
      }

      this.$emit('input', value)
    }
  },

  render () {
    const {
      path,
      _handleInput: handleInput
    } = this

    if (!path) {
      return this.$scopedSlots.default({
        handleInput
      })
    }

    const {
      name,
      label,
      value,
      errors,
      hasErrors
    } = this

    return this.$scopedSlots.default({
      name,
      label,
      value,
      errors,
      hasErrors,
      handleInput
    })
  }
}
</script>
