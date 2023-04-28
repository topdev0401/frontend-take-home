import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { PaletteMode } from '@mui/material';

export const getAppTheme = (mode: PaletteMode): Theme => {
  let theme = createTheme({
    palette: {
      mode: mode, // Set the initial mode
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
