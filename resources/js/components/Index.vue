<template>
    <div>
        <router-link :to="{name: 'get.index'}">get</router-link>
        <router-link  v-if="!token" :to="{name: 'user.login'}">login</router-link>
        <router-link v-if="!token"  :to="{name: 'user.registration'}">registration</router-link>
        <router-link v-if="token"  :to="{name: 'user.personal'}">Personal</router-link>
        <button @click="logout">logout</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
      return {
          token: null
      }
    },
    methods: {
        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                })
        },
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    }
}
</script>

<style scoped>

</style>
