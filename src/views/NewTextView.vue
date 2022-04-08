<template>
  <main class="newText" >
      <h1>New texte</h1>
      <form class="inputText" @submit="onSubmit2" >
        <input type="text" v-model="titre" name="titre"  placeholder="titre">
        <textarea cols="80" v-model="texteBlog" name="texteBlog"  rows="20"></textarea>

        <input class="boutton" type="submit" value="Nouveau texte" :disabled=" texteBlog === '' && image === '' "  />
      </form>
      <div>
          <button @click="openUploadModal">Upload files</button>
      </div>
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
          image: '',
        }
      },
      methods: {
        onSubmit2(e){
          e.preventDefault()
          const newBlog = {
            titre: this.titre,
            text: this.texteBlog,
            auteur: this.usagerNom,
            image: this.image
          }
          this.$emit('add-blog', newBlog)
          this.texteBlog = ''
          this.titre = ''
          this.image = ''
        },
        
        openUploadModal() {
          window.cloudinary.openUploadWidget(
          { cloud_name: 'dhlvev5oz',
            upload_preset: 'f4yj7znp'
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              //console.log('Done uploading..: ', result.info); 
              this.image = result.info.public_id + "." + result.info.format
            }
          }).open();
        },
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

  div,
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
