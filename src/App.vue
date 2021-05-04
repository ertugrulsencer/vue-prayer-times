<template>
  <div class="wrapper">
    <AppHeader />
    <div class="container">
      <TimeCards />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import TimeCards from "./components/TimeCards";
export default {
  name: "app",
  components: {
    AppHeader: Header,
    TimeCards,
    Footer,
  },
  created() {
    this.$store.dispatch("prayerTimes", "istanbul");
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_app.scss";
</style>
