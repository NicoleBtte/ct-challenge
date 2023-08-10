import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ReportsPage from './components/reportsPage';
import { ContextProvider } from './context/contextProvider';
import SuccessLogin from './components/successLogin';

function App() {

  return (
    <div className="bg-gradient-to-tr from-cyan-500 to-cyan-100 w-full h-full font-sans">
      <ContextProvider>
        <BrowserRouter>
            <Routes>
              <Route
                path = "/"
                element = {<LoginPage/>}
              />
              <Route
                path = "/reports"
                element = {<ReportsPage/>}
              />
            </Routes>
          </BrowserRouter>
      </ContextProvider>
    </div>

 
  );
}

export default App;
