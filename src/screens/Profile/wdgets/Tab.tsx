import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EventTab from './EventTab';
import InterestsTab from './InterestsTab';
import TrophiesTab from './TrophiesTab';
import AboutTab from './AboutTab';

type Steps = {
  id: number;
  title: string;
};

type StepComponents = {
  1: JSX.Element;
  2: JSX.Element;
  3: JSX.Element;
  4: JSX.Element;
};

let stepComponents: StepComponents = {
  1: <EventTab />,
  2: <InterestsTab />,
  3: <TrophiesTab />,
  4: <AboutTab />,
};

const steps: Steps[] = [
  {
    id: 1,
    title: 'Events',
  },
  {
    id: 2,
    title: 'Interests',
  },
  {
    id: 3,
    title: 'Trophies',
  },
  {
    id: 4,
    title: 'About',
  },
];

const Tab = () => {
  const [presentStep, setPresentStep] =
    useState(1);
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 38,
          alignItems: 'center',
          marginBottom: 42,
          overflow: 'visible',
        }}
        // style={{
        //   flexDirection: 'row',
        //   justifyContent: 'space-between',
        //   maxWidth: '90%',
        //   gap: 38,
        //   alignItems: 'center',
        //   marginBottom: 42,
        // }}
      >
        {steps.map((step) => (
          <TouchableOpacity
            key={step.id}
            onPress={() =>
              setPresentStep(step.id)
            }
            activeOpacity={0.6}
          >
            <Text
              style={
                step.id === presentStep
                  ? styles.currentTab
                  : styles.otherTab
              }
            >
              {step.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <>
        {
          stepComponents[
            presentStep as keyof StepComponents
          ]
        }
      </>
    </>
  );
};

export default Tab;

const styles = StyleSheet.create({
  currentTab: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 2,
    color: '#2E2F3A',
    borderBottomWidth: 1,
    borderColor: '#34A853',
  },

  otherTab: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.5,
    color: '#000',
  },
});
