import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  logoContainer: {
    width: 120,
    height: 120,
    marginHorizontal: 25,
    marginBottom: 20,
    marginTop: 40,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  containerForm: {
    marginHorizontal: 12,
  },
  titleForm: {
    fontWeight: 'bold',
  },
  descriptionForm: {
    marginVertical: 10,
  },
});
