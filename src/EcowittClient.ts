import axios, { type AxiosInstance } from 'axios';

import { SoilMoistureSensor, SoilMoistureSensorSchema } from './types';

interface Response {
  ch_soil: SoilMoistureSensor[];
}

export enum Url {
  GET_LIVEDATA_INFO = '/get_livedata_info',
}

class EcowittClient {
  constructor(baseURL: string) {
    this.api = axios.create({
      timeout: 5000,
      baseURL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
  }

  private api: AxiosInstance;

  public async getSensors(): Promise<SoilMoistureSensor[]> {
    const response = await this.api.get<Response>(Url.GET_LIVEDATA_INFO);
    return response.data.ch_soil.map((sensor) => SoilMoistureSensorSchema.parse(sensor));
  }
}

export { EcowittClient };
export type { SoilMoistureSensor };
