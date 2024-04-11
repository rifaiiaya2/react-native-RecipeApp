import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import IngredientsInput from '../../components/atoms/IngredientsInput';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_URL} from '../../utils/APIURL';
import {showAlert} from '../../functions/authenticationFct';
import {ScrollView} from 'react-native-gesture-handler';
const AddPostScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [recipeName, setRecipeName] = useState('');
  const [timeNeeded, setTimeNeeded] = useState('');
  const [ingredients, setIngredients] = useState('');
  const handleSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.error('Error selecting image:', error);
      });
  };
  const handleCancel = () => {
    setSelectedImage(null);
    setRecipeName('');
    setTimeNeeded('');
    setIngredients('');
  };
  const handlePost = async () => {
    if (
      !selectedImage ||
      !recipeName.trim() ||
      !timeNeeded.trim() ||
      !ingredients.trim()
    ) {
      showAlert('Please fill in all fields before posting.');
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/recipes`, {
        name: recipeName,
        image: selectedImage,
        time: timeNeeded,
        ingredients: ingredients.split(','),
      });

      console.log('Posted recipe:', response.data);
      handleCancel();
      navigation.goBack();
    } catch (error) {
      console.error('Failed to post recipe:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {selectedImage ? (
            <Image source={{uri: selectedImage}} style={styles.image} />
          ) : (
            <Text style={{color: '#000', fontSize: 20, fontWeight: '500'}}>
              Select an Image
            </Text>
          )}
        </View>
        <Pressable style={styles.imagePressBtn} onPress={handleSelectImage}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '500'}}>
            Select Image
          </Text>
        </Pressable>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            top: 20,
          }}>
          <IngredientsInput
            placeholder="Enter Recipe name"
            height={45}
            value={recipeName}
            onChangeText={setRecipeName}
          />
          <IngredientsInput
            placeholder="Enter time needed"
            height={45}
            value={timeNeeded}
            onChangeText={setTimeNeeded}
          />
          <IngredientsInput
            placeholder="Enter Recipe Ingredients like that. For example:
          ingredient 1,
          ingredient 2,
          etc..."
            height={230}
            value={ingredients}
            onChangeText={setIngredients}
            multiline={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.imagePressBtn} onPress={handleCancel}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: '500'}}>
              Cancel
            </Text>
          </Pressable>
          <Pressable style={styles.imagePressBtn} onPress={handlePost}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: '500'}}>
              Post
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcf2f2',
    flex: 1,
    alignItems: 'center',
    top: 10,
    padding: 20,
  },
  imageContainer: {
    width: 300,
    height: 220,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    backgroundColor: '#e0d5d5',
  },
  imagePressBtn: {
    backgroundColor: '#fca28d',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 10,
    width: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
});

export default AddPostScreen;
