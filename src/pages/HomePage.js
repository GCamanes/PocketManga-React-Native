import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, SectionList, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../app/app.constants';
import MangaListItem from '../components/manga/MangaListItem';
import MangaSectionTitle from '../components/manga/MangaSectionTitle';
import SearchBar from '../components/searchBar/SearchBar';
import * as MangaActions from './../redux/actions/manga-actions';
import {AppColors, AppSizes, AppStyles} from '../theme';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const {getMangas} = this.props;
    getMangas();
  }

  onSearchChange = search => {
    this.setState({search});
  };

  onCancelSearch = () => {
    this.setState({search: ''});
  };

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus, mangas} = this.props;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.secondary}
          />
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: AppColors.palette.main.primary}}>
        <SearchBar
          onSearchChange={this.onSearchChange}
          onCancelSearch={this.onCancelSearch}
          value={this.state.search}
        />
        <View
          style={{
            backgroundColor: AppColors.palette.main.tertiary,
            height: 2,
            width: AppSizes.screen.width,
          }}
        />
        <SectionList
          initialNumToRender={30}
          keyExtractor={item => item.name}
          onEndReachedThreshold={30}
          renderItem={({item}) => <MangaListItem manga={item} />}
          renderSectionHeader={({section: {title}}) => (
            <MangaSectionTitle title={title} />
          )}
          sections={[
            {
              title: 'Favorites',
              data: mangas.filter(
                item =>
                  item.name.toLowerCase().includes(this.state.search) &&
                  item.isFavorite,
              ),
            },
            {
              title: 'Others',
              data: mangas.filter(
                item =>
                  item.name.toLowerCase().includes(this.state.search) &&
                  !item.isFavorite,
              ),
            },
          ]}
        />
      </View>
    );
  }
}

HomePage.propTypes = {
  getMangas: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  mangas: PropTypes.arrayOf(PropTypes.object),
};

HomePage.defaultProps = {
  loadingStatus: {loading: false},
  mangas: [],
};

const mapStateToProps = state => ({
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
  mangas: state.manga.mangas,
});

export default connect(mapStateToProps, MangaActions)(HomePage);
