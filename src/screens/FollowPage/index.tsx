import { styles } from './styles';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  AntDesign,
  Feather,
} from '@expo/vector-icons';

// import EachFollowers from '../../components/EachFollowers';
import {
  FollowerMockData,
  followerMockData,
} from './data';

import { StackList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import FollowUser from '../../components/FollowUser';

type FollowerPageProps = NativeStackScreenProps<
  StackList,
  'Follow_Page'
>;

export const FollowPage = ({
  navigation,
}: FollowerPageProps) => {
  const [mockData, setMockData] = useState<
    FollowerMockData[]
  >([]);
  const [searchQuery, setsearchQuery] =
    useState<string>('');

  useEffect(() => {
    setMockData(followerMockData);

    const searchFollowers =
      followerMockData.filter((item) =>
        item.name.includes(
          searchQuery.toLocaleLowerCase()
        )
      );
    setMockData(searchFollowers);
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.navigation}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>
            Followers
          </Text>
        </View>
        <View style={styles.inputBox}>
          <AntDesign
            name="search1"
            size={18}
            color="#AAACAD"
          />
          <TextInput
            style={styles.input}
            placeholder="Search people or brands"
            placeholderTextColor={'#AAACAD'}
            onChangeText={(text) =>
              setsearchQuery(text)
            }
          />
        </View>

        <TouchableOpacity activeOpacity={0.5}>
          <View
            style={{
              marginBottom: 46,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Feather
              name="user-plus"
              size={18}
              color="black"
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'normal',
                color: '#000000',
                // textAlign: 'center',
              }}
            >
              Invite Friend
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          style={styles.flatList}
          data={mockData}
          renderItem={({ item }) => (
            <FollowUser
              imgUrl={item.imgUrl}
              name={item.name}
              location={item.location}
            />
          )}
          keyExtractor={(item) =>
            `${item.name}_${item.id}`
          }
        />
      </View>
    </SafeAreaView>
  );
};
