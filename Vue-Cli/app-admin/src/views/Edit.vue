<template>
  <div>
    {{ $route.params.userId }}
      <h1>Day la trang Edit</h1>
    <el-input v-model="title"></el-input>
    <el-button  type="primary" @click="handleSave">Save</el-button>
    <el-button  type="danger" @click="handleCancel">Cancel</el-button>
  </div>
</template>

<script>
  export default {
    data() {
        return{
            title:this.$store.state.title
        }
    },
    methods: {
      handleSave() {
        this.$store.state.title = this.title
        this.$store.state.userId = this.$route.params.userId
        this.$store.dispatch('handleSave')
        this.$router.push("/User")
      },
      handleCancel() {
        this.$router.push("/User")
      }
    }
  }
</script>