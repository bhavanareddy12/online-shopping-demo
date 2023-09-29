import { Routes, Route } from "react-router-dom";
import pagesData from './pagesData';

const PageRouter = () => {
    const pageRoutes = pagesData.map(({ path, element }) => {
      return <Route path={`/${path}`} element={element} />;
    });
  
    return <Routes>{pageRoutes}</Routes>;
  };

  
export default PageRouter;