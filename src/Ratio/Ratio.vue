<template>
    <div class="o-ratio" :style="ratioStyles">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Ratio',
    props: {
        ratio: { type: String, required: true },
    },
    computed: {
        ratioStyles() {
            return {
                paddingBottom: `calc(${this.ratioObject.width} / ${this.ratioObject.height} * 100%);`
            };
        },
        ratioObject() {
            const ratioArray = this.ratio.split(':');
            return { width: ratioArray[0], height: ratioArray[1] };
        },
    },
    methods: {
        validateComponent() {
            // @todo Check that the slot contains just one element
            const slotHasOneChild = true;
            const ratioIsRatio = this.ratio.indexOf(':') !== -1;

            if (!slotHasOneChild) {
                console.error('<Ratio> elements should have just one child element');
            }
            if (!ratioIsRatio) {
                console.error('The value for each <Ratio> `ratio` property should be a ratio, x:y, otherwise it will not work. Current value is ${this.ratio}');
            }
        },
    },
    beforeMount() { this.validateComponent() },
    beforeUpdate() { this.validateComponent() },
};
</script>

<style lang="scss">
.o-ratio {
    display: block;
    position: relative;
    padding-bottom: calc(6 / 9 * 100%);
}

.o-ratio > * {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.o-ratio > img,
.o-ratio > video {
    height: 100%;
    object-fit: cover;
    width: 100%;
}
</style>
