<template>
  <div class="app-container">
    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="Name" width="180">
        <template slot-scope="scope">
          {{ scope.row.name.title }} {{ scope.row.name.first }} {{ scope.row.name.last }}
        </template>
      </el-table-column>
      <el-table-column prop="gender" label="Gender" width="180" />
      <el-table-column prop="location.city" label="City" width="180" />
      <el-table-column prop="email" label="Email" width="300" />

    </el-table>
  </div>
</template>

<script>
import { fetchMembers } from '@/api/table'

export default {
  data() {
    return {
      tableData: [],
      key: 1 // table key
    }
  },
  mounted() {
    fetchMembers().then(response => {
      this.tableData = response.results
    })
  }
}
</script>

