import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const CustomIllustration = () => {
  return (
    <Svg width={180} height={180} viewBox="0 0 180 180">
      <Circle
        cx="90"
        cy="90"
        r="78"
        fill="#EEF2FF"
      />

      <Circle
        cx="90"
        cy="72"
        r="28"
        fill="#4F46E5"
      />

      <Path
        d="M42 142C48 114 67 102 90 102C113 102 132 114 138 142"
        fill="#6366F1"
      />

      <Circle
        cx="80"
        cy="68"
        r="4"
        fill="white"
      />

      <Circle
        cx="100"
        cy="68"
        r="4"
        fill="white"
      />

      <Path
        d="M78 82C84 87 96 87 102 82"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
};

export default CustomIllustration;