import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { route } from './routes/index.routes'
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={route}/>        
    </>
  )
}

export default App
