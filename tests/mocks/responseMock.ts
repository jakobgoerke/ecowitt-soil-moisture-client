import { Url } from '../../src/EcowittClient';
import getLiveData from './getLiveData.json';

export const responseMock = {
  [Url.GET_LIVEDATA_INFO]: getLiveData,
};
