<template >
    <div>
        <p>this is NameResult: {{ result }}</p>
    </div>
</template>
<script>
export default {

    computed: {
        result () {
            return this.$store.state.result;
        }
    }
}
</script>
<style >

</style>