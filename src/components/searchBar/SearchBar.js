import React from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';

import assets from '../../assets';
import styles from './searchBar.styles';
import {AppColors} from '../../theme';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.searchBarView}>
        <View style={styles.searchBarSubView}>
          <Image style={styles.image} source={assets.search} />
          <TextInput
            style={styles.searchTextInput}
            onChangeText={(text) => this.props.onSearchChange(text.toLowerCase())}
            value={this.props.value}
            placeholder={'search manga by name...'}
            selectionColor={AppColors.palette.main.secondary}
            autoCapitalize = 'none'
          />
          <TouchableOpacity onPress={() => this.props.onCancelSearch()}>
            <Image style={styles.image} source={assets.delete} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  onCancelSearch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
