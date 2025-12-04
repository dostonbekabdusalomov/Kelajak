<template>
  <section class="about-section" id="about">
    <div class="container">
      <h2 class="title">Kelajak nima?</h2>
      <p class="subtitle">
        Kelajak — zamonaviy texnologiyalarni qo‘llab-quvvatlovchi, yoshlar uchun
        imkoniyatlar yaratuvchi innovatsion platforma.
      </p>

      <div class="about-grid">
        <div class="about-card">
          <div class="icon mission"></div>
          <h3>Missiya</h3>
          <p>
            Yangi texnologiyalarni o‘rganish va rivojlantirish uchun kuchli
            ekotizim yaratish.
          </p>
        </div>

        <div class="about-card">
          <div class="icon vision"></div>
          <h3>Vizyon</h3>
          <p>
            Markaziy Osiyoda innovatsion ta’lim va texnologiyalar bo‘yicha
            etakchi platforma bo‘lish.
          </p>
        </div>

        <div class="about-card">
          <div class="icon values"></div>
          <h3>Qadriyatlar</h3>
          <p>
            Ochiqlik, hamkorlik, yangilikka intilish va kelajakni birga qurish.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.about-section {
  padding: 80px 20px;
  text-align: center;

  .title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .subtitle {
    max-width: 700px;
    margin: 0 auto 40px;
    font-size: 16px;
    color: #555;
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .about-card {
    padding: 25px;
    border-radius: 12px;
    background: #f5f5f5;
    transition: 0.2s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    }

    .icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 12px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .mission {
      background-image: url('https://img.icons8.com/ios-filled/50/0052cc/rocket.png');
    }

    .vision {
      background-image: url('https://img.icons8.com/ios-filled/50/0052cc/eye.png');
    }

    .values {
      background-image: url('https://img.icons8.com/ios-filled/50/0052cc/handshake.png');
    }

    h3 {
      font-size: 20px;
      margin-bottom: 8px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
