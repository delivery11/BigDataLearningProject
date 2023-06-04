// src/views/Statistic.vue
<template>
    <div>
        <h1>Minority Statistics</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Population</th>
                <th>Percentage</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="minority in minorities" :key="minority.id">
                <td>{{ minority.id }}</td>
                <td>{{ minority.name }}</td>
                <td>{{ minority.population }}</td>
                <td>{{ minority.percentage }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import apiClient from '../api'

    export default {
        data() {
            return {
                minorities: []
            }
        },
        async created() {
            try {
                const response = await apiClient.getAllMinorities()
                this.minorities = response.data
            } catch (error) {
                console.error(error)
            }
        }
    }
</script>
