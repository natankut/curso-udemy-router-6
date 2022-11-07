import { BrowserRouter } from "react-router-dom";
import {Routes,Route, Navigate} from "react-router-dom";
import Nav from "../01-lazyload/components/Nav";
import {Suspense} from 'react';
// import { LazyPage2, LazyPage3,LazyPage1 } from "../01-lazyload/pages";


import {routes} from "./routes";




const Navigation = () => {
  return (
    <Suspense fallback={<span>LOADING...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <Nav/>

          <Routes>

            {
              routes.map(({path,Component}) => (
                <Route 
                  key={path}
                  path={path}
                  element={<Component/>} 
                />
                
              ))
            }

              <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation