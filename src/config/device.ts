import { IDevice } from '@core/interfaces/config/IDevice';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const getDevice = (): IDevice => {
  const so = Platform.OS === 'ios' ? 'iOS' : Platform.OS.toUpperCase();
  const dispositivo = DeviceInfo.getDeviceId();
  const appVersao = DeviceInfo.getVersion();
  const deviceId = DeviceInfo.getUniqueId();
  const soVersao = `${Platform.Version}`;

  return { so, dispositivo, appVersao, deviceId, soVersao };
};

export const device = getDevice();
