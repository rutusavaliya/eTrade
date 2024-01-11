import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../home/homepage"

import ProductV1 from "../shop/produact variation1"
import ProductV2 from "../shop/product2"
import ProductV3 from "../shop/product3"
import ProductV4 from "../shop/product4"
import ProductV5 from "../shop/product5"
import ProductV6 from "../shop/product6"
import ProductV7 from "../shop/product7"
import Account from "../PAGES/account"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import Error from "../pages/Error"
import Forgot from "../pages/forgot"
import Policy from "../pages/policy"
import Reset from "../pages/reset"
import Signin from "../pages/signin"
import SignUP from "../pages/Signup"
import Typography from "../pages/typography"
import Wishlist from "../pages/wishlist"
import Contact from "../contact/contact"
import About from "../About/about"
import Bloglist from "../Blog/bloglist"
import Bloggrid from "../Blog/bloggrid"
import Standrdpost from "../Blog/standrdpost"
import Gallerypost from "../Blog/gallarypost"
import Videopost from "../Blog/videopost"
import Quotepost from "../Blog/quotepost"
import Audiopost from "../Blog/audiopost"
import ShopnoSidebar from "../shop/ShopnoSidebar"
import ShopWithSidebar from "../shop/ShopWithSidebar"
import SideCart from "../Components/SideCart"
import SearchAll from "../Components/SearchAll"
import ScrollToTop from "../Scrolltotop"

export default function AllPage() {
    return (
        <>

            <div>
                <BrowserRouter>
                <ScrollToTop/>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/ShopWithSidebar" element={<ShopWithSidebar/>}></Route>
                        <Route path="/ShopnoSidebar" element={<ShopnoSidebar/>}></Route>
                        <Route path="/ProductV1" element={<ProductV1 />}></Route>
                        <Route path="/ProductV2" element={<ProductV2 />}></Route>
                        <Route path="/ProductV3" element={<ProductV3 />}></Route>
                        <Route path="/ProductV4" element={<ProductV4 />}></Route>
                        <Route path="/ProductV5" element={<ProductV5 />}></Route>
                        <Route path="/ProductV6" element={<ProductV6 />}></Route>
                        <Route path="/ProductV7" element={<ProductV7 />}></Route>
                        <Route path="/Account" element={<Account />}></Route>
                        <Route path="/Cart" element={<Cart />}></Route>
                        <Route path="/Checkout" element={<Checkout />}></Route>
                        <Route path="/Error" element={<Error/>}></Route>
                        <Route path="/Forgot" element={<Forgot />}></Route>
                        <Route path="/Policy" element={<Policy />}></Route>
                        <Route path="/Reset" element={<Reset />}></Route>
                        <Route path="/Signin" element={<Signin />}></Route>
                        <Route path="/SignUP" element={<SignUP />}></Route>
                        <Route path="/Typography" element={<Typography />}></Route>
                        <Route path="/Wishlist" element={<Wishlist />}></Route>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="/Bloglist" element={<Bloglist />}></Route>
                        <Route path="/Bloggrid" element={<Bloggrid />}></Route>
                        <Route path="/Standrdpost" element={<Standrdpost />}></Route>
                        <Route path="/Gallerypost" element={<Gallerypost />}></Route>
                        <Route path="/Videopost" element={<Videopost />}></Route>
                        <Route path="/Quotepost" element={<Quotepost />}></Route>
                        <Route path="/Audiopost" element={<Audiopost />}></Route>

                        <Route path="/Contact" element={<Contact/>}></Route>
                        <Route path="/SideCart" element={<SideCart/>}></Route>
                        <Route path="/SearchAll" element={<SearchAll/>}></Route>

                    </Routes>
                </BrowserRouter>
            </div>

            {/* <Home-Section Components>
                <HomePage />
            </Home-Section> */}

            {/* <shop-section Components>
                <ShopSidebar />
                <ShopnoSidebar />
                <ProductV1 />
                <ProductV2 />
                <ProductV3 />
                <ProductV4 />
                <ProductV5 />
                <ProductV6 />
                <ProductV7 />
            </shop-section> */}
            {/* 
            <Page-section Components>
                <Wishlist />
                <Error />
                <SignUP />
                <Signin />
                <Reset />
                <Forgot />
                <Comingsoon />
                <Cart />
                <Checkout />
                <Typography />
                <Policy />
            </Page-section> */}
        </>
    )
}