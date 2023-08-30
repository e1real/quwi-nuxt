<template>
  <div class="index-page">
    <h1>All projects</h1>
    <ProjectList />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  // async fetch () {
  // this.posts = await this.$axios.get('/projects-manage/index?filters[is_active]=1&sort=dta_create')
  // },
  mounted () {
    this.$store.dispatch('project/fetchProjectList')
    // const { data } = await this.$axios.get('/projects-manage/index?filters[is_active]=1&sort=dta_create')
    // eslint-disable-next-line no-console
    // console.log(data)
  }
}
</script>
<style scoped>
.index-page {
  display: flex;
  justify-content: center;
}
</style>
