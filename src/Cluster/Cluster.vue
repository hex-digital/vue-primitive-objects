<template>
  <div class="o-cluster">
    <slot />
  </div>
</template>

<script>
import { stylesFromComponentConfig } from '../mixins/stylesFromComponentConfig';

export default {
  name: 'Cluster',
  mixins: [stylesFromComponentConfig],
  props: {
    align: { type: String, default: 'center' },
    justify: { type: String, default: 'center' },
    space: { type: String, default: null }, // @todo This needs to change to allow spacing size to be set
  },
  computed: {
    configVariables() {
      return `${this.align}${this.justify}${this.space}`;
    },
  },
  methods: {
    configStyles(selector) {
      return `
        ${selector}:only-child {
          height: 100%;
        }
        ${selector} > :nth-child(${this.splitAfter}) {
          margin-bottom: auto;
        }
      `;
    },
  },
};
</script>

<style lang="scss">
$spacing: 1.5rem; // @todo This should come from the modular sizing

.o-cluster > * {
  align-items: center; // @todo This needs to change to allow alignment to change
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // @todo This needs to change to alignment to change
  margin: calc(
    #{$spacing} / 2 * -1
  ); // @todo This needs to change to allow spacing to be changed
}

.o-cluster > * > * {
  margin: calc(
    #{$spacing} / 2
  ); // @todo This needs to change to allow spacing to be changed
}
</style>
