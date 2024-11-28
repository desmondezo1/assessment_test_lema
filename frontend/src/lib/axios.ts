import Axios from "axios";

export const API_BASE_URL: string =
  process.env.BACKEND_API || process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api/v1"
    : "https://assessment-test-lema.onrender.com/api/v1";

const axios = Axios.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
    }
    return err.response;
  }
);

export interface Response {
  success: boolean;
  data?: unknown;
  message?: string;
  statusCode: number;
}

export const GET = async (path: string, params = {}): Promise<Response> => {
  const res = await axios.get(path, params);

  return { ...res?.data, status: res?.status };
};

export const POST = async (
  path: string,
  body = {},
  params = {}
): Promise<Response> => {
  const res = await axios.post(path, body, params);

  return { ...res?.data, status: res?.status };
};

export const DELETE = async (path: string): Promise<Response> => {
  const res = await axios.delete(path);
  return { ...res?.data, status: res?.status };
};

export const PUT = async (
  path: string,
  body = {},
  params = {}
): Promise<Response> => {
  const res = await axios.put(path, body, params);
  return { ...res?.data, status: res?.status };
};
