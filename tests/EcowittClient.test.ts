import { EcowittClient, Url } from '../src';
import mockAxios from './__mocks__/axios';
import { responseMock } from './mocks/responseMock';

describe('EcowittClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should parse soil moisture sensor data', async () => {
    // given
    const response = responseMock[Url.GET_LIVEDATA_INFO];
    mockApiResponse(response);

    const client = new EcowittClient('http://any');

    // when
    const sensors = await client.getSensors();

    // then
    expect(mockAxios.get).toHaveBeenCalledWith(Url.GET_LIVEDATA_INFO);
    expect(sensors).toHaveLength(response.ch_soil.length);
  });

  const mockApiResponse = (data: Object) => {
    // @ts-ignore
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));
  };
});
