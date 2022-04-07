<template>
    <main>
        <h1>{{blog.titre}}</h1>
        <p>{{blog.text}}</p>
        <small>{{blog.auteur}}</small>
        <button @click="deleteTexte(blog.id)" v-if="blog.auteur === usagerNom">Effacer! {{usagerNom}}</button>
    </main>
</template>

<script>

export default {
    props:{
        id: {type: Number, required: true},
         usagerNom: String,
    },
    data(){
        return {
            blog: [],
    }
  },
    methods: {
    async fetchBlog() {
      const res = await fetch(`https://pag-blog-api.herokuapp.com/blogs/${this.id}`)
      const blog = await res.json()
      console.log(blog)
      return blog
    },
    deleteTexte(id){
        this.$emit('delete-blog', id)
        this.$router.push('/');
    }
},
  async created(){
    this.blog = await this.fetchBlog()
  }
}

</script>

<style scoped>
    main{
        max-width: 900px;
        margin: auto;
        margin-top: 40px;
        padding: 20px;
    }
    small,
    button {
        display: block;
        width: 100%;
        margin-top:20px;
    }
</style>