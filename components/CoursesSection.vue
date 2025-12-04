<template>
  <section class="section" id="courses">
    <div class="container">
      <h2 class="title">Featured Courses</h2>

      <div class="courses-grid">
        <div v-for="course in courses" :key="course.id" class="course-card">
          <img :src="course.image" :alt="course.title" />

          <div class="card-content">
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>

            <div class="card-footer">
              <span class="price">{{ course.price }}</span>
              <button class="btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = ref([
  {
    id: 1,
    title: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, Vue 3 & Nuxt 4',
    price: 'Free',
    image: 'https://picsum.photos/400/250?1'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB & APIs',
    price: '$49',
    image: 'https://picsum.photos/400/250?2'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Flutter & React Native',
    price: '$59',
    image: 'https://picsum.photos/400/250?3'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Python, Tensorflow, AI models',
    price: '$99',
    image: 'https://picsum.photos/400/250?4'
  }
])
</script>

<style scoped>
.section {
  padding: 80px 0;
  background: #f9f9f9;
}

.title {
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.course-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
}

.course-card:hover {
  transform: translateY(-8px);
}

.course-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card-content p {
  color: #555;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  color: #111;
}

.btn {
  padding: 8px 16px;
  background: #111;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #333;
}
</style>
