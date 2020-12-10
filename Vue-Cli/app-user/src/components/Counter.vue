<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
    </div>
</template>
<script>
export default {

        methods: {
            increment() {
               if(this.$store.state.result < 10) {
                   this.$store.state.result ++;
               }
               else {
                   this.$store.state.result = 0;
               }
            },
            decrement() {
                if (this.$store.state.result === 0) {
                    this.$store.state.result = 0
                }
                else {
                    this.$store.state.result --;
                }
            }
        },
}
</script>
<style >

</style>