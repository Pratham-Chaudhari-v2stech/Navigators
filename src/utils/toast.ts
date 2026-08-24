import {showMessage} from 'react-native-flash-message';

export const showSuccessToast = (message: string) => {
  showMessage({
    message,
    type: 'success',
    duration: 2500,
    floating: true,
  });
};

export const showErrorToast = (message: string) => {
  showMessage({
    message,
    type: 'danger',
    duration: 2500,
    floating: true,
  });
};