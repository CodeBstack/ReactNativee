import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  AntDesign,
} from '@expo/vector-icons';

const MessageButton = () => {
  return (
    <View style={styles.msgIcon}>
      <AntDesign
        name="message1"
        size={20}
        color="white"
      />
    </View>
  );
};

export default MessageButton;

const styles = StyleSheet.create({
  msgIcon: {
    backgroundColor: '#34A853',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
