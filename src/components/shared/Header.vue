<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <i class="icon fas fa-mosque"></i>
        Namaz Vakitleri
      </div>
      <div class="search">
        <input v-model.trim="city" type="text" placeholder="Şehir Arayın" />
        <button @click="getList">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      city: null,
    };
  },
  methods: {
    getList() {
      this.$store.dispatch("prayerTimes", this.city.toString().toLowerCase());
    },
  },
  computed: {
    times() {
      return this.$store.getters.times;
    },
  },
};
</script>

<style lang="scss">
header.header {
  background: #ffffff;
  border-bottom: 3px solid var(--primary);
  color: #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 700;
      font-size: 1.1rem;
      .icon {
        margin-right: 14px;
        color: var(--primary);
      }
    }
    .search {
      position: relative;
      border-radius: 28px;
      width: 220px;
      height: 38px;
      border: 2px solid var(--primary);
      overflow: hidden;
      input {
        padding: 0 32px 0 16px;
        width: 100%;
        height: 100%;
        font-weight: 700;
        font-size: 0.85rem;
        color: var(--primary);
      }
      button {
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        background: var(--primary);
        font-size: 0.75rem;
        color: #e8e8e8;
        opacity: 0.75;
        cursor: pointer;
        transition: all 250ms ease-in-out;
        &:hover {
          opacity: 0.9;
          background: var(--primary);
          color: #f8f8f8;
        }
      }
    }
  }
}
</style>
