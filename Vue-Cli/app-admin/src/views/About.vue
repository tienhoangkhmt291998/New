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
          @click="handleEdit(scope.row.id,scope.row.title)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id, scope.row.title)">Delete</el-button>
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
      handleEdit(index, title) {
        this.$store.state.title = title
        this.$router.push(`/User/${index}/edit`)
      },

      handleDelete(index, title) {

        this.$confirm(title, 'Cảnh Cáo', {

          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          let id = this.$store.state.arr;

          for (let i = 0; i < id.length; i++) {

            if (id[i].id === index){
              id.splice(i, 1)
            }
          }

          this.$message({
            type: 'success',
            message: 'Xóa Thành Công',
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Đã Hủy Xóa'
          });
        });
      },

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