<template>
  <div class="o-switcher">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  props: {
    limit: { type: Number, default: 4 }, // @todo This needs to be implemented
    space: { type: String, default: '1.5rem' }, // @todo This needs to be implemented
    threshold: { type: String, default: '60ch' }, // @todo This needs to be implemented
  },
  computed: {
    adjustedSpace() {
      return this.space === '0' ? '0px' : this.space;
    },
  },
};
</script>

<style lang="scss">
$measure: 60ch; // @todo
$space: 1.5rem; // @todo This should come from the modular sizings
$threshold: 4; // @todo

.o-switcher {
  display: block;
}

.o-switcher > * {
  display: flex;
  flex-wrap: wrap;
  margin: calc((#{$space} / 2) * -1);
  overflow: hidden;
}

.o-switcher > * > * {
  flex-basis: calc((#{$measure} - 100%) * 999);
  flex-grow: 1;
  // @todo Implement threshold: flex-basis: calc((#{$threshold} - (100% - #{$space})) * 999);
  margin: calc(#{$space} / 2);
}

// @todo This may need to be an injected stylesheet instead of the below
//.o-switcher > * > :nth-last-child(n+${parseInt(this.limit) + 1}),
//.o-switcher > * > :nth-last-child(n+${parseInt(this.limit) + 1}) ~ * {
//  flex-basis: 100%;
//}
</style>
