import {AttachmentImage} from '@screens/create-transaction';

export interface ImagesListProps {
  data: AttachmentImage[];
  horizontal?: boolean;
  nestedScrollEnabled?: boolean;
  onOpenImage?: () => void;
  onDeleteImage?: () => void;
}
