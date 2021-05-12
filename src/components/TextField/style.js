import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/colors';

export default styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    marginTop: 20,
    height: 70,
    alignSelf: 'center',
  },
  placeHolder: {
    color: THEME.BLACK,
    position: 'absolute',
    marginTop: 2,
    fontSize: 10,
    paddingLeft: 15,
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
  },
  extraPaddingDarkBorder: {
    borderColor: THEME.BLACK,
    borderWidth: 2,
    borderRadius: 5,
  },
  placeholderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: THEME.BLACK,
    marginBottom: 10,
  },
});
