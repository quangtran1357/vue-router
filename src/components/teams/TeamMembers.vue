<template>
  <section>
    <ul>
      <user-item
        v-if="member"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <button @click="$router.push('/teams/2')">Go to member id 2</button>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      member: null,
      members: [
        { id: '1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: '2', fullName: 'David Mouse', role: 'QA' },
      ],
    };
  },
  watch: {
    $route() {
      this.setMember();
    }
  },
  mounted() {
    console.log(this.$route.query['data-one'])
    this.setMember();
  },
  methods: {
    setMember() {
      const id = this.$route.params.id
      this.member = this.members.find(item => item.id === id)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>