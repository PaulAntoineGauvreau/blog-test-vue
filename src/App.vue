<template>
<HeaderComp :usagerNom="usagerNom" @logout="logout"/>
<RouterView :usagerNom="usagerNom" @user-log="userLogguer" :blogsTexte='blogs' @add-blog="addBlog" @delete-blog="vraimentDelete"/>
<FooterComp/>

</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'App',
  components: {
   HeaderComp,
    FooterComp
  },
  data(){
    return {
      blogs: [],
      usagerNom: "",
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
    userLogguer(user){
      this.usagerNom = user
    },
    logout(){
      this.usagerNom = ""
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
