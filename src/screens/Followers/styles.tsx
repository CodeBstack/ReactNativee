import {
  StyleSheet,
  StatusBar,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:
      StatusBar.currentHeight &&
      StatusBar.currentHeight,
    paddingLeft: 15,
    paddingRight: 18,
  },
  subContainer: {
    marginTop: 20,
  },

  navigation: {
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  text: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },

  inputBox: {
    borderRadius: 10,
    backgroundColor: '#F2F1ED',
    height: 48,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 30,
  },
  input: {
    color: '#000',
    fontSize: 14,
    flex: 1,
    fontWeight: '500',
  },

  flatList: {
    paddingLeft: 5,
    paddingRight: 6,
    // flexDirection: 'column',
    // gap: 25,
  },
});
