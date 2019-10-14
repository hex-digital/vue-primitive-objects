<template>
  <div :class="stackClasses" :data-identifier="configIdentifier">
    <slot />
  </div>
</template>

<script>
import { stylesFromComponentConfig } from '../mixins/stylesFromComponentConfig';

/**
 * Flow elements require space to physically and conceptually separate them from the elements that come before and
 * after them. This flow space should exist solely between children elements in a container, and not between an element
 * and the container itself.
 * See https://absolutely.every-layout.dev/layouts/stack/
 *
 * Sometimes content should split, with some aligned to the top of the container, and some aligned to the bottom.
 * This can be achieved using the splitAfter prop, which will anchor all children after the nth to the bottom.
 * Useful for e.g. pinning buttons or text to the bottom of the container.
 *
 * Stacks can be used within stacks as well. If recursive is true, all stacks within the parent will have the same
 * sizing. If recursive is false, all nested stacks can designate their own spacing value.
 * This could be useful for laying out a form, where elements are grouped into a stack, and labels + inputs exist inside
 * of nested stacks with different spacing.
 */
export default {
  name: 'Stack',
  mixins: [stylesFromComponentConfig],
  props: {
    recursive: { type: Boolean, default: false },
    space: { type: String, default: '1.5rem' }, // @todo Prob a vertical rhythm value here
    splitAfter: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && Number.isInteger(value),
    },
  },
  computed: {
    configIdentifier() {
      return `stack-${this.splitAfter}`;
    },
    stackClasses() {
      return {
        'o-stack': true,
        'o-stack--recursive': this.recursive,
      };
    },
  },
  methods: {
    configStyles() {
      if (this.splitAfter === 0) return null;

      return `
        [data-identifier="${this.configIdentifier}"]:only-child {
          height: 100%;
        }
        [data-identifier="${this.configIdentifier}"] > :nth-child(${this.splitAfter}) {
          margin-bottom: auto;
        }
      `;
    },
  },
};
</script>

<style lang="scss">
.o-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.o-stack > * + *,
.o-stack--recursive * + * {
  margin-top: 1.5rem; // @todo This value should come from the modular spacing scale
}
</style>
