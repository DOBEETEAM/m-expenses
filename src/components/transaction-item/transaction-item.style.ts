import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 15,
  },
  iconContainer: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  icon: {
    fontSize: 25,
  },
  contentContainer: {
    marginLeft: 9,
    marginRight: 20,
  },
  titleText: {
    marginBottom: 10
  },
  amountText: {
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
});
