const BASE_URL = 'api/predict';

export async function uploadToPredict({ file }) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Upload gambar gagal');
  }

  return result;
}
