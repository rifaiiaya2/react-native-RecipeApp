import {createNavigationContainerRef} from '@react-navigation/native';
import {MainNavigatorParamList} from './Main.Navigator.types';

export const navigationRef =
  createNavigationContainerRef<MainNavigatorParamList>();
export function navigateToLogin() {
  if (navigationRef.isReady()) {
    navigationRef.navigate('LoginScreen');
  }
}
