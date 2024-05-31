import {PERMISSIONS, Rationale} from 'react-native-permissions';
import {appConfig} from '@app/app.config';
import {checkRequestPermission} from './permission.base';
import {Alert} from 'react-native';

const cameraPermission = appConfig.device.isAndroid
  ? PERMISSIONS.ANDROID.CAMERA
  : PERMISSIONS.IOS.CAMERA;

export const requestCameraPerm = async () => {
  const rationale: Rationale = {
    title: 'Cho phép ứng dụng chụp ảnh và quay video',
    message:
      'Ứng dụng cần sử dụng quyền Camera để chụp ảnh. Hình ảnh sẽ được tải lên hệ thống và chúng tôi cần sự cho phép của bạn để tiếp tục.',
    buttonNegative: 'Từ chối',
    buttonPositive: 'Cho phép',
  };

  return checkRequestPermission(cameraPermission, rationale)
    .then((result) => result)
    .catch((err) => {
      Alert.alert('Cant use to Camera', err);
    });
};
