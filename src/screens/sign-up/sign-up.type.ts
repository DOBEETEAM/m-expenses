import {AppScreenProps} from '@data/models';

export interface SignUpProps extends AppScreenProps<'SignUp'> {}

export type UseSignUpProps = {
  navigation?: SignUpProps['navigation'];
};
