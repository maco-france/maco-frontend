import axios from "axios";

function fetcherFactory({
  responseErrorInterceptor = (error) => Promise.reject(error),
} = {}) {
  const fetcher = axios.create({
    baseURL: `${process.env.API_URL}`,
  });
  fetcher.interceptors.request.use((config) => {
    config.headers.common["Accept-Language"] = "FR-fr";
    if (config.url) {
      Object.entries(config.pathParams || {}).forEach(([k, v]) => {
        config.url = config.url.replace(`:${k}`, encodeURIComponent(v));
      });
    }
    console.log(`${config.method.toUpperCase()} ${config.url}`);
    return config;
  }, responseErrorInterceptor);
  fetcher.interceptors.response.use((response) => {
    return response;
  }, responseErrorInterceptor);
  return fetcher;
}

const fetcher = fetcherFactory({
  responseErrorInterceptor: (error) => {
    return Promise.reject(error.name);
  },
});

export default fetcher;
