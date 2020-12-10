<template >
    <div>
        <p>this is results: {{ result }} </p>
    </div>
</template>
<script>
export default {

    computed: {
        result () {
            return this.$store.getters.nameResult;
        },
    }
}
</script>
<style >

</style>