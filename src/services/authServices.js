const BASE_URL = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/api/authentications`
export async function loginUser({ username, password }) {
  const response = await fetch(BASE_URL, {
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
