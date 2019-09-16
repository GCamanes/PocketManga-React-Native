import {Actions} from 'react-native-router-flux';
import {Alert, BackHandler} from 'react-native';
import AppConstants from '../app/app.constants';
import store from '../redux/store';

export default function androidBackHandler() {
  if (Actions.state.index === 0) {
    // no previous screen
    Alert.alert(
      'Exit',
      'Do you really want to close Pocket Manga ?',
      [
        {
          text: 'NO',
          onPress: () => {
            console.log('user wants to keep using the app...');
          },
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            console.log('user wants to close the app...');
            store.dispatch({type: AppConstants.EVENTS.EXIT_APPLICATION});
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    // return to previous screen
    console.log('Android BackHandler : send the user to previous screen');
    Actions.pop();
  }
  // returning true is needed to tell BackHandler that you are overriding
  // the default action and that it should not close the app
  return true;
}
