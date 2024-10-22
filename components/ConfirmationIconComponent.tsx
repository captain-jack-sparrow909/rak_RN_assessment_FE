import { View, Image, StyleSheet } from 'react-native';


const ConfirmationIconComponent = () => {
  return (
    <View>
      <Image
        source={require('../assets/success.png')}
        style={styles.icon}
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

export default ConfirmationIconComponent;
