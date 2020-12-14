<template>
  <el-table
    :data="this.$store.state.arr.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Id"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Title"
      prop="title">
    </el-table-column>
    <el-table-column
      align="right"
      >
      <template slot="header" slot-scope="{}">
          <el-input
          v-model="search"
          size="mini"/>
      </template>

      <template  slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row.id)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import axios from 'axios';

  export default {

    data() {
      return {
        arr:this.$store.state.arr,
        search: this.$store.state.search,
      }
    },
    methods: {
      handleEdit(index) {
        console.log(index);
        this.$router.push('/User/:userId/edit')
      },

      handleDelete(index) {

        let id = this.$store.state.arr;

        for (let i = 0; i < id.length; i++) {

          if (id[i].id === index){
            id.splice(i, 1)
          }
        }
      }
    },
    // mounted () {
    //   axios.get("https://jsonplaceholder.typicode.com/todos")
    //   .then ((res) => {
    //     this.arr=res.data
    //   })
    //   .catch (err => console.log(err))
    // }
  }

</script>