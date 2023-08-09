import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ReportsPage from './components/reportsPage';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;
