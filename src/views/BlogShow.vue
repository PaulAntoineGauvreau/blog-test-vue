<template>
    <main>
        <header>
            <img :src="`https://res.cloudinary.com/dhlvev5oz/image/upload/${blog.image}`" :alt="blog.titre">
        </header>
        <section>
            <h1>{{blog.titre}}</h1>
            <p>{{blog.text}}</p>
            <small>{{blog.auteur}}</small>
            <button @click="deleteTexte(blog.id)" v-if="blog.auteur === usagerNom">Effacer!</button>
        </section>
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
    section{
        max-width: 900px;
        min-height: 55vh;
        margin: auto;
        margin-top: 40px;
        padding: 20px;
    }
    small,
    button {
        display: block;
        width: 100%;
        margin-top:20px;
        max-width: 350px;
    }
    p{
        margin-top:20px;
        max-width: 60ch;
    }
    header {
        max-width: 1400px;
        margin: auto;
        overflow: hidden;
    }
    img{
        width: 100%;
    }

    button {
        border: lightgray solid 1px;
        height: 30px;
        margin-top: 20px;
    }
</style>