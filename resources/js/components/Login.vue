<template>
<div class="w-25">
    <input type="email" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password">
    <button @click="login">login</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: this.email,
                password: this.password
            })
                .then(res => {
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({
                        name: 'user.personal'
                    })
                })

            })
        }
    }
}
</script>

<style scoped>

</style>
