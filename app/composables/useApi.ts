import { UseFetchOptions } from "nuxt/app";

export const useApi = () => {
  const config = useRuntimeConfig();

  const fetchData = async <T>(
    endpoint: string,
    options: UseFetchOptions<T> = {}
  ) => {
    const { data, error } = await useFetch<T>(
      `${config.public.apiBase}${endpoint}`,
      {
        ...options,
      }
    );

    if (error.value) {
      console.error("API request failed:", error.value);
      throw error.value;
    }

    return data.value;
  };

  return {
    fetchData,
  };
};
