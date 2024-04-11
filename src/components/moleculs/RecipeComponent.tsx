import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ProfileComponent from '../atoms/ProfileComponent';
import RecipeCardComponent from '../atoms/RecipeCardComponent';
import {SafeAreaView} from 'react-native-safe-area-context';

const RecipeComponent = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.Container}>
          <View style={styles.ViewCont}>
            <Image
              source={require('../../assets/icons/cooklove.png')}
              style={{width: 50, height: 80}}
              resizeMode="contain"
            />
            <Text style={styles.textCont}>Cook With Love!</Text>

            <ProfileComponent />
          </View>
        </View>
        <View style={styles.RecipeContent}>
          <Image
            source={require('../../assets/icons/recipe.png')}
            style={{width: 30, height: 40}}
          />
          <Text style={styles.RecipeContentTitle}>Recipes</Text>
        </View>
        <RecipeCardComponent />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#a30303',
    borderRadius: 25,
    margin: 10,
  },
  ViewCont: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  textCont: {
    margin: 20,
    fontSize: 25,
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
  },
  RecipeContent: {
    //flex: 1,
    marginTop: 22,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  RecipeContentTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
  },
});
export default RecipeComponent;
