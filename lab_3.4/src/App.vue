<script setup>
import { reactive, onMounted } from 'vue';

// Импорт дочерних компонентов
import NewsCard from './components/NewsCard.vue';
import Loader from './components/Loader.vue';
import ErrorAlert from './components/ErrorAlert.vue';

// Инициализация реактивного состояния
const state = reactive({
  articles: [],
  isLoading: false,
  error: null
});

/**
 * Функция для получения новостей
 * Реализована внутри компонента для наглядности, 
 * но в будущем её стоит вынести в отдельный сервис.
 */
const fetchTopNews = async () => {
  state.isLoading = true;
  state.error = null;

  try {
    // Используем актуальный API или заглушку для примера
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    
    if (!response.ok) {
      throw new Error('Не удалось загрузить новости. Попробуйте позже.');
    }

    const data = await response.json();
    state.articles = data;
  } catch (err) {
    state.error = err.message || 'Произошла непредвиденная ошибка';
    console.error('Fetch error:', err);
  } finally {
    state.isLoading = false;
  }
};

// Вызов загрузки при монтировании компонента
onMounted(() => {
  fetchTopNews();
});
</script>

<template>
  <div class="app-container">
    <header>
      <h1>CodeHub News</h1>
    </header>

    <main>
      <Loader v-if="state.isLoading" />

      <ErrorAlert 
        v-else-if="state.error" 
        :message="state.error" 
        @retry="fetchTopNews" 
      />

      <div v-else class="news-grid">
        <NewsCard 
          v-for="article in state.articles" 
          :key="article.id" 
          :article="article" 
        />
      </div>

      <p v-if="!state.isLoading && !state.error && state.articles.length === 0">
        Новостей пока нет.
      </p>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

header {
  margin-bottom: 30px;
  text-align: center;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>