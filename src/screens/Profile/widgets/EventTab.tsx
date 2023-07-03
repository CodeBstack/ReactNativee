import {
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
// import People from '../../../components/Vectors/People';

const EventTab = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 50,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 17,
        }}
      >
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: '500',
          }}
        >
          Upcoming Events
        </Text>
        <Ionicons
          name="options-outline"
          size={24}
          color="#34A853"
        />
      </View>

      <View
        style={{
          position: 'relative',
          flex: 1,
          height: 126,
          borderRadius: 12,
          backgroundColor: '#000000',
        }}
      >
        <Image
          style={{
            position: 'absolute',
            width: '100%',
            borderRadius: 12,
            height: '100%',
          }}
          source={require('../../../../assets/images/upcoming-event.png')}
        />

        <View
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: 100,
            position: 'absolute',
            top: 11,
            right: 16,
            paddingVertical: 6,
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: '500',
              color: '#000000',
            }}
          >
            Concert
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 6,
            left: 10,
            gap: 2,
          }}
        >
          <MaterialIcons
            name="favorite"
            size={15}
            color="#FE1814"
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: '500',
            }}
          >
            22.2k
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 19,
        }}
      >
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: '#000',
          }}
        >
          The Rock Prom
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 9,
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="ios-people-outline"
            size={20}
            color="#34A853"
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 12,
              color: '#000',
            }}
          >
            15k attending
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 11,
          alignItems: 'center',
          marginTop: 14,
        }}
      >
        <Feather
          name="calendar"
          size={24}
          color="black"
        />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 12,
            color: '#000',
          }}
        >
          Sun 06 nov 2022, 06:00pm WAT
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 11,
          alignItems: 'center',
          marginVertical: 15,
        }}
      >
        <EvilIcons
          name="location"
          size={24}
          color="black"
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            color: '#000',
            opacity: 0.5,
          }}
        >
          24, Akinlotan Street, Agbede Ikorodu,
          Lagos State.{' '}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#000',
          borderRadius: 20,
          flexDirection: 'row',
          gap: 6,
          alignItems: 'center',
          paddingVertical: 6,
          paddingHorizontal: 10,
          maxWidth: 100,
        }}
      >
        <FontAwesome
          name="bell-o"
          size={16}
          color="white"
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Remind me
        </Text>
      </View>
    </ScrollView>
  );
};

export default EventTab;
