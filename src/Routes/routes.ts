import {lazy, LazyExoticComponent} from 'react';
import { NoLazy } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;    
    name: string;
}


const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"));



export const routes=[

    {
        to:'/lazyload',
        path: '/lazyload/*', 
        //todas las rutas pasen por ete path poner *, lazyload es parte de la ruta y todo va aser procesado por ese path
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];