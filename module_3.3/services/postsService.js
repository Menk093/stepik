const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Ошибка загрузки постов');
  return res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Пост не найден');
  return res.json();
}

export async function createPost(postData) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  });

  if (!res.ok) throw new Error('Ошибка создания поста');
  return res.json();
}

export async function updatePost(id, updateData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
  });

  if (!res.ok) throw new Error('Ошибка обновления поста');
  return res.json();
}