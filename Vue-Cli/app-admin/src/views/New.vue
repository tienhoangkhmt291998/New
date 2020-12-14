<template>
  <el-form  ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
    <el-form-item
        prop="email"
        label="Title">

      <el-input v-model="title"></el-input>
    </el-form-item>

    <el-form-item
        prop="email"
        label="Name">

      <el-input  v-model="name" ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">Save</el-button>
      <el-button @click="cancelSubmit">Cancel</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
export default {
  data() {
    return {
      title: "",
      name: ""
    };
  },
  methods: {
    submitForm() {
      let maxId = Math.max(...this.$store.state.arr.map(item => item.id))
      if (this.title === "" || this.nam === ""){
        alert("nhap lai thong ")
      }else {
        this.$store.state.arr.push({
            id: maxId + 1,
            title: this.title,
            name: this.name
        })
      }
      this.$store.state.btn_new = true
      this.$router.push("/User")
    },

    cancelSubmit() {
      this.$store.state.btn_new = true
      this.$store.dispatch('handleSave')
      this.$router.push("/User")
    }
  }
}
</script>