import { extendTheme } from '@chakra-ui/react';

// ここでフォントサイズをpxで定義します
const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  // 以下、必要に応じて追加
};

const theme = extendTheme({
  fontSizes,
  // 他のテーマカスタマイズもここに追加できます
});

export default theme;
