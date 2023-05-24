export const Utils = {
  API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api"
      : "https://rentme-mwun.onrender.com/api",
};

export default Utils;
