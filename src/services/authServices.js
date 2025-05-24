const BASE_URL = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/api`
export async function loginUser({ username, password }) {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || "Login gagal")
  }

  return result.data
}

export async function registerUser({ fullname, username, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullname, username, email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registrasi gagal");
  }

  return result.data;
}
