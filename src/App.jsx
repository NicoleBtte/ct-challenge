import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ReportsPage from './components/reportsPage';
import { ContextProvider } from './context/contextProvider';
import SuccessLogin from './components/successLogin';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
          <Routes>
            <Route
              path = "/"
              element = {<LoginPage/>}
            />
            <Route
              path = "/reports"
              element = {<SuccessLogin/>}
            />
          </Routes>
        </BrowserRouter>
    </ContextProvider>
 
  );
}

export default App;
