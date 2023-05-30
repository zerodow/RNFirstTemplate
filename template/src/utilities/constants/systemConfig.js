import Config from 'react-native-config';
export const {BASE_URL, ENV} = Config;

const AxiosConfig = {
  API_TIMEOUT: 60000,
  BASE_URL,
  REQUEST_STATUS_CODE: {
    RESPONSE_SUCCESS: 1,
    EXPIRED_SESSION: -1,
    UNKNOWN_ERROR: 600,
    INTERNET_ERROR: 601,
    CONFIG_ERROR: 1001,
    HANDLE_ERROR: 1000,
    CANCEL_REQUEST_ERROR: 1002,
    UNAUTHORIZED: 401,
  },
};

export {AxiosConfig};
