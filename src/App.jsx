import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const queryClient = new QueryClient();
  //const router = createBrowserRouter();

  return (
      <QueryClientProvider client={queryClient}>
        <div className={'text-lg flex items-center justify-center min-h-screen'}>
          CityTroops Challenge
        </div>
      </QueryClientProvider>
  );
}

export default App;
