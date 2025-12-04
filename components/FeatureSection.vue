<template>
  <section class="section feature-section">
    <div class="container">
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Kelajak Academy</h3>
          <p>
            Bootcamplar, kurslar va sertifikatlar — boshlang'ichdan
            professionallikka.
          </p>
        </div>
        <div class="feature-card">
          <h3>Kelajak Labs</h3>
          <p>Startaplar uchun mentorlik va MVP ishlab chiqish.</p>
        </div>
        <div class="feature-card">
          <h3>Kelajak Tech</h3>
          <p>Korporativ yechimlar va outsourcing xizmatlari.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hozircha hech qanday reactive data yoki props kerak emas
</script>

<style scoped>
.section {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.feature-card {
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #111;
}

.feature-card p {
  color: #555;
  font-size: 15px;
  line-height: 1.6;
}
</style>
