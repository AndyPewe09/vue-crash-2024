<template>
  <button :class="computedClass" :style="computedStyle" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    borderRadius: {
      type: String,
      default: '0px'
    },
    backgroundColor: {
      type: String,
      default: '#000'
    },
    hasBackground: {
      type: Boolean,
      default: true
    },
    buttonType: {
      type: String,
      default: 'primary',
      validator: (value) =>
        ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(
          value
        )
    },
    route: {
      type: String,
      default: null
    }
  },
  computed: {
    computedClass() {
      return {
        btn: true,
        [`btn-${this.buttonType}`]: this.hasBackground,
        [`border-${this.buttonType}`]: !this.hasBackground
      }
    },
    computedStyle() {
      return {
        borderRadius: this.borderRadius,
        backgroundColor: this.hasBackground ? this.backgroundColor : 'transparent',
        color: this.hasBackground ? '#fff' : `var(--bs-${this.buttonType})`
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      if (this.route) {
        this.$router.push(this.route)
      }
    }
  }
}
</script>

<style scoped></style>
