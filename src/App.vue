<template>
<HeaderComp/>
<RouterView :blogsTexte='blogs'/>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
   HeaderComp
  },
  data(){
    return {
      blogs: []
    }
  },
  methods: {
    async fetchBlog() {
      const res = await fetch('https://pag-blog-api.herokuapp.com/blogs')
      const data = await res.json()
      return data
    },
  },
  async created(){
    this.blogs = await this.fetchBlog()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
