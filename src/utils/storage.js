import AsyncStorage from '@react-native-community/async-storage';

function setItem(key, value) {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(value));
      resolve();
    } catch (error) {
      console.log('STORAGE ERROR storing data', error);
      reject(error);
    }
  });
}

function getItem(key, defaultValue = null) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await AsyncStorage.getItem(`${key}`);
      data = JSON.parse(data) || null;

      if (!data && defaultValue) {
        resolve(defaultValue);
        return;
      }

      resolve(data);
    } catch (error) {
      console.log('STORAGE ERROR getting data', error);
      reject(error);
    }
  });
}

function removeItem(key) {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem(`${key}`);
      resolve();
    } catch (error) {
      console.log('STORAGE ERROR deleting data', error);
      reject(error);
    }
  });
}

export default {
  setItem,
  getItem,
  removeItem,
};
