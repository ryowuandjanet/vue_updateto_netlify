<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png"/>
      <h1><router-link :to="{ name: 'Home' }">首頁</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }">新增評量表</router-link>
          <router-link :to="{ name: 'UserPlaylists' }">個人清單</router-link>
          <span>目前登入者：{{ user.displayName }}</span>
          <button @click="handleClick">登出</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">註冊</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">登錄</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// challenge
//   - only show the logout button if we are logged in
//   - only show the signup and login links if we are not logged in
//   - use the getUser composable to help

import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('logged out')
      router.push({ name: 'Login' })
    }

    return { handleClick, user }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>