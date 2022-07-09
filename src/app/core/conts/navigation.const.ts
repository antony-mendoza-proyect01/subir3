import {Inavigation} from '../../data/interfaces/inavigation';
import {INTERNAL_PATHS} from './routes.conts';


export const NAVIGATION_APP: Inavigation[] = [

  {
    id: 1,
    title: 'Cruds',
    link: `/${INTERNAL_PATHS.PADRE}/${INTERNAL_PATHS.CRUD}`,
    activeMenu: true,
    faIcon: 'fas fa-clipboard-list',
    menu: [
      {
        id: 11,
        title: 'Negocios',
        link: `/${INTERNAL_PATHS.CRUD_PROYECTO}`,
        activeSubMenu: false,
      },
    ]
  },

];

