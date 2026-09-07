declare module 'react-native-signature-capture' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  interface SignatureCaptureProps {
    style?: ViewStyle;
    onSaveEvent?: (result: {
      pathName: string;
      encoded: string;
    }) => void;
    onDragEvent?: () => void;
    saveImageFileInExtStorage?: boolean;
    showNativeButtons?: boolean;
    showTitleLabel?: boolean;
    viewMode?: 'portrait' | 'landscape';
  }

  export default class SignatureCapture extends React.Component<SignatureCaptureProps> {
    saveImage(): void;
    resetImage(): void;
  }
}