const BASE_URL = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/api`;

export async function fetchBestHerbs(token = null) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}/bestherbs`, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengambil daftar herb");
    }

    return result.data;
  } catch (error) {
    return [];
  }
}


export async function fetchHerbById(id) {
  const response = await fetch(`${BASE_URL}/herbs/${id}`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal mengambil detail herb");
  }

  return result.data;
}

export async function addHerb(payload) {
  const response = await fetch(`${BASE_URL}/herbs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal menambahkan herb");
  }

  return result.data;
}

export async function updateHerb(id, payload) {
  const response = await fetch(`${BASE_URL}/herbs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal memperbarui herb");
  }

  return result.data;
}

export async function deleteHerb(id) {
  const response = await fetch(`${BASE_URL}/herbs/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal menghapus herb");
  }

  return result.message;
}

export async function likeHerb(herbId, token, imageUrl) {

  const response = await fetch(`${BASE_URL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ herbId, imageUrl }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal menambahkan like");
  }

  return result.message;
}

export async function unlikeHerb(herbId, token) {

  const response = await fetch(`${BASE_URL}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ herbId }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal menghapus like");
  }

  return result.message;
}

export async function getLikedHerbs(token) {
  const response = await fetch(`${BASE_URL}/likes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal mengambil data like");
  }

  return result.data;
}

export async function getHistoryPredictHerbs(token) {
  const response = await fetch(`${BASE_URL}/predict-history`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal mengambil data like");
  }

  return result.data;
}

export async function savePredictHistory({ token, name, confidence, imageBlob }) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("confidence", confidence);
  formData.append("image", imageBlob, `${Date.now()}-${name.replace(/\s/g, "_")}.jpg`);

  const response = await fetch(`${BASE_URL}/predict-history`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Gagal menyimpan riwayat prediksi");
  }

  return result.data;
}
