<template>
<HeaderComp/>
<RouterView :blogsTexte='blogs' @add-blog="addBlog"/>
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
    async addBlog(blog) {
      const res = await fetch('https://pag-blog-api.herokuapp.com/blogs', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(blog) 
      })

    const data = await res.json()
    this.blogs = [...this.blogs, data]
    this.$router.push('/blog');
    },
  },
  async created(){
    this.blogs = await this.fetchBlog()
  }
}
</script>

<style>
  @import '@/assets/base.css';
</style>
