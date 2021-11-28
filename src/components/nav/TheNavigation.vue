<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/teams">Teams</router-link>
          <!-- <router-link :to="`.teams/${id}?dataOne=${dataOne}`">Teams</router-link> -->
          <!-- <router-link :to="{name: 'teams'}">Teams</router-link> -->
          <!-- <router-link :to="{name: 'teamDetail', params: {id: '1'}, query: {dataOne: '123'}}">Teams</router-link> -->
        </li>
        <li>
          <router-link to="/teams/super">Teams super</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
        <li>
          <button @click="goToHome()">Programmatic Navigation</button>
        </li>
        <li>
          <button @click="goBack()">Go Back</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    goToHome() {
      console.log(this.$router)
      this.$router.push('/teams')
    },
    goBack() {
      this.$router.back()
      // this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}
.custom-link-active {
  background: #b71616;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>