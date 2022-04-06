<template>
  <main>
    <section v-for="(blog, index) in blogs" :key='index'>
        <h2>{{blog.titre}}</h2>
        <p>{{blog.text}}</p>
        <div class="effacer">
            <small>{{blog.auteur}}</small>
            <button @click="$emit('delete-blog', blog.id)" v-if="nom === blog.auteur">Effacer!</button>
        </div>
    </section>
  </main>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return {
      blogs: Array
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
