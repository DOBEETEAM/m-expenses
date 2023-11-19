import { AppScreenProps } from "@data/models";

export interface SignInProps extends AppScreenProps<'SignIn'> {}

export type UseSignInProps = {
  navigation?: SignInProps['navigation'];
}