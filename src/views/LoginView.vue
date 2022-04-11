<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <div>
                <label for="username">Username</label>
                <input v-model="username" type="text" name="username" class="input">
                <span v-if="error">Error</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="password"  type="text" name="password" class="input">
                <span v-if="error">Error</span>
            </div>
            <button class="btn">Login</button>
        </form>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                username:"",
                password: '',
                error: false,
                userLog: ""
            }
        },
        methods: {
            
            async login(){
                if (this.username != "") {
                    const res = await fetch(`https://pag-blog-api.herokuapp.com/users`)
                    let data = await res.json()

                    //console.log(data)
                    if (res.status === 200) {
                        data = data.filter((user) => user.nomUsager === this.username)
                        if (data[0] != undefined) {
                            if (data[0].password === this.password) {
                               // window.localStorage.setItem('username', data[0].nomUsager)
                                const userLog = data[0].nomUsager
                                this.$emit('user-log', userLog)
                                this.$router.push('/')
                            }  else {
                                this.error = true
                                }
                        } else {                        
                            this.error = true
                        }
                    }  else {
                        this.error = true
                    }
                }

                // faire l'appel a l'API pour l'authentification ici
               // window.user = this.username
               // this.$router.push({name: 'protected'})
            }
        }

    }

</script>

<style scoped>

.login{
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto;
    max-width: 325px;
    border: 1px lightgray solid;
    margin-top: 40px;
    margin-bottom: 30vh;
    border-radius: 8px;
}

label{
    display: block;
    margin-top: 10px;
}

button,
input {
    display: block;
    width: 100%;
    border: lightgray solid 1px;
    height: 30px;
    margin-top: 5px;
}

button {
    margin-top:20px;
    width: 100%;
}

span {
    color:brown;
}
</style>


