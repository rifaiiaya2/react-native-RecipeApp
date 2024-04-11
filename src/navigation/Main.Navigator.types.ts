import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
export type MainNavigatorParamList = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  IngredientsScreen: {
    item: {
      id: number;
      name: string;
      image: string;
      time: string;
      ingredients: string[];
    };
  };
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
