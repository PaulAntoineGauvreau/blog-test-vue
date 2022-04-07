<template>
    <main>
        <router-link @delete-blog="deleteBlog" class="carteBlog"
        v-for="(blog, index) in blogsTexte" 
        :key='index'
        :to="{name: 'blog.show', params:{id: blog.id} }">
            <h2>{{blog.titre}}</h2>
            <p>{{blog.text.substring(0,400)}} ...</p>
                <small>{{blog.auteur}}</small>
        </router-link>
  </main>
</template>

<script>

export default {
    props: {
        blogsTexte: Array,
        usagerNom: String,
    },
    methods:{
        deleteBlog(id) {
            this.$emit('delete-blog',id)
            
        }
    }
}

</script>

<style scoped>

main{
    max-width: 1200px;
    display: grid;
    gap: 20px;
    margin: auto;
    padding: 40px 20px;
}

.carteBlog {
    padding: 20px;
    border: lightgray 1px solid;
}

.carteBlog:hover{
    transform: scale(1.005);
}

p {
    margin-top : 20px
}

small,
button {
    display: block;
    width: 100%;
    margin-top:20px;
}

@media (min-width: 50em) {
    main{
        grid-template-columns: 1fr 1fr 1fr;
    }
}


</style>