<template>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="nom" to="/about">About</RouterLink>
        <RouterLink v-if="nom" to="/blog">Blog</RouterLink>
        <RouterLink v-if="usagerNom" to="/nouveau-texte">Nouveau texte</RouterLink>
      </nav>
      <button class="button" v-if="usagerNom" @click="logout">Logout</button>
      <RouterLink  class="button" v-else to="/Login">Login</RouterLink>
  </header>
</template>

<script>

    export default {
        name: 'HeaderComp',
        props: {
            usagerNom: String,
        },
        data() {
            return {
                nomUsager: '',
                affichage: false,
                nom:"",
                username: "",
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                const nomUsagerActif = this.nomUsager;
                this.$emit('nom-usager', nomUsagerActif)
                this.nomUsager = '';
            },
            logout(){
                this.$emit('logout')
            },
        },
    }
</script>

<style scoped>
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
    .button {
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