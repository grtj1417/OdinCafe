//webpack

// import './css/style.css';
// function importAll(r) {
//     return r.keys().map(r);
// }

// const images = importAll(require.context('./img', false, /\.(png|jpe?g|gif|svg)$/));

class OdinCafe{
    constructor(){
        this.header = document.querySelector(".header");
        this.footer = document.querySelector(".footer");
        this.mainContent = document.querySelector(".main");
        this.CURRENT_PAGE = 0;
    }

    __refresh_mainContent() {
    
            // 滾動到頁面頂部
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        this.mainContent.innerHTML = "";
    }

    create_header() {
        //header start
        const header_start = document.createElement("div");
        header_start.classList.add("header-start");

        const set_logo = document.createElement("img");
        set_logo.src = "./img/logo.png";

        const logo_text = document.createElement("div");
        logo_text.classList.add("logo-text");
        logo_text.textContent = "Odin Cafe";
        header_start.append(set_logo, logo_text);

        //header end
        const header_end = document.createElement("div");
        header_end.classList.add("header-end");

        const home_btn = document.createElement("button");
        home_btn.classList.add("home-btn");
        home_btn.textContent = "Home";

        const menu_btn = document.createElement("button");
        menu_btn.classList.add("menu-btn");
        menu_btn.textContent = "Menu";

        const contact_btn = document.createElement("button");
        contact_btn.classList.add("contact-btn");
        contact_btn.textContent = "Contact";
        header_end.append(home_btn, menu_btn, contact_btn);
        
        this.header.append(header_start, header_end);
    }

    create_home_page() {
        window.onload = function() {
            // 滾動到頁面頂部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        const home_img_div = document.createElement("div");
        home_img_div.classList.add("home-img-div");

        const about_div = document.createElement("div");
        about_div.classList.add("about-div");

        const about_title = document.createElement("div");
        about_title.classList.add("about-title");
        about_title.textContent = "About us";

        const about_text = document.createElement("div");
        about_text.classList.add("about_text");
        about_text.textContent = "From a humble roaster supporting adoption families to the vibrant community hub we’ve become, love has motivated every new venture at Just Love Coffee. At our coffee cafe, we care deeply about who we are, who we serve, and what we do. Our mission is to ensure that every guest experiences genuine and sincere customer service that warms their heart and makes them feel better. Our unique atmosphere is what drives guests to visit their local Just Love Coffee Café for breakfast, lunch, and coffee time after time. We have intentionally crafted an inviting space that breaks away from the traditional, stuffy reputation of a specialty breakfast coffee shop. We aim to make everyone feel welcome whether they prefer a high-end brew or a classic cup of Folgers. But our sense of community goes beyond our coffee cafes. We actively involve ourselves in the community through fundraising opportunities, charity, and more. We believe that coffee shops should be the heart of a community, and we work hard to provide a welcoming space for everyone to come together and connect. Stop by a Just Love Coffee Cafe for lunch and feel the love when you order a hand-roasted coffee or delicious cafe-inspired menu creation."

        about_div.append(about_title, about_text);

        this.mainContent.append(home_img_div, about_div);
        this.CURRENT_PAGE = 0;
    }

    __create_menu_btn1(menu_content){
        const menu_imgs = document.createElement("div");
        menu_imgs.classList.add("menu-imgs");
        
        const items = [
            { className: "menu-drink", imgSrc: "./img/drink.jpg", name: "Drink", id:"drink" },
            { className: "menu-food", imgSrc: "./img/bagel4.jpg", name: "Food", id:"food" },
            { className: "menu-desert", imgSrc: "./img/desert3.jpg", name: "Desert", id:"desert" }
        ];
        
        //頁面 >= 720px時
        items.forEach(item => {
            console.log("1");
            const menuItem = document.createElement("div");
            menuItem.setAttribute("name", item.name);
            menuItem.setAttribute("id", item.id);
            menuItem.classList.add(item.className);
        
            const menuItemImg = document.createElement("img");
            menuItemImg.src = item.imgSrc;
        
            menuItem.append(menuItemImg);
            menu_imgs.append(menuItem);
        });

        const menu_title = document.createElement("span");
        menu_title.classList.add("menu-title1");
        menu_title.textContent = "Menu";

        menu_content.append(menu_imgs, menu_title);
        menu_imgs.append(menu_title);

        // 調整好後開始監聽
        document.querySelectorAll('.menu-imgs > div').forEach(item => {
            console.log(item);
            item.addEventListener('mouseenter', event => {
                const menu_imgs = document.querySelector(".menu-imgs");
                //創建hover文字容器
                const show_menu_name = document.createElement("span");
                show_menu_name.classList.add("show-menu-name");
                menu_imgs.append(show_menu_name);
        
                //拿圖片id
                var get_menu_name = item.getAttribute("name");
                show_menu_name.textContent = get_menu_name;
        
                //丟圖片id給新創容器class
                var get_menu_id = item.getAttribute("id");
                show_menu_name.setAttribute("class", get_menu_id);
                show_menu_name.classList.add("show-menu-name");
            });
        
            item.addEventListener('mouseout', event => {
                const show_menu_name = document.querySelector(".show-menu-name");
                show_menu_name.remove();
            });
        });
        document.querySelectorAll(".menu-imgs > div > img").forEach(items => {
            items.addEventListener("click", (event) => {
                // 獲取當前點擊的圖片
                let current_click = event.target;
                
                // 獲取當前點擊圖片的父元素的 name
                let current_click_name = current_click.parentNode.getAttribute("name");
                
                //獲取滑動目標的位置
                let target = document.querySelector("." + current_click_name);
                let target_position = target.getBoundingClientRect();

                // 滾動到當前點擊圖片的位置
                window.scrollTo({
                    top: target_position.top +  window.pageYOffset,
                    behavior: 'smooth'
                });
            });
        });
    }

    __create_menu_btn2 (menu_content) {
        const menu_btns = document.createElement("div");
        menu_btns.classList.add("menu-btns");

        const menu_title = document.createElement("p");
        menu_title.classList.add("menu-title2");
        menu_title.textContent = "Menu";
        menu_btns.append(menu_title);

        const menu_btn_items = [
            {className:"drink-btn", name:"Drink"},
            {className:"food-btn", name:"Food"},
            {className:"desert-btn", name:"Desert"},
        ]
        menu_btn_items.forEach(item => {
            const menu_item = document.createElement("a");
            menu_item.classList.add(item.className);
            menu_item.setAttribute("href", "#");
            menu_item.setAttribute("name", item.name);
            menu_item.textContent = item.name;
            menu_btns.append(menu_item);
        });

        menu_content.append(menu_btns);

        document.querySelectorAll(".menu-btns > a").forEach(items => {
            items.addEventListener("mouseover", (event) => {
                event.target.style.color = "#34738e";
            })
            items.addEventListener("mouseout", (event) => {
                event.target.style.color = "#1f4a5c";
            })
            items.addEventListener("click", (event) => {
                // 獲取當前點擊的圖片
                let current_click = event.target;
                
                // 獲取當前點擊圖片的父元素的 name
                let current_click_name = current_click.getAttribute("name");
                
                //獲取滑動目標的位置
                let target = document.querySelector("." + current_click_name);
                let target_position = target.getBoundingClientRect();


                // 滾動到當前點擊圖片的位置
                window.scrollTo({
                    top: target_position.top +  window.pageYOffset,
                    behavior: 'smooth'
                });
            });
        })
    }

    __create_cruser_function(cases) {
        const menu_content = document.querySelector(".menu-content")
        if(cases === 1) {
            this.__create_menu_btn1(menu_content);
        }else if(cases === 2) {
            this.__create_menu_btn2(menu_content);
        }
    }

    create_menu_page() {
        // 創建線條
        function create_line(parentElement, title) {
            const line = document.createElement("span");
            line.classList.add("line");
            line.classList.add(title);
            const line_left = document.createElement("span");
            line_left.classList.add("line-left");
            const line_name = document.createElement("span");
            line_name.classList.add("line-name");
            const line_right = document.createElement("span");
            line_right.classList.add("line-right");
            line_name.textContent = title;
            line.append(line_left, line_right, line_name);
            parentElement.append(line);
        }
        // 變數
        const menu_content = document.createElement("div");
        menu_content.classList.add("menu-content");
        const menu_items = [
            {className: "drink1", imgSrc: "./img/drink1.jpg", title:"Black coffee", parent:".drink-area", price:"NT$130", create_line:true, line_name:"Drink"},
            {className: "drink2", imgSrc: "./img/drink2.jpg", title:"Latte", parent:".drink-area", price:"NT$150"},
            {className: "drink3", imgSrc: "./img/drink3.jpg", title:"Sparkling water", parent:".drink-area", price:"NT$130"},
            {className: "food1", imgSrc: "./img/food1.jpg", title:"Croissant", parent:".food-area", price:"NT$230", create_line:true, line_name:"Food"},
            {className: "food2", imgSrc: "./img/food2.jpg", title:"Panini", parent:".food-area", price:"NT$210"},
            {className: "food3", imgSrc: "./img/food3.jpg", title:"Bagel", parent:".food-area", price:"NT$210"},
            {className: "desert1", imgSrc: "./img/desert1.jpg", title:"Brownie", parent:".desert-area", price:"NT$180", create_line:true, line_name:"Desert"},
            {className: "desert2", imgSrc: "./img/desert2.jpg", title:"Cupcake", parent:".desert-area", price:"NT$80"},
            {className: "desert3", imgSrc: "./img/desert3.jpg", title:"Waffle", parent:".desert-area", price:"NT$180"}
        ]

        // menu  頁面上的資訊
        this.mainContent.append(menu_content);
        this.CURRENT_PAGE = 1;

        //判斷載入時頁面大小
        if( window.innerWidth >= 720) {
            this.__create_cruser_function(1);
        }else {
            this.__create_cruser_function(2);
        }

        //回到最上方按鈕
        const back_top_btn = document.createElement("div");
        back_top_btn.setAttribute("id", "back-top-btn")
        menu_content.append(back_top_btn);

        // 當用戶滾動時調用的函數
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            // 當滾動高度超過20px時顯示按鈕
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                back_top_btn.style.display = "block";
            } else {
                back_top_btn.style.display = "none";
            }
        }

        document.querySelector("#back-top-btn").addEventListener('click', function() {
            // 平滑滾動到頁面頂部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        //menu類別區塊創建
        const drink_area = document.createElement("div");
        drink_area.classList.add("drink-area");
        document.body.appendChild(drink_area);
        
        const food_area = document.createElement("div");
        food_area.classList.add("food-area");
        document.body.appendChild(food_area);
        
        const desert_area = document.createElement("div");
        desert_area.classList.add("desert-area");
        document.body.appendChild(desert_area);
        
        menu_items.forEach(item => {
            const current_area = document.querySelector(item.parent);

            if(item.create_line) {
                create_line(current_area, item.line_name);
            }

            const menu_box = document.createElement("div");
            menu_box.classList.add(item.className);
        
            const menu_img = document.createElement("img");
            menu_img.classList.add("menu-img");
            menu_img.src = item.imgSrc;
        
            const menu_title = document.createElement("h2");
            menu_title.textContent = item.title;
        
            const menu_price = document.createElement("div");
            menu_price.classList.add("menu-price");
            menu_price.textContent = item.price;
            
            const menu_text = document.createElement("div");
            menu_text.classList.add("text");
            menu_text.textContent = "Mollis aliquam ut porttitor leo. Molestie at elementum eu facilisis. Odio facilisis mauris sit amet massa vitae tortor condimentum. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Eget sit amet tellus cras adipiscing. Condimentum lacinia quis vel eros. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Purus in massa tempor nec feugiat nisl pretium fusce id. Sed risus pretium quam vulputate dignissim suspendisse in. Consequat mauris nunc congue nisi vitae suscipit. Accumsan tortor posuere ac ut consequat semper viverra nam.";
            menu_box.append(menu_img, menu_title, menu_price, menu_text);
            current_area.append(menu_box);
            this.mainContent.append(current_area);
        });

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const menu_imgs = document.querySelector('.menu-imgs');
            const menu_btns = document.querySelector('.menu-btns');
            console.log(width);
            if (width <= 720) {
                if (menu_imgs) {
                    menu_imgs.remove();
                    this.__create_cruser_function(2);
                }
            } else {
                if(menu_btns){
                    menu_btns.remove();
                    this.__create_cruser_function(1);
                }
            }
        });
    }

    create_contact_page() {
        const contact_content = document.createElement("div");
        contact_content.classList.add("contact-content");

        const map = document.createElement("iframe");
        map.classList.add("map");
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.143014031726!2d120.1900503871582!3d23.004093000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77c3ee12e67f%3A0x9ceaf462861f44b3!2z6Lev5ZKW5ZWhUm9hZCBDYWbDqS_lpJbluLblkpbllaHlkKc!5e0!3m2!1szh-TW!2stw!4v1716792439929!5m2!1szh-TW!2stw";
        map.setAttribute("allowfullscreen", "");
        map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

        const contact_text_div = document.createElement("div");
        contact_text_div.classList.add("contact-text-div");
        const contact_title = document.createElement("p");
        contact_title.classList.add("contact-title");
        contact_title.textContent = "Contact";

        const address = document.createElement("p");
        address.classList.add("address");
        address.textContent = "Add: 台南市北區長榮路五段55號";

        const tel = document.createElement("p");
        tel.classList.add("tel");
        tel.textContent = "Tel: 06-123-4567";

        const mail = document.createElement("p");
        mail.textContent = "gmail: grtj1417@gmail.com";

        contact_text_div.append(contact_title, address, tel, mail);
        contact_content.append(map, contact_text_div);

        this.mainContent.append(contact_content);

        this.CURRENT_PAGE = 2;
    }

    create_footer() {
        const footer = document.querySelector(".footer");
        footer.innerHTML = "&copy; copyright 2024 by vevina";
    }

    /*
    * @param {pageName} string of a page's name
    */
    swap_page(pageName) {
        this.__refresh_all();
        this.CURRENT_PAGE = pageName;
        
    }
}

const startListening = new OdinCafe();

startListening.create_header();
startListening.create_home_page();
startListening.create_footer();

window.onload = function() {
    // 滾動到頁面頂部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
}
const home_btn = document.querySelector(".home-btn");
home_btn.addEventListener("click", () => {
    if(startListening.CURRENT_PAGE !== 0){
        startListening.__refresh_mainContent();
        startListening.create_home_page();
    }
})

const menu_btn = document.querySelector(".menu-btn");
menu_btn.addEventListener("click", () => {
    if(startListening.CURRENT_PAGE !== 1){
        startListening.__refresh_mainContent();
        startListening.create_menu_page();
    }
})

const contact_btn = document.querySelector(".contact-btn");
contact_btn.addEventListener("click", () => {
    if(startListening.CURRENT_PAGE !== 2){
        startListening.__refresh_mainContent();
        startListening.create_contact_page();
    }
})
