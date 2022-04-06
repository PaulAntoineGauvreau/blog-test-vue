<template>
<HeaderComp/>
<RouterView :blogsTexte='blogs' @add-blog="addBlog" @delete-blog="vraimentDelete"/>
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
    this.$router.push('/');
    },
    blogModale(idBlog){
      this.id = idBlog
      this.showModale = !this.showModale;
    },
    async vraimentDelete(id) {
      const res = await fetch(`https://pag-blog-api.herokuapp.com/blogs/${id}`, {
          method: 'DELETE',
      })
      res.status === 200 ? (this.blogs = this.blogs.filter((blog) => blog.id !== id)) : alert('Error deleting text')
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
