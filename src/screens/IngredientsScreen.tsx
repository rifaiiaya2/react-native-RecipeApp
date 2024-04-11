import React from 'react';
import {
  View,
  Image,
  Pressable,
  StatusBar,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import {styles} from '../utils/ingridientsStyle';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {MainNavigatorParamList} from '../navigation/Main.Navigator.types';
import {onDisplayNotification} from '../functions/LocalNotification';

type IngredientsScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'IngredientsScreen'
>;
type IngredientItem = {
  id: string;
  title: string;
};

const IngredientsScreen = () => {
  const route = useRoute<IngredientsScreenRouteProp>();
  const {item} = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  let ingredientsArray: IngredientItem[] = [];
  if (Array.isArray(item.ingredients)) {
    ingredientsArray = item.ingredients.map(
      (ingredient: string, index: number) => ({
        id: String(index),
        title: ingredient,
      }),
    );
  } else if (typeof item.ingredients === 'string') {
    try {
      const parseIngredients = JSON.parse(item.ingredients);
      if (Array.isArray(parseIngredients)) {
        ingredientsArray = parseIngredients.map(
          (ingredient: string, index: number) => ({
            id: String(index),
            title: ingredient,
          }),
        );
      }
    } catch (e) {
      console.error('Parsing error:', e);
    }
  }

  const renderIngredientItem = ({item}: {item: IngredientItem}) => (
    <View key={item.id} style={styles.ingredientItem}>
      <View style={styles.bulletPoint} />
      <Text style={styles.ingredientText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="#e0dcdc" />
        <View style={styles.ViewCont}>
          <Pressable style={styles.ArrowPress} onPress={handleGoBack}>
            <Image
              source={require('../assets/icons/IarrowLeft.png')}
              style={styles.icon}
            />
          </Pressable>
          <Pressable style={styles.ArrowPress} onPress={onDisplayNotification}>
            <Image
              source={require('../assets/icons/fav.png')}
              style={styles.icon}
            />
          </Pressable>
        </View>
        <View style={styles.Secview}>
          <Image
            source={{uri: item.image}}
            style={styles.itemImage}
            resizeMode="contain"
          />
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image
              source={require('../assets/icons/cooktime.png')}
              style={{width: 38, height: 38}}
              resizeMode="cover"
            />

            <Text style={{fontSize: 16, color: '#000', paddingHorizontal: 7}}>
              {item.time}
            </Text>
          </View>
          {/* Recipe Ingredient */}

          <Text style={styles.ingredientsTitle}>Ingredients:</Text>
          <FlatList
            data={ingredientsArray}
            renderItem={renderIngredientItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.ingredientsList}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default IngredientsScreen;
