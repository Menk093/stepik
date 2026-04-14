export async function fetchTopNews(country = "ru", category = "technology") {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Ошибка загрузки");
  }

  return await response.json();
}