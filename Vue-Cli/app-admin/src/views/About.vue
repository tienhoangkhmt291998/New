<template>
  <el-table
    :data="arr.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()))"
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
      
        <el-button align="letf" type="primary">Primary</el-button>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';

  export default {

    data() {

      return {
        arr:[],
        search: this.$store.state.search,
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push('User/New');
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
     mounted () {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then ((res) => {
        this.arr.push(...res.data)
      })
      .catch (err => console.log(err))
    }
  }
  
</script>