import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text>hahah</Text>
        <Button title='detail' onPress={() => navigation.navigate('detail')}></Button>
    </View>
  );
}
export default HomeScreen;