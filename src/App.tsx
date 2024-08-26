import appRoutes from './routes/appRoutes';
import generateRoutes from './routes/generateRoutes';

function App() {
  return <>{generateRoutes({ routes: appRoutes })}</>;
}

export default App;
