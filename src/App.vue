<template>
  <the-navigation />
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        { id: '1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: '2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: '3', name: 'Client Consulting', members: ['u4', 'u5'] },
        { id: '4', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: '5', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: '6', name: 'Client Consulting', members: ['u4', 'u5'] },
        { id: '7', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: '8', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: '9', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
        { id: 'u6', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u7', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u8', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u9', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u10', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>