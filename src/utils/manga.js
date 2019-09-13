import Storage from './storage';

const isMangaFavorite = async manga => {
  let isFavorite = 'off';
  try {
    isFavorite = await Storage.getItem(manga) || 'off';
  } catch (error) {
    console.log(error.message);
  }
  console.log('=> ', isFavorite);
  return isFavorite === 'on';
};

const markAsFavorite = async (manga, value) => {
  try {
    await Storage.setItem(manga, value);
  } catch (error) {
    console.log(error.message);
  }
};
