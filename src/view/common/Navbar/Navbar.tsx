import "./Navbar.css";

export function Navbar() {
    return (
        <header className="header-main_area header-main_area-2 header-main_area-3">
            <div className="header-middle_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5">
                            <div className="header-logo_area">
                                <a href="index.html">
                                    <img src="uren/assets/images/menu/logo/Parts%20LK%20Logo%202%20Parts-2.png"
                                         alt="partsLk Logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 d-none d-lg-block">
                            <div className="hm-form_area">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option value="0">All Categories</option>
                                        <option value="1">Spare Parts</option>
                                        <option value="7">Tools & Garage</option>
                                        <option value="15">Accessories</option>
                                        ƒ
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..."/>
                                    <button className="header-search_btn" type="submit"><i
                                        className="ion-ios-search-strong"><span>Search</span></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-9 col-sm-7">
                            <div className="header-right_area">
                                <ul>
                                    <li className="mobile-menu_wrap d-flex d-lg-none">
                                        <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </a>
                                    </li>
                                    <li className="minicart-wrap">
                                        <a href="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count">0</span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price">0</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <a href="tel://+94766409384"><i className="ion-android-call"></i>+94 76 640 9384</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-top_area bg--primary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="custom-category_col col-12">
                            <div className="category-menu category-menu-hidden">
                                <div className="category-heading">
                                    <h2 className="categories-toggle">
                                        <span>Shop By</span>
                                        <span>Department</span>
                                    </h2>
                                </div>
                                <div id="cate-toggle" className="category-menu-list">
                                    <ul>
                                        <li className=""><a href="pages/item-right-sidebar.html">Car Parts</a>

                                        </li>
                                        <li className=""><a href="pages/item-right-sidebar.html">Tools &amp;
                                            Accessories</a>

                                        </li>
                                        <li className=""><a href="pages/item-right-sidebar.html">Suspension Systems</a>

                                        </li>
                                        <li className=""><a href="pages/item-right-sidebar.html">Turbo System</a>

                                        </li>
                                        <li className=""><a href="pages/item-right-sidebar.html">Oils & Fluids</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-menu_col col-12 d-none d-lg-block">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active"><a href="index.html">Home</a>

                                        </li>
                                        <li className="megamenu-holder "><a href="javascript:void(0)"
                                                                            id="shop-nav-btn">Shop </a>
                                        </li>
                                        <li className="megamenu-holder "><a
                                            href="pages/item-right-sidebar.html">Item </a>
                                        </li>
                                        <li><a href="pages/places.html">Garages</a></li>
                                        <li className=""><a href="pages/about-us.html">About Us</a></li>
                                        <li className=""><a href="pages/contact.html">Contact</a></li>
                                        <li className="admin-menu"><a href="" hidden>Admin</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="custom-setting_col col-12 d-none d-lg-block">
                            <div className="ht-right_area">
                                <div className="ht-menu">
                                    <ul>
                                        <li><a href="javascript:void(0)"><span>$</span> <span>Currency</span><i
                                            className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown ht-currency">
                                                <li><a href="javascript:void(0)">€ EUR</a></li>
                                                <li className="active"><a href="javascript:void(0)">£ Pound Sterling</a>
                                                </li>
                                                <li><a href="javascript:void(0)">$ Us Dollar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0)"><span><img
                                            src="uren/assets/images/menu/icon/1.jpg"
                                            alt=""/></span> <span>Language</span> <i
                                            className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown">
                                                <li className="active"><a href="javascript:void(0)"><img
                                                    src="uren/assets/images/menu/icon/1.jpg" alt="JB's Language Icon"/>English</a>
                                                </li>
                                                <li><a href="javascript:void(0)"><img
                                                    src="uren/assets/images/menu/icon/2.jpg" alt="JB's Language Icon"/>Français</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="pages/my-account.html"><span className="fa fa-user"></span> <span>My
                                                Account</span><i className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown ht-my_account">
                                                <li><a href="pages/register-page.html" id="register-btn">Register</a>
                                                </li>
                                                <li className="active"><a href="pages/login-page.html"
                                                                          id="login-btn">Login</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-search_col col-12 d-none d-md-block d-lg-none">
                            <div className="hm-form_area">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option value="0">All Categories</option>
                                        <option value="16">Accessories</option>
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..."/>
                                    <button className="header-search_btn" type="submit"><i
                                        className="ion-ios-search-strong"><span>Search</span></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-top_area header-sticky bg--primary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 d-lg-block d-none">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active"><a href="index.html">Home</a>

                                        </li>
                                        <li className="megamenu-holder "><a
                                            href="pages/item-right-sidebar.html">Item </a>
                                        </li>
                                        <li><a href="pages/places.html">Garages</a></li>
                                        <li className=""><a href="pages/about-us.html">About Us</a></li>
                                        <li className=""><a href="pages/contact.html">Contact</a></li>
                                        <li className="admin-menu"><a href="" hidden>Admin</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-3 d-block d-lg-none">
                            <div className="header-logo_area header-sticky_logo">
                                <a href="index.html">
                                    <img src="uren/assets/images/menu/logo/Parts%20LK%20Logo%202%20Parts-2.png"
                                         alt="partslk Logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-sm-9">
                            <div className="header-right_area">
                                <ul>
                                    <li className="mobile-menu_wrap d-flex d-lg-none">
                                        <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                            <i className="ion-navicon"></i>
                                        </a>
                                    </li>
                                    <li className="minicart-wrap" id="minicart-btn">
                                        <a href="#miniCart" className="minicart-btn toolbar-btn">
                                            <div className="minicart-count_area">
                                                <span className="item-count"></span>
                                                <i className="ion-bag"></i>
                                            </div>
                                            <div className="minicart-front_text">
                                                <span>Cart:</span>
                                                <span className="total-price"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contact-us_wrap">
                                        <a href="tel://+94766409384"><i className="ion-android-call"></i>+94 766 409 384</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-menu-inner">
                    <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4>Shopping Cart</h4>
                        </div>
                        <ul className="minicart-list">

                        </ul>
                    </div>
                    <div className="minicart-item_total">
                        <span>Subtotal</span>
                        <span className="ammount"></span>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="pages/cart.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</a>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="pages/checkout.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</a>
                    </div>
                </div>
            </div>
            <div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-menu-inner">
                    <div className="container">
                        <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                        <div className="offcanvas-inner_search">
                            <form action="#" className="inner-searchbox">
                                <input type="text" placeholder="Search for item..."/>
                                <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i>
                                </button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul className="mobile-menu">
                                <ul>
                                    <li className="dropdown-holder active"><a href="index.html">Home</a>

                                    </li>
                                    <li className="megamenu-holder "><a href="pages/item-right-sidebar.html">Shop </a>
                                    </li>
                                    <li><a href="pages/places.html">Garages</a></li>
                                    <li className=""><a href="pages/about-us.html">About Us</a></li>
                                    <li className=""><a href="pages/contact.html">Contact</a></li>
                                    <li className="admin-menu"><a href="" hidden>Admin</a></li>
                                </ul>
                            </ul>
                        </nav>
                        <nav className="offcanvas-navigation user-setting_area">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><a href="javascript:void(0)"><span
                                    className="mm-text">User
                                        Setting</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="" id="my-account-btn">
                                                <span className="mm-text">My Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages/login-page.html">
                                                <span className="mm-text">Login | Register</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                    className="mm-text">Currency</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">EUR €</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">USD $</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                    className="mm-text">Language</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Romanian</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Japanese</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}