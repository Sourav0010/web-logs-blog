import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/index';
function App() {
   return (
      <div className='h-full min-h-svh  flex  flex-col'>
         <Header />
         <Outlet />
         <Footer className='mt-auto' />
      </div>
   );
}

export default App;
