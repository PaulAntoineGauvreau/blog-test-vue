<template>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="nom" to="/about">About</RouterLink>
        <RouterLink v-if="nom" to="/blog">Blog</RouterLink>
        <RouterLink to="/nouveau-texte">Nouveau texte</RouterLink>
      </nav>
      <form @submit="onSubmit">
            <input type="text" v-model="nomUsager" name="nomUsager" placeholder="Ton nom SVP !!!">
            <input class="boutton" type="submit" value="Bonjour !" />
      </form>
  </header>
</template>

<script>

    export default {
        name: 'HeaderComp',
        props: {
            //nom: '',
        },
        data() {
            return {
                nomUsager: '',
                affichage: false,
                nom:"",
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                const nomUsagerActif = this.nomUsager;
                this.$emit('nom-usager', nomUsagerActif)
                this.nomUsager = '';
            }
        },
    }
</script>

<style scope>
    header{
        display: flex;
        padding: 20px;
        justify-content: space-between;
        position: sticky;
        top: 0;
        left: 0;
        background: white;
        z-index: 99;
    }

    header>form input,
    nav>a {
        margin-right: 10px
    }
    .boutton {
        background: white;
        border: 2px solid black;
        padding: 5px 10px
    }

    .button:hover{
        background: black;
        color:white;
        cursor: pointer;
    }
</style>