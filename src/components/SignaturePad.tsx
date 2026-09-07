import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

interface SignaturePadProps {
  onSignatureCaptured: (signature: string) => void;
}

const SignaturePad = ({
  onSignatureCaptured,
}: SignaturePadProps) => {
  const signatureRef = useRef<SignatureCapture>(null);

  const handleSaveSignature = () => {
    signatureRef.current?.saveImage();
  };

  const handleClearSignature = () => {
    signatureRef.current?.resetImage();
  };

  const handleSignature = (result: {
    encoded: string;
  }) => {
    onSignatureCaptured(result.encoded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.signatureContainer}>
        <SignatureCapture
          ref={signatureRef}
          style={styles.signature}
          onSaveEvent={handleSignature}
          onDragEvent={() => {}}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode="portrait"
        />
      </View>

      <View style={styles.buttons}>
        <Button
          title="Clear"
          onPress={handleClearSignature}
        />

        <Button
          title="Confirm Signature"
          onPress={handleSaveSignature}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  signatureContainer: {
    height: 300,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    overflow: 'hidden',
  },

  signature: {
    flex: 1,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default SignaturePad;