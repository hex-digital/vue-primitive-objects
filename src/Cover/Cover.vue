<template>
    <div :class="coverClasses">
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </div>
</template>

<script>
// Consider using a render function and adding classes dynamically instead of the template
export default {
    name: 'Cover',
    computed: {
        coverClasses() {
            return {
                'o-cover': true,
                'o-cover--header': this.$slots.header,
                'o-cover--footer': this.$slots.footer,
            };
        },
    },
};
</script>

<style lang="scss">
$space = 1.5rem;

.o-cover {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1.5rem; // @todo This should come from the modular sizings
}

.o-cover > * {
    margin-bottom: auto;
    margin-top: auto;
}

.o-cover--header > :first-child {
    margin-bottom: $space;
    margin-top: 0;
}

.o-cover--footer > :last-child {
    margin-bottom: 0;
    margin-top: $space;
}
</style>
