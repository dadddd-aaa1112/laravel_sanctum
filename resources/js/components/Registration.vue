<template>
    <div class="w-25">
        <input v-model="name" placeholder="name" type="text">
        <input v-model="email" placeholder="email" type="email">
        <input v-model="password" placeholder="password" type="password">
        <input v-model="password_confirmation" placeholder="password confirmation" type="password">
        <button @click="register">register</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
                .then(res => {
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({
                        name: 'user.personal'
                    })
                    console.log(res)
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
