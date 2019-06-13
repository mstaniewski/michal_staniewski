import qs from "utils/query-string";

const API_URL = process.env.REACT_APP_API_URL;

export default {
  get: (endpoint, params = {}) =>
    new Promise((resolve, reject) => {
      fetch(`${API_URL}${endpoint}${qs(params)}`)
        .then(async res => {
          const data = await res.json();
          const headers = res.headers;
          return { data, headers };
        })
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    }),
  post: (endpoint, data = {}, params) =>
    new Promise((resolve, reject) => {
      fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    }),
  delete: (endpoint, param) =>
    new Promise((resolve, reject) => {
      fetch(`${API_URL}${endpoint}/${param}`, { method: "DELETE" })
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    })
};
