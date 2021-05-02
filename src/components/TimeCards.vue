<template>
  <section class="cards">
    <header class="card-header">
      <h3 v-if="times.length > 0">
        <span>{{ city }}</span> için namaz vakitleri
      </h3>
      <h3 v-else>
        <span>{{ city }}</span> namaz vakti bulunamadı :(
      </h3>
      <button @click="share" v-if="times.length > 0" class="share-button">
        <i class="fas fa-share icon"></i>
        Paylaş
      </button>
    </header>
    <table v-if="times.length > 0">
      <thead>
        <tr class="header">
          <th>Vakit</th>
          <th>Saat</th>
        </tr>
      </thead>
      <tbody>
        <Card
          v-for="(time, index) in times"
          :key="index"
          :time="time.vakit"
          :value="time.saat"
        />
      </tbody>
    </table>
    <div v-else class="alert-danger">
      Bu ile ait namaz vakti bulunamadı, lütfen şehir'i değiştirip tekrar
      deneyiniz.
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import Card from "./Card";
export default {
  components: {
    Card,
  },
  methods: {
    share() {
      if (!navigator.share) {
        alert("Maalesef tarayıcınız bu özelliği desteklemiyor :(");
        return;
      }
      navigator.share({
        title: "Namaz Vakitleri",
        url: window.location.href,
      });
    },
  },
  computed: mapGetters(["times", "city"]),
};
</script>

<style lang="scss">
.alert-danger {
  margin-top: 24px;
  padding: 16px 24px;
  border-radius: 4px;
  color: #f8f8f8;
  background: #c00b;
  font-weight: 600;
}
.card-header {
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .share-button {
    cursor: pointer;
    padding: 8px 14px;
    background: rgba(var(--primary-rgb), 0.8);
    border-radius: 28px;
    color: #f8f8f8;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid var(--primary);
    transition: all 300ms ease-in-out;
    &:hover {
      background: rgba(var(--primary-rgb), 0.65);
    }
    .icon {
      margin-right: 6px;
    }
  }
}
h3 {
  span {
    color: var(--primary);
  }
}
table {
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  border: 2px solid #434343;
  th,
  td {
    padding: 12px 16px;
    border: 2px solid #434343;
  }
  th {
    font-weight: 800;
    color: var(--primary);
  }
  tr {
    &:nth-child(odd) {
      background: #e9e9e9;
    }
    &:nth-child(even) {
      background: #f1f1f1;
    }
    &.header {
      background: #f1f1f1;
    }
  }
}
</style>
