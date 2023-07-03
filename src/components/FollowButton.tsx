import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Feather,
} from '@expo/vector-icons';

const FollowButton = () => {
  return (
    <View style={styles.followBtn}>
      <Feather
        name="user-plus"
        size={18}
        color="white"
      />

      <Text style={styles.followBtnText}>
        Follow
      </Text>
    </View>
  );
};

export default FollowButton;

const styles = StyleSheet.create({
  followBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#34A853',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  followBtnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});
