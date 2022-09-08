import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create();

const setupInterceptors = () => {
	axiosInstance.interceptors.request.use(
		(config: AxiosRequestConfig<any>) => {
			return config;
		},
		(error) => Promise.reject(error)
	);

	axiosInstance.interceptors.response.use(
		(response) => Promise.resolve(response),
		(error) => {
			return Promise.reject(error);
		}
	);
}

export const sendGetRequest = (url: string) => axiosInstance.get(url);

export default setupInterceptors;
