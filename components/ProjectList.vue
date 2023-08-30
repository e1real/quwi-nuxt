<template>
  <ul>
    <li v-for="project in projectList" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      projectList: []
    }
  }
}
</script>
