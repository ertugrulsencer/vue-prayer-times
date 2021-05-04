<template>
  <footer class="footer">
    <div class="container">
      <p>
        Veriler Diyanet İşlerinden çalıntı, istediğiniz gibi kullanabilirsiniz
        &#128522;
      </p>
      <div class="hr"></div>
      <p>Yazılım ve tasarım: <strong>Ertuğrul Sencer UZUN</strong> &#128076;</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: auto;
  color: #f8f8f8;
  text-align: center;
  padding: 14px 0;
  background: var(--primary);
}
p:first-child {
  line-height: 150%;
}
@media screen and (max-width: 420px) {
  p {
    font-size: 0.9rem;
  }
  .hr {
    border-radius: 3px;
    height: 3px;
    width: 100%;
    background: rgba(#f8f8f8, 0.25);
    margin: 14px 0;
  }
}
</style>
