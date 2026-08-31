import DeviceInfo from 'react-native-device-info';

export const getDeviceModel = (): string => {
  return DeviceInfo.getModel();
};

export const getOSVersion = (): string => {
  return `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`;
};

export const getAppVersion = (): string => {
  return DeviceInfo.getVersion();
};

export const getBuildNumber = (): string => {
  return DeviceInfo.getBuildNumber();
};