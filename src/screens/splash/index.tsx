import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../assets/styles';

const Splash: React.FC = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation.replace('Home');
    }, 3000);
  }, [props?.navigation]);

  return (
    <View style={[styles.container, styles.splashContainer]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={[styles.sectionTitle, styles.textCenter]}>Welcome</Text>
      <Text style={[styles.sectionDescription, styles.textCenter]}>
        Loading...
      </Text>
    </View>
  );
};

export default Splash;
