import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EachFollowers from '../../components/EachFollowers';
import { styles } from './styles';
import {
  FollowerMockData,
  followerMockData,
} from './data';
import { StackList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type FollowersProps = NativeStackScreenProps<
  StackList,
  'Followers'
>;

export const Followers = ({
  navigation,
}: FollowersProps) => {
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
          {/* <Button
            title=""
            onPress={() => navigation.goBack()}
          > */}
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          {/* </Button> */}
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

        <FlatList
          style={styles.flatList}
          data={mockData}
          renderItem={({ item }) => (
            <EachFollowers
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
