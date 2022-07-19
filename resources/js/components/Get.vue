<template>
<div>
    Get
    {{this.data}}
    <p v-if="err" class="text-danger">{{this.err}}</p>
</div>
</template>

<script>
export default {
    name: "Get",
    data() {
        return {
            data: null,
            err: null
        }
    },
    methods: {
        getData() {
            axios.get('/api/get')
                .then(res => {
                    this.data = res.data
                })
                .catch(error => {
                    this.err = error.response.data.message
                })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>
