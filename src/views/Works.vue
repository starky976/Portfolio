<template>
  <section>
    <h2 class="text-2xl font-bold mb-6 text-center">My Works</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <WorksCard
        v-for="(work, index) in works"
        :key="index"
        :title="work.title"
        :description="work.description"
        :image="work.image"
        :link="work.link"
      />
    </div>
  </section>
</template>

<script setup>
import WorksCard from '../components/WorksCard.vue'

const works = [
  { title: 'Portfolio Website', description: 'Vue + Tailwindで作成', image: '/assets/work1.jpg', link: '#' },
  { title: 'Landing Page', description: 'レスポンシブLP', image: '/assets/work2.jpg', link: '#' },
  { title: 'Dashboard UI', description: '管理画面デザイン', image: '/assets/work3.jpg', link: '#' }
]
</script>