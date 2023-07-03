import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  RadioButton,
} from 'react-native-paper';
import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import FollowButton from './FollowButton';

type FollowUserProps = {
  imgUrl?: string;
  name: string;
  location: string;
};

const FollowUser: React.FunctionComponent<
  FollowUserProps
> = ({ imgUrl, name, location }) => {
  const [isFollowing, setisFollowing] =
    useState<boolean>(false);

  const img = require(`../../assets/images/follower-img.png`);
// console.log(imgUrl?.toString());

  return (
    <View style={styles.eachFollower}>
      <View style={styles.userDisplay}>
        {/* <Image
          //   style={ {height:200}}
          source={imgUrl}
        /> */}
        <Image
          source={img}
        />
        <View>
          <Text
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: 14,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              gap: 4.85,
              alignItems: 'center',
            }}
          >
            <Octicons
              name="location"
              size={12}
              color="#7f7f7f"
            />
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontWeight: '500',
                fontSize: 12,
              }}
            >
              {location}
            </Text>
          </View>
        </View>
      </View>

      {isFollowing ? (
        <Button
          mode="outlined"
          textColor="#34A853"
          //   buttonColor="#34A853"
          onPress={() =>
            setisFollowing(!isFollowing)
          }
        >
          Following
        </Button>
      ) : (
        <Button
          mode="contained"
          textColor="white"
          buttonColor="#34A853"
          onPress={() =>
            setisFollowing(!isFollowing)
          }
        >
          Follow
        </Button>
      )}
    </View>
  );
};

export default FollowUser;

const styles = StyleSheet.create({
  eachFollower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  userDisplay: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    color: '#000000',
    fontWeight: '500',
    fontSize: 30,
  },
});
