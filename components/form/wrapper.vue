<template>
  <div class="form-wrapper">
    <div class="form-wrapper-body">
      <label
        v-if="label"
        class="form-wrapper-label"
        v-text="label"
      />

      <slot />
    </div>

    <template v-if="errors">
      <p
        v-for="error in errors"
        :key="error"
        class="form-wrapper-error"
        v-text="error"
      />
    </template>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: false,
      default: null
    },

    errors: {
      type: Function,
      default: () => ([]),
      required: false
    }
  }
}
</script>
