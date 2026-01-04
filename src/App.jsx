import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from './hooks/useTheme';
import WelcomeAnimation from './components/WelcomeAnimation';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <WelcomeAnimation />
      <Routes />
    </ThemeProvider>
  );
}

export default App;