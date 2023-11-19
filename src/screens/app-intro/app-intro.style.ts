import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  containerSlides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 310,
    height: 310,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    fontWeight: '700',
    marginBottom: 16,
  },
  descriptionStyle: {
    marginHorizontal: 50,
    textAlign: 'center',
  },
  containerButton: {
    marginHorizontal: 12,
    flex: 2,
  },
  signUpButton: {
    paddingVertical: 16,
  },
  signInButton: {
    marginTop: 16,
    paddingVertical: 16,
  },
});
