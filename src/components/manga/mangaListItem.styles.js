import {StyleSheet} from 'react-native';
import {AppColors, AppSizes} from '../../theme';

const mangaItemViewSize = {height: AppSizes.screen.width * 0.35};
const touchableMangaViewSize = {
  height: AppSizes.screen.width * 0.35,
  width: AppSizes.screen.width * 0.875,
  marginStart: AppSizes.screen.width * 0.015,
};
const mangaInfosViewSize = {
  height: AppSizes.screen.width * 0.33,
  width:
    touchableMangaViewSize.width -
    touchableMangaViewSize.marginStart -
    AppSizes.screen.width * 0.22,
  marginStart: touchableMangaViewSize.marginStart,
}

const styles = StyleSheet.create({
  mangaItemView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: mangaItemViewSize.height,
    width: AppSizes.screen.width,
    marginVertical: 2,
  },
  touchableMangaView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: touchableMangaViewSize.height,
    width: touchableMangaViewSize.width,
    marginStart: touchableMangaViewSize.marginStart,
  },
  mangaImg: {
    height: AppSizes.screen.width * 0.33,
    width: AppSizes.screen.width * 0.22,
  },
  mangaInfosView: {
    justifyContent: 'center',
    height: AppSizes.screen.width * 0.33,
    width: mangaInfosViewSize.width,
    marginStart: mangaInfosViewSize.marginStart,
  },
  mangaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.palette.main.tertiary,
  },
  mangaAuthors: {
    fontSize: 13,
    color: 'grey',
  },
  mangaStatusView: {
    width: mangaInfosViewSize.width * 0.4,
    borderRadius: 5,
    borderColor: AppColors.palette.main.tertiary,
    borderWidth: 1,
  },
  favoriteView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: AppSizes.screen.width * 0.3,
    width: AppSizes.screen.width * 0.11,
  },
  favoriteImg: {
    height: AppSizes.screen.width * 0.1,
    width: AppSizes.screen.width * 0.1,
  },
});

export default styles;
