import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, ScrollView } from 'react-native';


export default class App extends React.Component {
  _onPressYes() {
      Alert.alert('Well done, fam.');
  }

  _onPressNo() {
      Alert.alert('Fuck you.');
  }

  render() {
    {/*const yesFam = <Image source={require('./static_assets/shake.gif')} />;*/}
    {/*const noBruh = <Image source={require('./static_assets/wakanda_stare.jpg')} />;*/}
    return (
      <View style={styles.container}>
        <Image source={require('./static_assets/mask_on.jpg')} />
        <Text>Have You Seen Black Panther?</Text>
        <ScrollView>
            <Button
                onPress={this._onPressYes}
                title="Yes"/>
            <Button
                onPress={this._onPressNo}
                title="No"/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
