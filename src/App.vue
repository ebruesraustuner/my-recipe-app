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
        <!-- <router-link to="/variables">Using Variables</router-link> -->
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
      <div class="sections">
        <div class="section one">
          <router-link to="/recipes">Recipes</router-link>
          <router-link to="/recommendcook">What Should I Cook</router-link>
          <router-link to="/tricks">Tricks</router-link>
          <router-link to="/blog">Blog</router-link>

        </div>
        <div class="section two">
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="section three socialmedias">

          <a type="button" href="https://github.com/ebruesraustuner" target="_blank">
            <img :src="require('./assets/GitHub-Mark-32px.png')" alt="GitHub" width="32px">
          </a>
          <a type="button" href="https://dribbble.com/ebruesra" target="_blank">
            <img :src="require('./assets/dribbble-ball-mark.png')" width="32px" alt="Dribbble">
          </a>
          <a type="button" href="https://codepen.io/lovelyalchemist" target="_blank">
            <img :src="require('./assets/Button-Black-Large.png')" width="32px" alt="CodePen">
          </a>
          <a type="button" href="https://www.linkedin.com/in/ebru-%C3%BCst%C3%BCner-019aa297/" target="_blank">
            <img :src="require('./assets/LI-In-Bug.png')" width="32px" alt="LinkedIn">
          </a>
        </div>
      </div>
      <div class="last">
        <p>Made with &hearts;</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  body,
  html {
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
    flex-wrap: wrap;

    .sections {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 24px;

      .section {
        flex: 1;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        a {
          text-decoration: none;
          color: $brown;
          font-size: 18px;
          padding: 4px 0;
        }
      }
      .socialmedias{
          flex-direction: row;
          img {
            padding:0 8px ;
            filter: grayscale(100%);
          }
        }
      
    }
    .last {
      display: flex;
        flex: 1 1;
        width: 100%;
        justify-content: center;
        align-self: center;
        align-content: center;
        p {
          color: $brown
        }
      }
  }
</style>