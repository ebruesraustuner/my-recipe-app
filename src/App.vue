<template>
  <div id="app">
    <div class="myNavbar">
      <router-link to="/" class="logo">
        <p class="logo-text"> BestiesRecipes </p>
      </router-link>
      <div class="navbutton">
        <label for="navcheck">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="navcheck">
      <label class="navlinks">
        <router-link to="/variables">Using Variables</router-link>
        <router-link to="/recipes">Recipes</router-link>
        <router-link to="/recommendcook">What Should I Cook</router-link>
        <router-link to="/tricks">Tricks</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </label>
    </div>
    <router-view />
    <footer class="myFooter">
      <h6>Social Medias</h6>
      </footer>
  </div>
</template>

<style lang="scss">
  body, html {
    padding: 0;
    margin: 0;
  }
  #nav {
    padding: 30px;
  }
  footer {
    background-color: $beige;
    display: flex;
    align-self: flex-end;
    padding: 24px;
    h6 {
      text-decoration: underline;
    }
  }
</style>