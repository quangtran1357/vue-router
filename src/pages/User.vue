<template>
    <h1>Page User</h1>
    <users-list/>
</template>

<script>
import UsersList from '../components/users/UsersList.vue'
export default {
    components: { UsersList },
    name: 'UserPage'
}
</script>
