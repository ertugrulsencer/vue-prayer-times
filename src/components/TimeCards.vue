<template>
  <section class="cards">
    <header class="card-header">
      <h3 v-if="times && times.length > 0">
        &#11088; <span>{{ city }}</span> için namaz vakitleri
      </h3>
      <h3 v-else>
        &#128565; <span>{{ city }}</span> namaz vakti bulunamadı
      </h3>
      <div class="buttons">
        <button
          @click="share"
          v-if="times && times.length > 0"
          class="share-button"
        >
          <i class="fas fa-share icon"></i>
          Paylaş
        </button>
        <a
          target="_blenk"
          :href="`https://wa.me?text=${times_text}`"
          v-if="times && times.length > 0"
          class="wp-button"
        >
          <i class="fas fa-share icon"></i>
          WhatsApp ile Paylaş
        </a>
      </div>
    </header>
    <table v-if="times && times.length > 0">
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
      Bu şehire ait namaz vakti bulunamadı &#128533; lütfen şehir'i değiştirip
      tekrar deneyiniz.
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
        text: this.times_text,
      });
    },
  },
  computed: mapGetters(["times", "city", "times_text"]),
};
</script>

<style lang="scss">
@media screen and (max-width: 420px) {
  .card-header {
    margin-bottom: 0 !important;
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      width: 100%;
      .wp-button {
        display: inline-block !important;
        cursor: pointer;
        padding: 8px 14px;
        background: rgba(#13af48, 0.8);
        border-radius: 28px;
        color: #f8f8f8;
        font-weight: 600;
        font-size: 0.9rem;
        border: 2px solid #13af48;
        transition: all 300ms ease-in-out;
        &:hover {
          background: rgba(#13af48, 0.65);
        }
        .icon {
          margin-right: 6px;
        }
      }
    }
  }
}
.card-header {
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  .wp-button {
    display: none;
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
