<template>
  <div :class="sideContentClasses">
    <slot />
  </div>
</template>

<script>
import { validateComponent } from '../mixins/validateComponent';

export default {
  name: 'SideContent',
  props: {
    side: { type: String, default: 'left' },
    sideWidth: { type: String, default: null }, // @todo This needs to be implemeneted
    contentMin: { type: String, default: '50%' }, // @todo This needs to be implemeneted
    space: { type: String, default: '1.5rem' }, // @todo This needs to be implemented
    noStretch: { type: Boolean, default: false },
  },
  computed: {
    sideContentClasses() {
      return {
        'o-side-content': true,
        'o-side-content--no-stretch': this.noStretch,
        'o-side-content--left': this.side === 'left',
        'o-side-content--right': this.side !== 'left',
      };
    },
    adjustedSpace() {
      return this.space === '0' ? '0px' : this.space;
    },
  },
  methods: {
    validateComponent() {
      const slotIsValid = true; // @todo Check that the slot contains one element, and that it has exactly two elements as direct children
      const contentMinIsPercentage = this.contentMin.includes('%');

      if (!slotIsValid) {
        console.error(
          '<SideContent> elements should have exactly one child element containing exactly two child elements of its own'
        );
      }
      if (!contentMinIsPercentage) {
        console.warn(
          'The value for each <SideContent> `contentMin` property should be a percentage. Otherwise overflow is likely to occur'
        );
      }
    },
  },
};
</script>

<style lang="scss">
$space = 1.5rem; // @todo This should come from the modular sizings

.o-side-content > * {
  display: flex;
  flex-wrap: wrap;
  margin: calc(#{$space} / 2 * -1); // @todo This needs to change so it can take a dynamic space
}

.o-side-content > * > * {
  flex-grow: 1;
  margin: calc(#{$space} / 2); // @todo This needs to change so it can take a dynamic space
}

.o-side-content--no-stretch > * {
  align-items: flex-start;
}

.o-side-content--left > * > :first-child,
.o-side-content--right > * > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: calc(50% - #{$space}); // @todo This needs to change so it can take a dynamic min-width
}
</style>
