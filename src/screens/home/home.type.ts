import {AppBottomTabScreenProps} from '@data/models';

export interface HomeProps extends AppBottomTabScreenProps<'Home'> {}

export type UseHomeProps = {
    navigation: HomeProps['navigation'];
};
