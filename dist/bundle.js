/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project_03_odincafe/./src/css/style.css?");

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!*****************************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./arrow-up.svg\": \"./src/img/arrow-up.svg\",\n\t\"./background2.jpg\": \"./src/img/background2.jpg\",\n\t\"./bagel1.jpg\": \"./src/img/bagel1.jpg\",\n\t\"./bagel4.jpg\": \"./src/img/bagel4.jpg\",\n\t\"./burger-icon.svg\": \"./src/img/burger-icon.svg\",\n\t\"./cafe1.jpg\": \"./src/img/cafe1.jpg\",\n\t\"./desert1.jpg\": \"./src/img/desert1.jpg\",\n\t\"./desert2.jpg\": \"./src/img/desert2.jpg\",\n\t\"./desert3.jpg\": \"./src/img/desert3.jpg\",\n\t\"./drink.jpg\": \"./src/img/drink.jpg\",\n\t\"./drink1.jpg\": \"./src/img/drink1.jpg\",\n\t\"./drink2.jpg\": \"./src/img/drink2.jpg\",\n\t\"./drink3.jpg\": \"./src/img/drink3.jpg\",\n\t\"./food1.jpg\": \"./src/img/food1.jpg\",\n\t\"./food2.jpg\": \"./src/img/food2.jpg\",\n\t\"./food3.jpg\": \"./src/img/food3.jpg\",\n\t\"./logo.png\": \"./src/img/logo.png\",\n\t\"./logo3.jpg\": \"./src/img/logo3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\nfunction importAll(r) {\r\n    return r.keys().map(r);\r\n}\r\n\r\nconst images = importAll(__webpack_require__(\"./src/img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\"));\r\n\r\nclass OdinCafe{\r\n    constructor(){\r\n        this.header = document.querySelector(\".header\");\r\n        this.footer = document.querySelector(\".footer\");\r\n        this.mainContent = document.querySelector(\".main\");\r\n        this.CURRENT_PAGE = 0;\r\n    }\r\n\r\n    __refresh_mainContent() {\r\n    \r\n            // 滾動到頁面頂部\r\n        window.scrollTo({\r\n                top: 0,\r\n                behavior: 'smooth'\r\n            });\r\n        this.mainContent.innerHTML = \"\";\r\n    }\r\n\r\n    create_header() {\r\n        //header start\r\n        const header_start = document.createElement(\"div\");\r\n        header_start.classList.add(\"header-start\");\r\n\r\n        const set_logo = document.createElement(\"img\");\r\n        set_logo.src = \"./img/logo.png\";\r\n\r\n        const logo_text = document.createElement(\"div\");\r\n        logo_text.classList.add(\"logo-text\");\r\n        logo_text.textContent = \"Odin Cafe\";\r\n        header_start.append(set_logo, logo_text);\r\n\r\n        //header end\r\n        const header_end = document.createElement(\"div\");\r\n        header_end.classList.add(\"header-end\");\r\n\r\n        const home_btn = document.createElement(\"button\");\r\n        home_btn.classList.add(\"home-btn\");\r\n        home_btn.textContent = \"Home\";\r\n\r\n        const menu_btn = document.createElement(\"button\");\r\n        menu_btn.classList.add(\"menu-btn\");\r\n        menu_btn.textContent = \"Menu\";\r\n\r\n        const contact_btn = document.createElement(\"button\");\r\n        contact_btn.classList.add(\"contact-btn\");\r\n        contact_btn.textContent = \"Contact\";\r\n        header_end.append(home_btn, menu_btn, contact_btn);\r\n        \r\n        this.header.append(header_start, header_end);\r\n    }\r\n\r\n    create_home_page() {\r\n        window.onload = function() {\r\n            // 滾動到頁面頂部\r\n            window.scrollTo({\r\n                top: 0,\r\n                behavior: 'smooth'\r\n            });\r\n        };\r\n        const home_img_div = document.createElement(\"div\");\r\n        home_img_div.classList.add(\"home-img-div\");\r\n\r\n        const about_div = document.createElement(\"div\");\r\n        about_div.classList.add(\"about-div\");\r\n\r\n        const about_title = document.createElement(\"div\");\r\n        about_title.classList.add(\"about-title\");\r\n        about_title.textContent = \"About us\";\r\n\r\n        const about_text = document.createElement(\"div\");\r\n        about_text.classList.add(\"about_text\");\r\n        about_text.textContent = \"From a humble roaster supporting adoption families to the vibrant community hub we’ve become, love has motivated every new venture at Just Love Coffee. At our coffee cafe, we care deeply about who we are, who we serve, and what we do. Our mission is to ensure that every guest experiences genuine and sincere customer service that warms their heart and makes them feel better. Our unique atmosphere is what drives guests to visit their local Just Love Coffee Café for breakfast, lunch, and coffee time after time. We have intentionally crafted an inviting space that breaks away from the traditional, stuffy reputation of a specialty breakfast coffee shop. We aim to make everyone feel welcome whether they prefer a high-end brew or a classic cup of Folgers. But our sense of community goes beyond our coffee cafes. We actively involve ourselves in the community through fundraising opportunities, charity, and more. We believe that coffee shops should be the heart of a community, and we work hard to provide a welcoming space for everyone to come together and connect. Stop by a Just Love Coffee Cafe for lunch and feel the love when you order a hand-roasted coffee or delicious cafe-inspired menu creation.\"\r\n\r\n        about_div.append(about_title, about_text);\r\n\r\n        this.mainContent.append(home_img_div, about_div);\r\n        this.CURRENT_PAGE = 0;\r\n    }\r\n\r\n    __create_menu_btn1(menu_content){\r\n        const menu_imgs = document.createElement(\"div\");\r\n        menu_imgs.classList.add(\"menu-imgs\");\r\n        \r\n        const items = [\r\n            { className: \"menu-drink\", imgSrc: \"./img/drink.jpg\", name: \"Drink\", id:\"drink\" },\r\n            { className: \"menu-food\", imgSrc: \"./img/bagel4.jpg\", name: \"Food\", id:\"food\" },\r\n            { className: \"menu-desert\", imgSrc: \"./img/desert3.jpg\", name: \"Desert\", id:\"desert\" }\r\n        ];\r\n        \r\n        //頁面 >= 720px時\r\n        items.forEach(item => {\r\n            console.log(\"1\");\r\n            const menuItem = document.createElement(\"div\");\r\n            menuItem.setAttribute(\"name\", item.name);\r\n            menuItem.setAttribute(\"id\", item.id);\r\n            menuItem.classList.add(item.className);\r\n        \r\n            const menuItemImg = document.createElement(\"img\");\r\n            menuItemImg.src = item.imgSrc;\r\n        \r\n            menuItem.append(menuItemImg);\r\n            menu_imgs.append(menuItem);\r\n        });\r\n\r\n        const menu_title = document.createElement(\"span\");\r\n        menu_title.classList.add(\"menu-title1\");\r\n        menu_title.textContent = \"Menu\";\r\n\r\n        menu_content.append(menu_imgs, menu_title);\r\n        menu_imgs.append(menu_title);\r\n\r\n        // 調整好後開始監聽\r\n        document.querySelectorAll('.menu-imgs > div').forEach(item => {\r\n            console.log(item);\r\n            item.addEventListener('mouseenter', event => {\r\n                const menu_imgs = document.querySelector(\".menu-imgs\");\r\n                //創建hover文字容器\r\n                const show_menu_name = document.createElement(\"span\");\r\n                show_menu_name.classList.add(\"show-menu-name\");\r\n                menu_imgs.append(show_menu_name);\r\n        \r\n                //拿圖片id\r\n                var get_menu_name = item.getAttribute(\"name\");\r\n                show_menu_name.textContent = get_menu_name;\r\n        \r\n                //丟圖片id給新創容器class\r\n                var get_menu_id = item.getAttribute(\"id\");\r\n                show_menu_name.setAttribute(\"class\", get_menu_id);\r\n                show_menu_name.classList.add(\"show-menu-name\");\r\n            });\r\n        \r\n            item.addEventListener('mouseout', event => {\r\n                const show_menu_name = document.querySelector(\".show-menu-name\");\r\n                show_menu_name.remove();\r\n            });\r\n        });\r\n        document.querySelectorAll(\".menu-imgs > div > img\").forEach(items => {\r\n            items.addEventListener(\"click\", (event) => {\r\n                // 獲取當前點擊的圖片\r\n                let current_click = event.target;\r\n                \r\n                // 獲取當前點擊圖片的父元素的 name\r\n                let current_click_name = current_click.parentNode.getAttribute(\"name\");\r\n                \r\n                //獲取滑動目標的位置\r\n                let target = document.querySelector(\".\" + current_click_name);\r\n                let target_position = target.getBoundingClientRect();\r\n\r\n                // 滾動到當前點擊圖片的位置\r\n                window.scrollTo({\r\n                    top: target_position.top +  window.pageYOffset,\r\n                    behavior: 'smooth'\r\n                });\r\n            });\r\n        });\r\n    }\r\n\r\n    __create_menu_btn2 (menu_content) {\r\n        const menu_btns = document.createElement(\"div\");\r\n        menu_btns.classList.add(\"menu-btns\");\r\n\r\n        const menu_title = document.createElement(\"p\");\r\n        menu_title.classList.add(\"menu-title2\");\r\n        menu_title.textContent = \"Menu\";\r\n        menu_btns.append(menu_title);\r\n\r\n        const menu_btn_items = [\r\n            {className:\"drink-btn\", name:\"Drink\"},\r\n            {className:\"food-btn\", name:\"Food\"},\r\n            {className:\"desert-btn\", name:\"Desert\"},\r\n        ]\r\n        menu_btn_items.forEach(item => {\r\n            const menu_item = document.createElement(\"a\");\r\n            menu_item.classList.add(item.className);\r\n            menu_item.setAttribute(\"href\", \"#\");\r\n            menu_item.setAttribute(\"name\", item.name);\r\n            menu_item.textContent = item.name;\r\n            menu_btns.append(menu_item);\r\n        });\r\n\r\n        menu_content.append(menu_btns);\r\n\r\n        document.querySelectorAll(\".menu-btns > a\").forEach(items => {\r\n            items.addEventListener(\"mouseover\", (event) => {\r\n                event.target.style.color = \"#34738e\";\r\n            })\r\n            items.addEventListener(\"mouseout\", (event) => {\r\n                event.target.style.color = \"#1f4a5c\";\r\n            })\r\n            items.addEventListener(\"click\", (event) => {\r\n                // 獲取當前點擊的圖片\r\n                let current_click = event.target;\r\n                \r\n                // 獲取當前點擊圖片的父元素的 name\r\n                let current_click_name = current_click.getAttribute(\"name\");\r\n                \r\n                //獲取滑動目標的位置\r\n                let target = document.querySelector(\".\" + current_click_name);\r\n                let target_position = target.getBoundingClientRect();\r\n\r\n\r\n                // 滾動到當前點擊圖片的位置\r\n                window.scrollTo({\r\n                    top: target_position.top +  window.pageYOffset,\r\n                    behavior: 'smooth'\r\n                });\r\n            });\r\n        })\r\n    }\r\n\r\n    __create_cruser_function(cases) {\r\n        const menu_content = document.querySelector(\".menu-content\")\r\n        if(cases === 1) {\r\n            this.__create_menu_btn1(menu_content);\r\n        }else if(cases === 2) {\r\n            this.__create_menu_btn2(menu_content);\r\n        }\r\n    }\r\n\r\n    create_menu_page() {\r\n        // 創建線條\r\n        function create_line(parentElement, title) {\r\n            const line = document.createElement(\"span\");\r\n            line.classList.add(\"line\");\r\n            line.classList.add(title);\r\n            const line_left = document.createElement(\"span\");\r\n            line_left.classList.add(\"line-left\");\r\n            const line_name = document.createElement(\"span\");\r\n            line_name.classList.add(\"line-name\");\r\n            const line_right = document.createElement(\"span\");\r\n            line_right.classList.add(\"line-right\");\r\n            line_name.textContent = title;\r\n            line.append(line_left, line_right, line_name);\r\n            parentElement.append(line);\r\n        }\r\n        // 變數\r\n        const menu_content = document.createElement(\"div\");\r\n        menu_content.classList.add(\"menu-content\");\r\n        const menu_items = [\r\n            {className: \"drink1\", imgSrc: \"./img/drink1.jpg\", title:\"Black coffee\", parent:\".drink-area\", price:\"NT$130\", create_line:true, line_name:\"Drink\"},\r\n            {className: \"drink2\", imgSrc: \"./img/drink2.jpg\", title:\"Latte\", parent:\".drink-area\", price:\"NT$150\"},\r\n            {className: \"drink3\", imgSrc: \"./img/drink3.jpg\", title:\"Sparkling water\", parent:\".drink-area\", price:\"NT$130\"},\r\n            {className: \"food1\", imgSrc: \"./img/food1.jpg\", title:\"Croissant\", parent:\".food-area\", price:\"NT$230\", create_line:true, line_name:\"Food\"},\r\n            {className: \"food2\", imgSrc: \"./img/food2.jpg\", title:\"Panini\", parent:\".food-area\", price:\"NT$210\"},\r\n            {className: \"food3\", imgSrc: \"./img/food3.jpg\", title:\"Bagel\", parent:\".food-area\", price:\"NT$210\"},\r\n            {className: \"desert1\", imgSrc: \"./img/desert1.jpg\", title:\"Brownie\", parent:\".desert-area\", price:\"NT$180\", create_line:true, line_name:\"Desert\"},\r\n            {className: \"desert2\", imgSrc: \"./img/desert2.jpg\", title:\"Cupcake\", parent:\".desert-area\", price:\"NT$80\"},\r\n            {className: \"desert3\", imgSrc: \"./img/desert3.jpg\", title:\"Waffle\", parent:\".desert-area\", price:\"NT$180\"}\r\n        ]\r\n\r\n        // menu  頁面上的資訊\r\n        this.mainContent.append(menu_content);\r\n        this.CURRENT_PAGE = 1;\r\n\r\n        //判斷載入時頁面大小\r\n        if( window.innerWidth >= 720) {\r\n            this.__create_cruser_function(1);\r\n        }else {\r\n            this.__create_cruser_function(2);\r\n        }\r\n\r\n        //回到最上方按鈕\r\n        const back_top_btn = document.createElement(\"div\");\r\n        back_top_btn.setAttribute(\"id\", \"back-top-btn\")\r\n        menu_content.append(back_top_btn);\r\n\r\n        // 當用戶滾動時調用的函數\r\n        window.onscroll = function() {\r\n            scrollFunction();\r\n        };\r\n\r\n        function scrollFunction() {\r\n            // 當滾動高度超過20px時顯示按鈕\r\n            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n                back_top_btn.style.display = \"block\";\r\n            } else {\r\n                back_top_btn.style.display = \"none\";\r\n            }\r\n        }\r\n\r\n        document.querySelector(\"#back-top-btn\").addEventListener('click', function() {\r\n            // 平滑滾動到頁面頂部\r\n            window.scrollTo({\r\n                top: 0,\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n        \r\n        //menu類別區塊創建\r\n        const drink_area = document.createElement(\"div\");\r\n        drink_area.classList.add(\"drink-area\");\r\n        document.body.appendChild(drink_area);\r\n        \r\n        const food_area = document.createElement(\"div\");\r\n        food_area.classList.add(\"food-area\");\r\n        document.body.appendChild(food_area);\r\n        \r\n        const desert_area = document.createElement(\"div\");\r\n        desert_area.classList.add(\"desert-area\");\r\n        document.body.appendChild(desert_area);\r\n        \r\n        menu_items.forEach(item => {\r\n            const current_area = document.querySelector(item.parent);\r\n\r\n            if(item.create_line) {\r\n                create_line(current_area, item.line_name);\r\n            }\r\n\r\n            const menu_box = document.createElement(\"div\");\r\n            menu_box.classList.add(item.className);\r\n        \r\n            const menu_img = document.createElement(\"img\");\r\n            menu_img.classList.add(\"menu-img\");\r\n            menu_img.src = item.imgSrc;\r\n        \r\n            const menu_title = document.createElement(\"h2\");\r\n            menu_title.textContent = item.title;\r\n        \r\n            const menu_price = document.createElement(\"div\");\r\n            menu_price.classList.add(\"menu-price\");\r\n            menu_price.textContent = item.price;\r\n            \r\n            const menu_text = document.createElement(\"div\");\r\n            menu_text.classList.add(\"text\");\r\n            menu_text.textContent = \"Mollis aliquam ut porttitor leo. Molestie at elementum eu facilisis. Odio facilisis mauris sit amet massa vitae tortor condimentum. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Eget sit amet tellus cras adipiscing. Condimentum lacinia quis vel eros. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Purus in massa tempor nec feugiat nisl pretium fusce id. Sed risus pretium quam vulputate dignissim suspendisse in. Consequat mauris nunc congue nisi vitae suscipit. Accumsan tortor posuere ac ut consequat semper viverra nam.\";\r\n            menu_box.append(menu_img, menu_title, menu_price, menu_text);\r\n            current_area.append(menu_box);\r\n            this.mainContent.append(current_area);\r\n        });\r\n\r\n        window.addEventListener('resize', () => {\r\n            const width = window.innerWidth;\r\n            const menu_imgs = document.querySelector('.menu-imgs');\r\n            const menu_btns = document.querySelector('.menu-btns');\r\n            console.log(width);\r\n            if (width <= 720) {\r\n                if (menu_imgs) {\r\n                    menu_imgs.remove();\r\n                    this.__create_cruser_function(2);\r\n                }\r\n            } else {\r\n                if(menu_btns){\r\n                    menu_btns.remove();\r\n                    this.__create_cruser_function(1);\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    create_contact_page() {\r\n        const contact_content = document.createElement(\"div\");\r\n        contact_content.classList.add(\"contact-content\");\r\n\r\n        const map = document.createElement(\"iframe\");\r\n        map.classList.add(\"map\");\r\n        map.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.143014031726!2d120.1900503871582!3d23.004093000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77c3ee12e67f%3A0x9ceaf462861f44b3!2z6Lev5ZKW5ZWhUm9hZCBDYWbDqS_lpJbluLblkpbllaHlkKc!5e0!3m2!1szh-TW!2stw!4v1716792439929!5m2!1szh-TW!2stw\";\r\n        map.setAttribute(\"allowfullscreen\", \"\");\r\n        map.setAttribute(\"referrerpolicy\", \"no-referrer-when-downgrade\");\r\n\r\n        const contact_text_div = document.createElement(\"div\");\r\n        contact_text_div.classList.add(\"contact-text-div\");\r\n        const contact_title = document.createElement(\"p\");\r\n        contact_title.classList.add(\"contact-title\");\r\n        contact_title.textContent = \"Contact\";\r\n\r\n        const address = document.createElement(\"p\");\r\n        address.classList.add(\"address\");\r\n        address.textContent = \"Add: 台南市北區長榮路五段55號\";\r\n\r\n        const tel = document.createElement(\"p\");\r\n        tel.classList.add(\"tel\");\r\n        tel.textContent = \"Tel: 06-123-4567\";\r\n\r\n        const mail = document.createElement(\"p\");\r\n        mail.textContent = \"gmail: grtj1417@gmail.com\";\r\n\r\n        contact_text_div.append(contact_title, address, tel, mail);\r\n        contact_content.append(map, contact_text_div);\r\n\r\n        this.mainContent.append(contact_content);\r\n\r\n        this.CURRENT_PAGE = 2;\r\n    }\r\n\r\n    create_footer() {\r\n        const footer = document.querySelector(\".footer\");\r\n        footer.innerHTML = \"&copy; copyright 2024 by vevina\";\r\n    }\r\n\r\n    /*\r\n    * @param {pageName} string of a page's name\r\n    */\r\n    swap_page(pageName) {\r\n        this.__refresh_all();\r\n        this.CURRENT_PAGE = pageName;\r\n        \r\n    }\r\n}\r\n\r\nconst startListening = new OdinCafe();\r\n\r\nstartListening.create_header();\r\nstartListening.create_home_page();\r\nstartListening.create_footer();\r\n\r\nwindow.onload = function() {\r\n    // 滾動到頁面頂部\r\n    window.scrollTo({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n    });\r\n};\r\nwindow.onbeforeunload = function(){\r\n    //刷新后页面自动回到顶部\r\n  document.documentElement.scrollTop = 0;  //ie下\r\n  document.body.scrollTop = 0;  //非ie\r\n}\r\nconst home_btn = document.querySelector(\".home-btn\");\r\nhome_btn.addEventListener(\"click\", () => {\r\n    if(startListening.CURRENT_PAGE !== 0){\r\n        startListening.__refresh_mainContent();\r\n        startListening.create_home_page();\r\n    }\r\n})\r\n\r\nconst menu_btn = document.querySelector(\".menu-btn\");\r\nmenu_btn.addEventListener(\"click\", () => {\r\n    if(startListening.CURRENT_PAGE !== 1){\r\n        startListening.__refresh_mainContent();\r\n        startListening.create_menu_page();\r\n    }\r\n})\r\n\r\nconst contact_btn = document.querySelector(\".contact-btn\");\r\ncontact_btn.addEventListener(\"click\", () => {\r\n    if(startListening.CURRENT_PAGE !== 2){\r\n        startListening.__refresh_mainContent();\r\n        startListening.create_contact_page();\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://project_03_odincafe/./src/index.js?");

/***/ }),

/***/ "./src/img/arrow-up.svg":
/*!******************************!*\
  !*** ./src/img/arrow-up.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/arrow-up.svg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/arrow-up.svg?");

/***/ }),

/***/ "./src/img/background2.jpg":
/*!*********************************!*\
  !*** ./src/img/background2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/background2.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/background2.jpg?");

/***/ }),

/***/ "./src/img/bagel1.jpg":
/*!****************************!*\
  !*** ./src/img/bagel1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/bagel1.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/bagel1.jpg?");

/***/ }),

/***/ "./src/img/bagel4.jpg":
/*!****************************!*\
  !*** ./src/img/bagel4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/bagel4.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/bagel4.jpg?");

/***/ }),

/***/ "./src/img/burger-icon.svg":
/*!*********************************!*\
  !*** ./src/img/burger-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/burger-icon.svg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/burger-icon.svg?");

/***/ }),

/***/ "./src/img/cafe1.jpg":
/*!***************************!*\
  !*** ./src/img/cafe1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/cafe1.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/cafe1.jpg?");

/***/ }),

/***/ "./src/img/desert1.jpg":
/*!*****************************!*\
  !*** ./src/img/desert1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/desert1.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/desert1.jpg?");

/***/ }),

/***/ "./src/img/desert2.jpg":
/*!*****************************!*\
  !*** ./src/img/desert2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/desert2.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/desert2.jpg?");

/***/ }),

/***/ "./src/img/desert3.jpg":
/*!*****************************!*\
  !*** ./src/img/desert3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/desert3.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/desert3.jpg?");

/***/ }),

/***/ "./src/img/drink.jpg":
/*!***************************!*\
  !*** ./src/img/drink.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/drink.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/drink.jpg?");

/***/ }),

/***/ "./src/img/drink1.jpg":
/*!****************************!*\
  !*** ./src/img/drink1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/drink1.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/drink1.jpg?");

/***/ }),

/***/ "./src/img/drink2.jpg":
/*!****************************!*\
  !*** ./src/img/drink2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/drink2.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/drink2.jpg?");

/***/ }),

/***/ "./src/img/drink3.jpg":
/*!****************************!*\
  !*** ./src/img/drink3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/drink3.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/drink3.jpg?");

/***/ }),

/***/ "./src/img/food1.jpg":
/*!***************************!*\
  !*** ./src/img/food1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/food1.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/food1.jpg?");

/***/ }),

/***/ "./src/img/food2.jpg":
/*!***************************!*\
  !*** ./src/img/food2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/food2.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/food2.jpg?");

/***/ }),

/***/ "./src/img/food3.jpg":
/*!***************************!*\
  !*** ./src/img/food3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/food3.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/food3.jpg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo.png\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/logo3.jpg":
/*!***************************!*\
  !*** ./src/img/logo3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo3.jpg\";\n\n//# sourceURL=webpack://project_03_odincafe/./src/img/logo3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;