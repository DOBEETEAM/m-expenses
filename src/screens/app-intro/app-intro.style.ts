import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  containerSlides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    fontWeight: '600',
    marginBottom: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  descriptionStyle: {
    marginHorizontal: 50,
    textAlign: 'center',
  },
  containerButton: {
    marginHorizontal: 10,
    flex: 2,
  },
  signUpButton: {
    paddingVertical: 10,
  },
  signInButton: {
    marginTop: 15,
    paddingVertical: 10,
  },
});
