export const API_URL = "http://localhost:5000/api";

export const apiRequest = async (endpoint, method = "GET", body = null) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
