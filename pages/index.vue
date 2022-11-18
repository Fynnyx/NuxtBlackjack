<template>
  <div>
    <button @click="createDeck">Generate</button>
    {{ cards }}
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
  methods: {
    createDeck() {
      this.$store.commit("cards/createDeck");
    },
  },
};
</script>

<style>
</style>