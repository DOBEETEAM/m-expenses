import {useCallback, useState} from 'react';
import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';

export function useMediaPicker() {
  const [cameraResult, setCameraResult] = useState();
  const [imagesResult, setImagesResult] = useState<Asset[] | undefined>();

  const handleOpenCamera = useCallback(() => {}, []);

  const handleOpenPhoto = useCallback(async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
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
  };
}
