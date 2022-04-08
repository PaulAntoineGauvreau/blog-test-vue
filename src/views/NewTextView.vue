<template>
  <main class="newText" >
      <h1>New texte</h1>
      <form class="inputText" @submit="onSubmit2" >
        <input type="text" v-model="titre" name="titre"  placeholder="titre">
        <textarea cols="80" v-model="texteBlog" name="texteBlog"  rows="20"></textarea>
        <input 
          id="file-input"
          type="file"
          accept="image/png, image/jpeg"
          @change="handleFileChange($event)"
        />
        <input class="boutton" type="submit" value="Nouveau texte" :disabled=" texteBlog === '' " />

      </form>
  </main>
</template>

<script>
    export default {
      name: 'NewTextView',
      props: {
        usagerNom:String,
      },
      data() {
        return {
          texteBlog: '',
          titre: '',
        }
      },
      methods: {
        onSubmit2(e){
          e.preventDefault()
          const newBlog = {
            titre: this.titre,
            text: this.texteBlog,
            auteur: this.usagerNom
          }
          this.$emit('add-blog', newBlog)
          this.texteBlog = ''
          this.titre = ''
        },
        handleFileChange(e){
          
          this.file = e.target.files[0]
          this.fileName = (e.target.files[0].name).split('.').slice(0, -1).join('.')
          console.log(this.fileName)
        }
      },
    }
</script>

<style scoped>
  .newText{
    padding: 40px;
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
  }

  form,
  textarea,
  label,
  input{
    margin:auto;
    margin-top: 20px;
    display: block;
    width: 100%;
    min-height: 40px;
    max-width: 900px;
  }

</style>
