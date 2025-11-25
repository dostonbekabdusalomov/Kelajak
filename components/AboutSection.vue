<template>
  <section class="about-section">
    <div class="container">
      <h2 class="title">Kelajak nima?</h2>
      <p class="subtitle">
        Kelajak — zamonaviy texnologiyalarni qo‘llab-quvvatlovchi, yoshlar uchun
        imkoniyatlar yaratuvchi innovatsion platforma.
      </p>

      <div class="about-grid">
        <!-- Mission -->
        <div class="about-card" v-motion-fade>
          <div class="icon mission"></div>
          <h3>Missiya</h3>
          <p>
            Yangi texnologiyalarni o‘rganish va rivojlantirish uchun kuchli
            ekotizim yaratish.
          </p>
        </div>

        <!-- Vision -->
        <div class="about-card" v-motion-fade>
          <div class="icon vision"></div>
          <h3>Vizyon</h3>
          <p>
            Markaziy Osiyoda innovatsion ta’lim va texnologiyalar bo‘yicha
            etakchi platforma bo‘lish.
          </p>
        </div>

        <!-- Values -->
        <div class="about-card" v-motion-fade>
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

<script setup>
// v-motion ishlashi uchun
// npm install @vueuse/motion
</script>

<style scoped lang="scss">
.about-section {
  padding: 100px 0;

  .title {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }

  .subtitle {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
    font-size: 18px;
    opacity: 0.7;
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .about-card {
    padding: 35px;
    border-radius: 20px;
    background: var(--card-bg, #f7f7f7);
    transition: 0.3s;
    text-align: center;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    h3 {
      margin: 15px 0 10px;
      font-size: 24px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      opacity: 0.7;
    }

    .icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 10px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .mission {
    //   background-image: url('/icons/mission.svg');
    }
    .vision {
    //   background-image: url('/icons/vision.svg');
    }
    .values {
    //   background-image: url('/icons/values.svg');
    }
  }
}
</style>
