$(() => {
    // //最顶端导航栏
    // class About {
    //     constructor(data) {
    //         this.data = data;

    //     }
    //     init() {
    //         this.render();
    //         this.clickEvent();
    //     }
    //     render() {
    //         let str1 = this.data.map(ele => `<div class="mgj_header_helper_mod"><div class="mgj_header_helper_title"><a href="">${ele.dt}</a><p class="mgj_header_helper_title_border"></p></div><ul>${ele.dd.map(item => `<li class="mgj_header_helper_item"><a href="">${item}</a></li>`).join("")}</ul></div>`).join("");

    //         $("<div class='mgj_header_helper'></div>").html(str1).insertBefore($(".mgj_header_hostname"));

    //     }
    //     clickEvent() {
    //         $(".about").hover(function () {
    //             $(".header-about-us-detail").toggle();
    //         })
    //         $(".header-about-us-detail").hover(function () {
    //             $(".header-about-us-detail").toggle();
    //         })
    //     }
    // }
    // $.getJSON("http://127.0.0.1/code/program/server/01about.php", data => (new About(data)).init());

//     //搜索栏
//     class Search {
//         constructor(data) {
//             this.data = data;

//         }
//         init() {
//             this.render();
//             this.hoverEvent();
//         }
//         render() {

//             let str2 = this.data.map(ele => `<dl class="category-item">
//     <dt class="header-category-title">${ele.dt}</dt>
//     ${ele.dd.map(item => `<dd class="header-category-item"><a href="">${item}</a></dd>`).join("")}
// </dl>`).join("");


//             $("<div id='header-content-category'></div>").addClass("header-content-category").appendTo($(".header-category"));
//             $("<div></div>").addClass("header-category-container").html(str2).appendTo($(".header-content-category"));
//         }
//         hoverEvent() {
//             $(".user-meta").hover(function () {
//                 $(".ext-mode").toggle();
//             })
//             $(".ext-mode").hover(function () {
//                 $(".ext-mode").toggle();
//             })

//             $(".header-category").hover(function () {
//                 $(".header-content-category").toggle();
//             })
//         }
//     }
//     $.getJSON("http://127.0.0.1/code/program/server/02search.php", data => (new Search(data)).init());
    $(".header-about-us").hover(function () {
        console.log("ok");
        
        // $(".header-about-us-detail").toggle();
            })

    //这是监听函数的末尾
})
