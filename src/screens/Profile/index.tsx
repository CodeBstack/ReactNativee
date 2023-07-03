import {
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import { styles } from './styles';
import { StackList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AntDesign,
  EvilIcons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import FollowButton from '../../components/FollowButton';
import MessageButton from '../../components/MessageButton';
import Tab from './widgets/Tab';

type ProfileProps = NativeStackScreenProps<
  StackList,
  'Profile'
>;

const Profile = ({
  navigation,
}: ProfileProps) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#2E2F3A',
          height: 170,
          width: '100%',
          position: 'absolute',
        }}
      ></View>
      <SafeAreaView style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.navigation}>
            {/* <IconButton
              icon="arrow-left"
              iconColor={'white'}
              size={24}
              onPress={() => navigation.goBack()}
            /> */}
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.text}>
              Profile
            </Text>
          </View>
          <Feather
            name="more-horizontal"
            size={24}
            color="white"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.profilePicture}>
            <Image
              style={{ borderRadius: 110 }}
              source={require('../../../assets/images/profile-picture.png')}
            />
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MessageButton />
            <FollowButton />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            gap: 2,
          }}
        >
          <Text
            style={{
              color: '#2E2F3A',
              fontWeight: '700',
              fontSize: 20,
            }}
          >
            General Joe
          </Text>

          <MaterialIcons
            name="verified"
            size={24}
            color="#34A853"
          />
        </View>
        <Text
          style={{
            color: '#000000',
            opacity: 0.5,
            fontWeight: '400',
            fontSize: 12,
          }}
        >
          @joeotabor
        </Text>

        <Text
          style={{
            color: '#000000',
            fontWeight: '400',
            fontSize: 12,
            marginVertical: 10,
          }}
        >
          Founder/CEO at Taron App.{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 40,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: '600',
              }}
            >
              36k
            </Text>
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontWeight: '400',
                fontSize: 12,
              }}
            >
              Followers
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: '600',
              }}
            >
              99
            </Text>
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontWeight: '400',
                fontSize: 12,
              }}
            >
              Events
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 42,
            gap: 2,
          }}
        >
          <EvilIcons
            name="location"
            size={14}
            color="#34A853"
          />
          <Text
            style={{
              color: '#000000',
              opacity: 0.5,
              fontWeight: '400',
              fontSize: 12,
            }}
          >
            Lagos, Nigeria
          </Text>
        </View>

        <Tab />
      </SafeAreaView>
    </>
  );
};

export default Profile;
