import {
  StyleSheet,
  StatusBar,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    marginTop:
      StatusBar.currentHeight &&
      StatusBar.currentHeight,
    paddingHorizontal: 24,
    minHeight: '100%',
    // overflow: 'visible',
    // marginBottom: 40,
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navigation: {
    marginBottom: 11,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  text: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },

  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34A8534D',
    width: 121,
    height: 121,
    borderRadius: 110,
    marginTop: 34,
  },
});
