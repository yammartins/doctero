<template>
  <Consumer
    v-slot="props"
    :name="name"
    @input="$emit('input', $event)"
  >
    <Wrapper
      :errors="props.errors"
      class="form-input"
    >
      <input
        ref="input"
        :name="name"
        :value="value || props.value || search"
        class="form-input-control"
        :class="{
          'is-error': props.hasErrors,
          'is-label-less': ! (label || props.label),
          'is-active': props.value || value || (options && search),
        }"
        v-bind="$attrs"
        @blur="handleBlur"
        @input="handleInput($event, props.handleInput)"
        @click="handleFocus"
        @keydown.up="handleArrow(-1)"
        @keydown.down="handleArrow(1)"
        @keydown.enter.stop.prevent="handleInput($event, props.handleInput)"
      >

      <ChevronDownIcon
        v-if="options"
        class="form-input-arrow"
        :class="{ 'is-reverse': show }"
      />

      <label
        v-if="label || props.label"
        :for="name"
        class="form-input-label"
        v-text="label || props.label"
      />

      <slot
        v-bind="props"
      />

      <Transition
        name="fade"
      >
        <ul
          v-if="showDropdown"
          class="form-input-dropdown"
        >
          <li
            v-if="filtered.length < 1"
            class="form-input-dropdown-item"
          >
            <a
              href="#"
              class="form-input-dropdown-link is-active"
              @click.prevent="handleInput(lowered, props.handleInput)"
            >
              {{ filter }} {{ lowered }}
            </a>
          </li>

          <li
            v-for="(option, index) in filtered"
            :key="option"
            class="form-input-dropdown-item"
          >
            <a
              href="#"
              :class="{
                'is-active': option == props.value,
                'is-hover': selected === index,
              }"
              class="form-input-dropdown-link"
              @click.prevent="handleInput(option, props.handleInput)"
              v-text="option"
            />
          </li>
        </ul>
      </Transition>
    </Wrapper>
  </Consumer>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/outline'

export default {

  components: {
    ChevronDownIcon
  },
  inheritAttrs: false,

  props: {
    value: {
      type: String,
      required: false,
      default: null
    },

    name: {
      type: String,
      required: false,
      default: null
    },

    label: {
      type: String,
      required: false,
      default: null
    },

    options: {
      type: Array,
      default: null,
      required: false
    },

    filter: {
      type: String,
      required: false,
      default: null
    }
  },

  data: () => ({
    search: '',
    show: false,
    selected: -1
  }),

  computed: {
    lowered () {
      return this.search.toLowerCase()
    },

    ordered () {
      return this.options
        .slice()
        .sort((a, b) => (
          b.toLowerCase().indexOf(this.lowered) - a.toLowerCase().indexOf(this.lowered)
        ))
    },

    filtered () {
      if (this.filter) {
        return this.ordered.filter(string => string.toLowerCase().includes(this.lowered))
      }

      return this.ordered
    },

    _value () {
      if (this.filter) {
        return this.search
      }

      return this.value
    },

    showDropdown () {
      if (this.filter) {
        return (this.show && this.filtered.length > 0) || (this.filtered.length < 1 && this.search.length > 2)
      }

      return this.options && this.show
    }
  },

  created () {
    this.search = this.$attrs.value || ''
  },

  methods: {
    // animar o fechar da extensao
    // botoes tipo o de abrir e fechar a sidebar
    // ai eh tipo molinha
    handleInput (event, callback) {
      /**
       * If event is string
       * we can send it without double check.
       */
      if (typeof event === 'string') {
        return callback(event)
      }

      this.search = event.target.value || ''

      if (this.options) {
        const value = this.options[this.selected] || (this.filter && this.search)

        if (event.code === 'Enter' && value) {
          this.show = false
          this.selected = -1

          callback(value)
        }

        return
      }

      callback(this.search)
    },

    handleArrow (dir) {
      this.selected = Math.min(this.options.length - 1, Math.max(0, this.selected + dir))
    },

    handleFocus () {
      this.show = !!this.options
    },

    handleBlur () {
      this.show = false
    }
  }
}
</script>
