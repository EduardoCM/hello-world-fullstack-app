import logo from './logo.svg';
import './App.css';
import { Tierra } from './componentes/Tierra';
import { Agua } from './componentes/Agua';
import { Fuego } from './componentes/Fuego';
import { Aire } from './componentes/Aire';
import { Inicio } from './componentes/Inicio';
import { AppRoutes } from './routes/AppRoutes';
import DrawerAppBar from './componentes/DrawerAppBar';

function App() {
  return (
    <div>
      <DrawerAppBar />
      <AppRoutes />
    </div>
  );
}

export default App;
