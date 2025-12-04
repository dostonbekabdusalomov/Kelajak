<template>
  <section class="hero container">
    <div class="left">
      <h1>Kelajak — Kelajakni bugun quramiz</h1>
      <p>
        O‘zbekiston va Markaziy Osiyoda IT ta'limi, startap inkubatori va
        korporativ yechimlar.
      </p>
      <div class="hero-buttons">
        <a href="#courses" class="btn btn--primary">Get Started</a>
        <a href="#about" class="btn btn--ghost">View Courses</a>
      </div>
    </div>

    <div class="right">
      <div class="hero-image"></div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px;
  gap: 40px;
}

.left {
  flex: 1 1 500px;
}

.left h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
}

.left p {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.hero-buttons .btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.2s;
}

.hero-buttons .btn--primary {
  background-color: #0052cc;
  color: white;
}

.hero-buttons .btn--primary:hover {
  background-color: #003d99;
}

.hero-buttons .btn--ghost {
  background: none;
  border: 2px solid #0052cc;
  color: #0052cc;
}

.hero-buttons .btn--ghost:hover {
  background: #0052cc;
  color: white;
}

.right {
  flex: 1 1 420px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 420px;
  height: 280px;
  border-radius: 16px;
  background: linear-gradient(
      135deg,
      rgba(0, 82, 204, 0.7),
      rgba(0, 150, 255, 0.7)
    ),
    url('https://images.unsplash.com/photo-1581092335364-6d9f7f1eb833?auto=format&fit=crop&w=800&q=80')
      center/cover no-repeat;
}
</style>
