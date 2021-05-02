<template>
  <tr>
    <td>{{ time }}</td>
    <td>
      <i class="far fa-clock"></i>
      {{ value }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    time: String,
    value: String,
  },
};
</script>

<style lang="scss">
td {
  color: #363636;
  font-weight: 700 !important;
  i {
    color: inherit;
    margin-right: 8px;
  }
}
</style>
