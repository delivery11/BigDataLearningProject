// src/views/Login.vue
<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="submitForm">
            <label>Username:</label>
            <input type="text" v-model="username" required />

            <label>Password:</label>
            <input type="password" v-model="password" required />

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import apiClient from '../api'

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            async submitForm() {
                const credentials = {
                    username: this.username,
                    password: this.password
                }

                try {
                    const response = await apiClient.loginUser(credentials)

                    if (response.data) {
                        this.$router.push('/statistic')
                    } else {
                        alert('Invalid credentials')
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>
