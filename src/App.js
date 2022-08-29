import { GlobalStyle } from './globalStyles';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
