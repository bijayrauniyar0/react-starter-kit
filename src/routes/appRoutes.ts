import Home from '@Views/Home';
import { IRoute } from './type';

const appRoutes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
];

export default appRoutes;
