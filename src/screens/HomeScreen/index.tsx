import {
  View,
  Text,
  // Button,
  StyleSheet,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackList } from '../../../App';
import { Button } from 'react-native-paper';

type HomeProps = NativeStackScreenProps<
  StackList,
  'Home'
>;

export const HomeScreen = ({
  navigation,
}: HomeProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>HOME</Text>
        <Text style={{ maxWidth: 300 }}>
          Kindly click on the buttons below to
          navigate the screens.
        </Text>
      </View>
      <Button
        mode="contained"
        buttonColor="#34A853"
        onPress={() =>
          navigation.navigate('Followers')
        }
      >
        Go to Followers
      </Button>
      <Button
        mode="contained"
        buttonColor="#34A853"
        onPress={() =>
          navigation.navigate('Profile')
        }
      >
        Go to Profile
      </Button>
      <Button
        mode="contained"
        buttonColor="#34A853"
        onPress={() =>
          navigation.navigate('Follow_Page')
        }
      >
        Go to Follow Page
      </Button>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 60,
    gap: 12,
  },

  text: {
    fontWeight: '600',
    fontSize: 30,
    color: '#222222',
  },
});
