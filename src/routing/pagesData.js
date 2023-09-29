import Home from '../pages/home/Home';
import MyAccount from '../pages/myaccount/MyAccount';
import Checkout from '../pages/checkout/Checkout';
import Wishlist from '../pages/wishlist/Wishlist';
import Shop from '../pages/shop/Shop';
import Contact from '../pages/contact/Contact';
import ProductDetails from '../pages/products/ProductDetails';
import NotFound from '../pages/notfound/NotFound';

 const pagesData = [
    { path: "/", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "cart", element: <Checkout /> },
    { path: "wishlist", element: <Wishlist /> },
    { path: "shop", element: <Shop /> },
    { path: "contact", element: <Contact /> },
    { path: "category/product", element: <ProductDetails /> },
    { path:'*', element: <NotFound />},
  ];

export default pagesData;