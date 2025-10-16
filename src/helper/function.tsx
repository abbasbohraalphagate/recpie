import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { appDispatch } from '../component/Redux/App/Store';
import { setExpire } from '../component/Redux/Feature/Authentication';
import { apiURL } from './baseUrl';
import ImageCropPicker from 'react-native-image-crop-picker';
export const httpRequestPost = async (
  endpoint: string | string[],
  params: any,
  token: any,
  onMultiPart: any,
  changesMethod: any,
) => {
  // const {setLogOut} = useApp();
  const serverResponse = {
    status: false,
    data: [],
    error: '',
    message: '',
    statusCode: 200,
  };

  try {
    const { data } = await axios({
      method: changesMethod ?? 'post',
      url: apiURL(endpoint),
      data: params,
      headers: {
        accept: 'application/json',
        'Content-Type': onMultiPart
          ? 'multipart/form-data'
          : 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    serverResponse.status = true;
    serverResponse.data = await data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      const errorsObj = error?.response?.data?.errors;

      // Convert object of arrays into single string
      let errorMessages: string[] = [];
      if (errorsObj) {
        Object.keys(errorsObj).forEach((key, i) => {
          if (Array.isArray(errorsObj[key])) {
            errorsObj[key].forEach(msg => {
              errorMessages.push(`${i + 1}. ${msg}`);
            });
          } else {
            errorMessages.push(`${i + 1}. ${errorsObj[key]}`);
          }
        });
      }
      console.log(errorMessages);
      serverResponse.statusCode = error?.response?.status ?? 500;
      serverResponse.message =
        errorMessages.length > 0
          ? errorMessages.join('\n')
          : error?.response?.data?.message ??
            error?.response?.data?.error ??
            'API ERROR';
    }
  }
  return serverResponse;
};

export const getData = async (
  endpoint: string | string[],
  params = {},
  token: any,
  onMultiPart: any,
) => {
  const serverResponse = { status: false, data: [], error: '' };
  try {
    const { data } = await axios({
      method: 'get',
      url: apiURL(endpoint),
      params,
      headers: {
        accept: 'application/json',
        'Content-Type': onMultiPart
          ? 'multipart/form-data'
          : 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    serverResponse.status = true;
    serverResponse.data = await data;
  } catch (error: any) {
    console.log(error);

    if (error?.response?.status === 401) {
      appDispatch(setExpire(true));
    }
    if (error instanceof AxiosError) {
      serverResponse.statusCode = error?.response?.status ?? 500;
      serverResponse.message =
        error?.response?.data?.error ??
        error?.response?.data?.message ??
        'API ERROR';
    }
  }
  return serverResponse;
};

export const fetchData = async (
  endpoint: string | string[],
  params: any,
  token: any,
  changeMethod: string | undefined,
  onMultiPart: undefined,
) => {
  // const {setLogOut} = useApp();
  const serverResponse = {
    status: false,
    data: [],
    error: '',
    message: '',
    statusCode: 200,
  };

  try {
    const axiosConfig = {
      method: changeMethod ?? 'get',
      url: apiURL(endpoint),
      data: changeMethod === 'get' ? { ...params } : params,
    };

    if (changeMethod === undefined) {
      delete axiosConfig.data;
    }

    const { data } = await axios({
      ...axiosConfig,
      headers: {
        accept: 'application/json',
        'Content-Type': onMultiPart
          ? 'multipart/form-data'
          : 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    serverResponse.status = true;
    serverResponse.data = await data;
  } catch (error: any) {
    console.log(error);

    if (error?.response?.status === 401) {
      appDispatch(setExpire(true));
    }
    if (error instanceof AxiosError) {
      serverResponse.statusCode = error?.response?.status ?? 500;
      serverResponse.message =
        error?.response?.data?.error ??
        error?.response?.data?.message ??
        'API ERROR';
    }
  }
  return serverResponse;
};

export const useData = (
  endpoint: string | string[],
  params: any,
  token: any,
  changeMethod: string | undefined,
  onMultiPart: undefined,
) =>
  useQuery(['data', endpoint, params, token, changeMethod, onMultiPart], () =>
    fetchData(endpoint, params, token, changeMethod, onMultiPart),
  );

export const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getImage = async (
  setValue,
  stateName,
  setVisible,
  normalState,
) => {
  try {
    const image = await ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      multiple: false,
      mediaType: 'photo',
      compressImageQuality: 0.1,
    });
    if (normalState) {
      setValue(image);
    } else {
      setValue(stateName, image, {
        shouldValidate: true,
      });
    }
    if (setVisible) {
      setVisible(false);
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const endpoints = {
  LOGOUT: '/app/logout',
  SEND_CODE: '/app/send-code',
  VERIFY_CODE: '/app/verify-code',
  REGISTER_ACCOUNT: '/app/register',
  GET_COUNTRY: '/app/location/hi/countries',
  GET_STATE: '/app/location/hi/states/',
  GET_DISTRICT: '/app/location/hi/districts/',
  GET_CITY: '/app/location/hi/cities/',
  GET_LANGUAGE: '/app/languages',
  GET_PROFILE: '/app/me',
  UPDATE_PROFILE: '/app/update-profile',
  GET_PRAYER: '/app/location/hi/prayer',
  GET_WORSHIP: '/app/location/hi/worship-procedures',
  GET_PILGRIMAGE: '/app/location/hi/pilgrimage',
  GET_SCRIPTURE: '/app/location/hi/scripture',
  GET_CHANTING: '/app/location/hi/chanting',
  GET_SANSKAR: '/app/location/hi/sanskar',
  GET_LIVE_VIDEOS: '/app/location/hi/live-videos',
  SAVE_CHANTING: '/app/location/hi/user-chanting',
  PANCHANG_CALENDAR: '/app/location/hi/panchang-calandar',
  GET_GOAL: '/app/location/hi/goal',
  SAVE_GOAL: '/app/location/hi/user_goal',
  UPDATE_MOBILE_NUMBER: '/app/location/hi/update-phone-number',
};
function getDate18YearsAgo() {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today?.getFullYear() - 18,
    today?.getMonth(),
    today?.getDate(),
  );
  return eighteenYearsAgo;
}

// Example usage
export const date18YearsAgo = getDate18YearsAgo();
