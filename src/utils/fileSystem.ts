import RNFS from 'react-native-fs';

const filePath = `${RNFS.DocumentDirectoryPath}/device_utilities_demo.txt`;

export const writeDemoFile = async (): Promise<void> => {
  const content = 'Hello from React Native Device Utilities!';

  await RNFS.writeFile(filePath, content, 'utf8');
};

export const readDemoFile = async (): Promise<string> => {
  const fileExists = await RNFS.exists(filePath);

  if (!fileExists) {
    throw new Error('Demo file does not exist.');
  }

  return RNFS.readFile(filePath, 'utf8');
};

export const deleteDemoFile = async (): Promise<void> => {
  const fileExists = await RNFS.exists(filePath);

  if (fileExists) {
    await RNFS.unlink(filePath);
  }
};