import { AxiosResponse } from "axios";
import httpClient, { nonAuthHttpClient } from "./http";
import { IResponse } from "../types";

class CommonService {
  static getAll<T>(
    endpoint: string,
    params?: unknown
  ): Promise<AxiosResponse<IResponse<T[]>>> {
    return httpClient.get(`/${endpoint}`, { params });
  }

  static get<T>(
    endpoint: string,
    params?: unknown
  ): Promise<AxiosResponse<IResponse<T>>> {
    return httpClient.get(`/${endpoint}`, { params });
  }

  static getById<T>(
    endpoint: string,
    id: string
  ): Promise<AxiosResponse<IResponse<T>>> {
    return httpClient.get(`/${endpoint}/${id}`);
  }

  static post<D, R>(
    endpoint: string,
    data?: D
  ): Promise<AxiosResponse<IResponse<R>>> {
    return httpClient.post(`/${endpoint}`, data);
  }

  static put<D, R>(
    endpoint: string,
    data?: D
  ): Promise<AxiosResponse<IResponse<R>>> {
    return httpClient.put(`/${endpoint}`, data);
  }

  static update<D, R>(
    endpoint: string,
    data: D
  ): Promise<AxiosResponse<IResponse<R>>> {
    return httpClient.patch(`/${endpoint}`, data);
  }

  static updateById<D, R>(
    endpoint: string,
    data: D,
    id: number | string
  ): Promise<AxiosResponse<IResponse<R>>> {
    return httpClient.patch(`/${endpoint}/${id}`, data);
  }


  static delete<T>(
    endpoint: string,
    id: number | string
  ): Promise<AxiosResponse<IResponse<T>>> {
    return httpClient.delete(`/${endpoint}/${id}`);
  }

  static deleteAll<T>(endpoint: string): Promise<AxiosResponse<IResponse<T>>> {
    return httpClient.delete(`/${endpoint}`);
  }
}

export class NonAuthService {
  static get<T>(
    endpoint: string,
    params?: unknown
  ): Promise<AxiosResponse<IResponse<T>>> {
    return nonAuthHttpClient.get(`/${endpoint}`, { params });
  }

  static getById<T>(
    endpoint: string,
    id: string
  ): Promise<AxiosResponse<IResponse<T>>> {
    return nonAuthHttpClient.get(`/${endpoint}/${id}`);
  }

  static post<D, R>(
    endpoint: string,
    data?: D
  ): Promise<AxiosResponse<IResponse<R>>> {
    return nonAuthHttpClient.post(`/${endpoint}`, data);
  }

  static update<D, R>(
    endpoint: string,
    data: D,
    id: number | string
  ): Promise<AxiosResponse<IResponse<R>>> {
    return nonAuthHttpClient.patch(`/${endpoint}/${id}`, data);
  }

  static delete<T>(
    endpoint: string,
    id: number | string
  ): Promise<AxiosResponse<IResponse<T>>> {
    return nonAuthHttpClient.delete(`/${endpoint}/${id}`);
  }

  static deleteAll<T>(endpoint: string): Promise<AxiosResponse<IResponse<T>>> {
    return nonAuthHttpClient.delete(`/${endpoint}`);
  }
}

export default CommonService;
