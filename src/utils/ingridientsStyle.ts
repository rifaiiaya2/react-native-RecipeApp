import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a30303',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  ViewCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArrowPress: {
    margin: 8,
    padding: 4,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  icon: {
    width: 35,
    height: 35,
  },
  Secview: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 220,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingTop: 150,
  },
  itemImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -140,
  },
  itemName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  ingredientsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  ingredientsContentContainer: {
    alignItems: 'flex-start',
  },
  ingredientsTitle: {
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: '#a30303',
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignSelf: 'flex-start',
  },
  ingredientsList: {
    width: '100%',
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  bulletPoint: {
    backgroundColor: '#a30303',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  ingredientText: {
    fontSize: 17,
    color: '#000',
  },
  noIngredients: {
    fontSize: 17,
    color: '#000',
    paddingHorizontal: 10,
  },
});
