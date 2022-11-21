<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="main-wrap">
        <div class="container pt-0 fill-height">
          <div class="row full-height justify-center">
            <div class="full-height col-xl-8 col-12">
              <router-view></router-view> 
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #121212
}

.main {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: .2s cubic-bezier(.4,0,.2,1);
  margin-top: 64px;

  &-wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
  }
}

.justify-center {
  justify-content: center;
}
</style>
