<template>
  <div class="wrapper">
    <AppHeader />
    <div class="container">
      <TimeCards />
    </div>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import TimeCards from "./components/TimeCards";
export default {
  name: "app",
  components: {
    AppHeader: Header,
    TimeCards,
  },
  created() {
    this.$store.dispatch("prayerTimes", "istanbul");
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_app.scss";
</style>
