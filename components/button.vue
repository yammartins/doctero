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
        active,
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
        'idle', 'loading', 'active', 'disabled'
      ],

      width: [
        'auto', 'full'
      ],

      appearance: [
        'primary', 'secondary', 'terciary', 'success', 'error'
      ]
    })
  }
}
</script>

<style lang="postcss">
.button {
  @apply border border-solid text-white transition-all duration-300 rounded-lg outline-none font-semibold focus:outline-none;

  &.is-full {
    @apply w-full;
  }

  &.is-auto {
    @apply w-auto;
  }

  &.is-medium {
    @apply px-10 py-4 text-base ;
  }

  &.is-primary {
    @apply bg-blue border-blue hover:bg-blue-400;
  }

  &.is-secondary {
    @apply border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600;
  }
}
</style>
