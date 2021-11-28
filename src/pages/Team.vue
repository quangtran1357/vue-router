<template>
    <h1>Page Team</h1>
    <router-view></router-view>
    <teams-list/>
</template>

<script>
import TeamsList from '../components/teams/TeamsList.vue'
export default {
  components: { TeamsList },
    name: 'TeamPage'
}
</script>
