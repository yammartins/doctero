<template>
  <button
    :type="submit ? 'submit' : 'button'"
    v-bind="attrs"
    :class="`button is-${size} is-${state} is-${width} is-${appearance}`"
    v-on="$listeners"
  >
    {{ label }}
  </button>
</template>

<script>
import { mapBooleanAttributes } from '@/helpers'

export default {
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null
    },

    submit: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    attrs () {
      const {
        actived,
        success,

        ...attrs
      } = this.$attrs

      return attrs
    },

    ...mapBooleanAttributes({
      size: [
        'small', 'medium', 'large'
      ],

      state: [
        'idle', 'loading', 'actived', 'disabled'
      ],

      width: [
        'auto', 'full'
      ],

      appearance: [
        'error', 'primary', 'secondary', 'terciary', 'success'
      ]
    })
  }
}
</script>

<style lang="postcss">
.button {
  @apply outline-none;
}
</style>
