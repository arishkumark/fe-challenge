import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { IntlProvider, FormattedMessage } from "react-intl";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Todo from './features/todo/Todo';
import locale_en from './languages/en';
import locale_fr from './languages/fr';

const data = {
  'en': locale_en,
  'fr': locale_fr
};
const locale = navigator.language.split(/[-_]/)[0];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={data[locale]}>
        <Container maxWidth={false} sx={{ maxWidth: 600, padding: '0 10px' }} disableGutters>
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" align="center">
              <FormattedMessage id="app.TODO" />
            </Typography>
            <Todo />
          </Box>
        </Container>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
