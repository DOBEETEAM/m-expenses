import {useCallback, useState} from 'react';
import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import {requestCameraPerm} from '@helpers/permissions';

export function useMediaPicker() {
  const [imagesResult, setImagesResult] = useState<Asset[] | undefined>();

  const handleOpenCamera = useCallback(async () => {
    try {
      const allowUseCameraCode = await requestCameraPerm();

      if (allowUseCameraCode === 'granted') {
        const result = await launchCamera({
          mediaType: 'photo',
          quality: 1,
          // saveToPhotos: true,
        });

        if (result.didCancel) {
          console.log(
            'user did cancel to capture image by camera'
          );
          return;
        }

        setImagesResult(result.assets);
      }
    } catch (error) {
      throw new Error('error_open_camera: ' + error);
    }
  }, []);

  const handleOpenPhoto = useCallback(async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        includeBase64: false,
        selectionLimit: 5,
      });

      if (result.didCancel) {
        console.log('user did cancel pick image');
        return;
      }

      setImagesResult(result.assets);
    } catch (error) {
      throw new Error('error_image_picker: ' + error);
    }
  }, []);

  return {
    imagesResult,
    handleOpenPhoto,
    handleOpenCamera,
  };
}
