// lib/api.ts
const BASE_URL = "http://localhost:8000";

export const login = async (email: string, password: string) => {
  let error = null;

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(async (res) => {
      if (!res.ok) throw await res.json();
      return res.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      error = err.detail;

      console.error(err);
      return null;
    });

  if (error) {
    throw error;
  }

  return res;
};
