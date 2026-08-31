import {
  PERMISSIONS,
  request,
  RESULTS,
  PermissionStatus,
} from 'react-native-permissions';

export const requestCameraPermission =
  async (): Promise<PermissionStatus> => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);

    return result;
  };