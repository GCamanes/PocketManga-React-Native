import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Alert, Text, View, Image, TouchableOpacity} from 'react-native';

import assets from '../../assets';
import styles from './mangaListItem.styles';
import { AppColors } from '../../theme';

export class MangaListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressItem = () => {
    if (this.props.connectivity) {
      /* this.props.navigation.navigate('Chapters', {
        manga: this.props.manga.id,
      }); */
    } else {
      Alert.alert('Warning', 'No internet connection.');
    }
  };

  onFavoritePress = () => {
    const { id, isMangaFavorite } = this.props.manga;
    // this.props.markMangaAsFavorite(id, !isMangaFavorite);
  }

  render() {
    const {manga} = this.props;
    return (
      <View style={styles.mangaItemView}>
        <TouchableOpacity
          style={styles.touchableMangaView}
          onPress={this.onPressItem}
        >
          <Image source={{uri: manga.imgUrl}} style={styles.mangaImg} />
          <View style={styles.mangaInfosView}>
            <Text style={styles.mangaTitle}>
              {manga.name}
            </Text>
            <Text style={styles.mangaAuthors}>
              {manga.authors.join(', ')}
            </Text>
            <View>
              <Text style={{color: AppColors.palette.main.secondary, fontWeight: 'bold'}}>
                Last chapter: {manga.lastChapter}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ color: AppColors.palette.main.secondary, fontWeight: 'bold'}}>
                Status:
              </Text>
              <Text style={{ color: (manga.status === 'Completed') ? 'green' : AppColors.palette.main.quaternary, fontWeight: 'bold' }}>
                {" " + manga.status}
              </Text>
            </View>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteView}
          onPress={this.onFavoritePress}
        >
          <Image
            style={styles.favoriteImg}
            source={manga.isFavorite ? assets.favoriteOn : assets.favoriteOff}
          />
        </TouchableOpacity>
      </View >
    );
  }
}

MangaListItem.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  manga: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
});

export default connect(
  mapStateToProps,
  null,
)(MangaListItem);
