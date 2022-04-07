<template>
    <main>
        <section v-for="(blog, index) in blogsTexte" :key='index'>
        <h2>{{blog.titre}}</h2>
        <p>{{blog.text}}</p>
        <div class="effacer">
            <small>{{blog.auteur}}</small>
            <!-- <button @click="$emit('delete-blog', blog.id)">Effacer!</button> -->
                 <button @click="$emit('delete-blog', blog.id)" v-if="blog.auteur === usagerNom">Effacer! {{usagerNom}}</button>
        </div>
    </section>
  </main>
</template>

<script>

export default {
    props: {
        blogsTexte: Array,
        usagerNom: String,
    },
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

section {
    padding: 20px;
    border: lightgray 1px solid;
}

p {
    margin-top : 20px
}

button {
    display: block;
    width: 100%;
}

@media (min-width: 50em) {
    main{
        grid-template-columns: 1fr 1fr 1fr;
    }
}


</style>