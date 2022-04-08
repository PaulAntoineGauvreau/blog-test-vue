<template>
    <main>
        <router-link @delete-blog="deleteBlog" class="carteBlog"
        v-for="(blog, index) in blogsTexte.slice().reverse()" 
        :key='index'
        :to="{name: 'blog.show', params:{id: blog.id} }">
            <img :src="`https://res.cloudinary.com/dhlvev5oz/image/upload/blog/${blog.image}`" :alt="blog.titre">
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
    },
    data() {
        return {
            //blogReverse: [... this.blogsTexte].reverse(),
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

    border: lightgray 1px solid;
}

.carteBlog:hover{
    transform: scale(1.005);
}

small,
h2,
p {
    margin: 20px 0;
    padding: 0 20px;
}

small,
button {
    display: block;
    width: 100%;
    margin-top:20px;
}

img {
    max-width: 100%;
}

@media (min-width: 50em) {
    main{
        grid-template-columns: 1fr 1fr 1fr;
    }
}


</style>