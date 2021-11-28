import {lazy, LazyExoticComponent} from 'react';

/* Importaciones propias */
import {NoLazy} from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazy1/*',
        to: '/lazy1/',
        Component: Lazy1,
        name: 'Lazy Layout - Dash'
    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];