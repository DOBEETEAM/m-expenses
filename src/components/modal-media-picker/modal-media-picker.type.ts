import {Asset} from 'react-native-image-picker';

export interface ModalMediaPickerProps {
  isVisible: boolean;
  onClose?: () => void;
  onPhotoSelected?: (imageArr: Asset[] | undefined) => void;
}

export type OptionButtonPicker = {
  name: string;
  icon: string;
  onPress: () => void;
};
