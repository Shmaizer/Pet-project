import { Layout } from './components/Layout';
import {Router, Route, Routes} from 'react-router-dom'
import { MainPage } from './page/MainPage';
import { LoginPage } from './page/LoginPage';
import { RegisterPage } from './page/RegisterPage';
function App() {
  return (
  <Layout>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
    </Routes>
    </Layout>
  );
}

export default App;
