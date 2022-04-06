<template>
    <main>
        <section v-for="(blog, index) in blogsTexte" :key='index'>
        <h2>{{blog.titre}}</h2>
        <p>{{blog.text}}</p>
        <div class="effacer">
            <small>{{blog.auteur}}</small>
            <!-- <button @click="$emit('delete-blog', blog.id)" v-if="nom === blog.auteur">Effacer!</button> -->
        </div>
    </section>
  </main>
</template>

<script>

export default {
    props: {
        blogsTexte: Array
    }
}

</script>