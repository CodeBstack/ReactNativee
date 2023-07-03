import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';

type EachFollowersProps = {
  imgUrl?: string;
  name: string;
  location: string;
};

const EachFollowers: React.FunctionComponent<
  EachFollowersProps
> = ({ imgUrl, name, location }) => {
  const [checked, setChecked] =
    useState<boolean>(false);

  const img = require(`../../assets/images/follower-img.png`);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      activeOpacity={0.6}
    >
      <View style={styles.eachFollower}>
        <View style={styles.userDisplay}>
          {/* <Image
            //   style={ {height:200}}
            source={imgUrl}
          /> */}
          <Image source={img} />
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

        <RadioButton
          value="joe"
          status={
            checked ? 'checked' : 'unchecked'
          }
          color="#42AA5E"
          uncheckedColor="#42AA5E"
          onPress={() => setChecked(!checked)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EachFollowers;

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
