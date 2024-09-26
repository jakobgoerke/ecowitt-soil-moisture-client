import axios from 'axios';

const mockAxios = jest.createMockFromModule<typeof axios>('axios');
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
