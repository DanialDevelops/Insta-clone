import HomePage from './pages/Homepage/Homepage'; 
import AuthPage from './pages/AuthPage/Authpage'; 
import { Routes, Route } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout/PageLayout';

function App() {

  return (
    <PageLayout>
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
     </Routes>
    </PageLayout>
  )
}

export default App
