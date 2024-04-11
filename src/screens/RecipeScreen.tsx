import React from 'react';
import {StatusBar} from 'react-native';
import RecipeComponent from '../components/moleculs/RecipeComponent';

const RecipeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#e0dcdc" />
      <RecipeComponent />
    </>
  );
};

export default RecipeScreen;
