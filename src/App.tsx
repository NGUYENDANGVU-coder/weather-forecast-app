import { Suspense } from 'react';
import { QueryHandler } from './QueryHandler';
import { Loader } from './components/common/Loader';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <QueryHandler />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
