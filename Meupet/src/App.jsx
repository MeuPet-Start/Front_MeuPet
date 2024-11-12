import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { route } from './routes/index.routes'

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={route}/>        
    </>
  )
}

export default App
