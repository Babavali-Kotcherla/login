<template>
  <v-app>
   
   <v-main class="d-flex justify-center align-center" id="bg">
    <v-col cols="10" lg="4" class="mx-auto">
      <v-card class="pa-4">
        <div class="text-center">
          <v-avatar size="100" color="indigo lighten-4">
            <v-icon size="40" color="indigo">mdi-account</v-icon>
          </v-avatar>
          <h2 class="indigo--text">LOGIN</h2>
        </div>
        <v-form @submit.prevent="login">
          <v-card-text>
            <v-text-field v-model="username" label="username" type="email" prepend-icon="mdi-account-circle" :rules="emailRules"/>
            <v-text-field v-model="password" label="Password" 
            :type="showPassword ? 'text' : 'password'"  
            prepend-icon="mdi-lock" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword" :rules="passwordRules"/>
          </v-card-text>
          <v-switch v-model="rememberMe" label="Remember me" color="indigo"></v-switch>
          <v-card-actions class="justify-center">
            <v-btn type="submit" color="indigo">
              <span class="white--text px-8">LOGIN</span>
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-card v-if="isLoggedIn">
          <router-link to="/welcome-user">
            <v-card-title>Welcome {{username}}</v-card-title>
          </router-link>
          <v-card-text>You are logged in!</v-card-text>
        </v-card>
      </v-card>
    </v-col>
   </v-main>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    loading:false,
    snackbar:false,
    passwordShow:false,
    username: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      //v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      v => /^[a-zA-Z0-9._\s]+$/.test(v) || 'Username must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be 8  characters or more!',
    ],
    showPassword: false,
    rememberMe: false,
    isLoggedIn: false
  }),
  methods: {
    login() {
      if (this.username === 'username' && this.password === 'password') {
        this.isLoggedIn = true;
        this.$router.push('/welcome-user');
      } else {
        alert('Invalid username or password');
      }
    }
  }
};
</script>

<style>

</style>
