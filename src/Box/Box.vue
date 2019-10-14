<template>
  <div class="o-box">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    padding: Number, // @todo Make this be used
    borderWidth: String, // @todo Make this be used
  },
};
</script>

<style lang="scss">
$border-thin: 1px; // @todo This should be part of a range of global border sizings instead of simply added here

.o-box {
    background-color: inherit;
    display: block;
    padding: 1.5rem; // @todo This should be a modular sizing
    border-width: $border-thin;
    /* ↓ For high contrast mode */
    outline: $border-thin solid transparent;
    outline-offset: calc(#{$border-thin} * -1);
}
</style>
