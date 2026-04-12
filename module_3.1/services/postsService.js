const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Вспомогательная функция для обработки ответа.
 * Избавляет от необходимости писать if(!res.ok) в каждой функции.
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
  }
  return await response.json();
};

/**
 * Получить список всех постов
 * @returns {Promise<Array>}
 */
export const fetchPosts = async () => {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
};

/**
 * Получить один пост по его ID
 * @param {number|string} id 
 * @returns {Promise<Object>}
 */
export const fetchPostById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(response);
};

/**
 * Создать новый пост
 * @param {Object} postData - Данные поста (title, body, userId)
 * @returns {Promise<Object>}
 */
export const createPost = async (postData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  });
  return handleResponse(response);
};

/**
 * Частичное обновление поста (PATCH)
 * @param {number|string} id 
 * @param {Object} updateData - Обновляемые поля
 * @returns {Promise<Object>}
 */
export const updatePost = async (id, updateData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
  });
  return handleResponse(response);
};