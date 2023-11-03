import {AppScreenProps} from '@data/models';

export interface LaunchProps extends AppScreenProps<'Launch'> {}

export interface UseLaunchProps extends Pick<LaunchProps, 'navigation'> {}
