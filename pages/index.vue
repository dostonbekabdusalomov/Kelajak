<template>
  <div>
    <Header />
    <Hero />
    <AboutSection />

    <section class="container">
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

      <section id="courses">
        <h2>Featured Courses</h2>
      </section>

      <section>
        <h2>How it works</h2>
        <ol>
          <li>Learn — join courses</li>
          <li>Build — hands-on projects</li>
          <li>Launch — job placement & startups</li>
        </ol>
      </section>
    </section>

    <footer class="footer container">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>
          <strong>Kelajak</strong>
          <p>Kelajakni bugun quramiz</p>
        </div>
        <div>
          <p>Contact: hello@kelajak.uz</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
</script>
