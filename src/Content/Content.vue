<template>
    <div :class="contentClasses">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        centerText: { type: Boolean, default: false },
        gutters: { type: Boolean, default: false }, // @todo This needs to change to allow gutter size to be set
        intrinsic: { type: Boolean, default: false },
        maxWidth: { type: String, default: '60ch' }, // @todo This needs to change to allow max width to be set
    },
    computed: {
        contentClasses() {
            return {
                'o-content': true,
                'o-content--gutters': this.gutters,
                'o-content--center-text': this.centerText,
                'o-content--intrinsic': this.intrinsic,
            }
        }
    }
};
</script>

<style lang="scss">
$measure: 60ch;
$gutters: 1rem; // This should come from our modular sizing system

.o-content {
    box-sizing: content-box;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: $measure;
}

.o-content--gutters {
    padding-left: $gutters;
    padding-right: $gutters;
}

.o-content--center-text {
    text-align: center;
}

.o-content--intrinsic {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
