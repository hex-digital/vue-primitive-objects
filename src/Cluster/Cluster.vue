<template>
  <div class="o-cluster">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Cluster',
  props: {
    align: { type: String, default: 'center' },
    justify: { type: String, default: 'center' },
    space: { type: String, default: null }, // @todo This needs to change to allow spacing size to be set
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
