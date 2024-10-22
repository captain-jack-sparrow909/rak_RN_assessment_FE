import { View, Image, StyleSheet } from 'react-native';


const RAKLogoComponent = () => {
  return (
    <View>
      <Image
        source={require('../assets/rak_logo.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    icon: {
        width: 220,
        height: 220,
      },
});

export default RAKLogoComponent;
