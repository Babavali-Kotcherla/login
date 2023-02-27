<template>
  <v-container>
    <v-card>
      <v-card-title>Welcome {{ username }}</v-card-title>
      <v-card-text>You are logged in!</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "WelcomeUser",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
