import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import axios from 'axios';
import {API_URL} from '../../utils/APIURL';

export type Recipe = {
  id: number;
  name: string;
  image: string;
  time: string;
  ingredients: string[];
};
const RecipeCardComponent = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRecipes = useCallback(() => {
    if (!hasMore) return;

    setRefreshing(true);
    const url = `${API_URL}/recipes?page=${page}&limit=10`;
    axios
      .get(url)
      .then(response => {
        if (response.data.length > 0) {
          setPage(prevPage => prevPage + 1);
          setRecipes(prevRecipes => [...prevRecipes, ...response.data]);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, [page, hasMore]);
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const handletoIngredient = (item: Recipe) => {
    navigation.navigate('IngredientsScreen', {item});
  };
  const renderRecipe = ({item}: {item: Recipe}) => (
    <Pressable style={styles.card} onPress={() => handletoIngredient(item)}>
      <Image
        source={{uri: item.image}}
        style={{width: 155, height: 150}}
        resizeMode="center"
      />
      <Text style={{color: '#000'}}>{item.name}</Text>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <Image
          source={require('../../assets/icons/cooktime.png')}
          style={{width: 22, height: 22}}
          resizeMode="cover"
        />
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setPage(1);
              setRecipes([]);
              setHasMore(true);
            }}
          />
        }
        onEndReached={() => {
          if (hasMore) fetchRecipes();
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginVertical: 12,
    marginHorizontal: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 25,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#a30303',
    paddingLeft: 5,
  },
});
export default RecipeCardComponent;
