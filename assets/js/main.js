"use strict";!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=o.length,t=window.console=window.console||{};--i;)t[e=o[i]]||(t[e]=n)}(),jQuery(document).ready(function(t){var n,o=t(".carousel"),e=t("#intro"),i=t(".carousel-item").length,a=t("body"),c=t(".carousel-pager");function r(e){var n=e.replace(/[*+?^$.[\]{}()|\\/]/g,"\\$&"),o=location.search.match(new RegExp("[?&]".concat(n,"=([^&]+)(&|$)"))),i=o&&decodeURIComponent(o[1].replace(/\+/g," "));return t.isNumeric(i)?parseInt(i,10):0}function s(){n=t("#intro .carousel-item.active").index()+1,t(".carousel-counter").text("".concat(n,"/").concat(i))}function l(e){n===e?a.addClass("is-highlight"):1===n&&a.removeClass("is-highlight")}o.carousel({interval:0}),e.carousel(r("slide")),0!==r("slide")&&a.removeClass("is-highlight"),s(),e.on("slid.bs.carousel",function(){s()}),e.on("slide.bs.carousel",function(){n=t(".carousel-item.active").index()+1}),o.swiperight(function(){o.carousel("prev"),l(2)}),t(".carousel-control.prev").click(function(){l(2)}),o.swipeleft(function(){o.carousel("next"),l(i)}),t(".carousel-control.next, .intro-section.is-highlight .link-next").click(function(){l(i)}),t(".p-home .header-logo").click(function(e){return e.stopPropagation(),o.carousel(0),a.addClass("is-highlight"),!1});var d={titles:["Плюсы и минус","Услуги","Цены","Об агентстве","Блог","В начало"],setTitle:function(){t(".carousel-control.next").text(this.titles[n-1])}};d.setTitle(),o.on("slid.bs.carousel",function(){d.setTitle()}),o.on("slide.bs.carousel",function(){c.addClass("hidden")}),o.on("slid.bs.carousel",function(){c.removeClass("hidden")}),t(".logo-link").click(function(){t(".navbar-primary > li a").blur()})});var _this=void 0;jQuery(document).ready(function(n){var e,o,i;window.matchMedia("(min-width: 960px)").matches&&(e=n(".has-context-menu"),o=n(".context-menu"),i="undefined"!=typeof InstallTrigger,e.on("contextmenu",function(e){e.preventDefault()}),e.mousedown(function(e){return 2===e.button&&n(e.currentTarget).children(".context-menu").show("fast"),!1}),i?n("body").click(function(){o.hide()}):n(document).click(function(){o.hide()}),n(document).keydown(function(e){27===e.keyCode&&o.hide()}),e.click(function(){n(_this).children(".context-menu").is(":visible")&&o.hide()}),n(".context-menu a").click(function(){var e=n(_this).prop("href");window.open(e),o.hide(84)}))}),jQuery(document).ready(function(e){e(".header__back").on("click",function(){window.history.go(-1)})});_this=void 0;jQuery(document).ready(function(t){t('a[data-src="external"]').click(function(e){var n=t(e.currentTarget).attr("href"),o=t("#modal"),i=t(".modal-content");e.preventDefault(),i.load("".concat(n," .is-modal-src"),function(){o.modal("show")}),o.on("hidden.bs.modal",function(){i.empty()})}),t("#modal-search").on("shown.bs.modal",function(){t("#modal-search .form__search-input").focus()}),t(document).keydown(function(e){27===e.keyCode&&t(".modal").removeClass("show",function(){t(_this).hide(400)})})}),function(e){var n=e(document),o=e("body"),i=e(".navbar");function t(){i.removeClass("navbar-open"),e(".modal-backdrop").removeClass("show"),setTimeout(function(){i.removeClass("navbar-visible"),e(".modal-backdrop").remove()},400)}e(function(){e(".header-navbar-toggler").on("click",function(){i.addClass("navbar-visible navbar-open"),o.append('<div class="modal-backdrop fade"></div>'),setTimeout(function(){e(".modal-backdrop").addClass("show")},40)}),e(".navbar-primary > li > a").click(function(){o.hasClass("is-highlight")&&o.removeClass("is-highlight")}),n.on("tap",".modal-backdrop",function(){t()}),n.keydown(function(e){27===e.keyCode&&t()}),n.on("swipeleft",".modal-backdrop",function(){t()}),i.swipeleft(function(){t()}),e('a[href="#intro"]').on("click",function(){t()})}),e(window).resize(function(){t()})}(jQuery),jQuery(document).ready(function(i){i(".btn-social").not(".facebook-like").click(function(e){var n=i(e.currentTarget),o=n.data("href");n.hasClass("mail")||n.hasClass("whatsapp")?window.location.href=o:window.open(o,"shareWin","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")})}),jQuery(document).ready(function(o){var i;window.matchMedia("(max-width: 767px)").matches&&(i=0,o(window).scroll(function(){var e=o(".main-subheader, .social-tools.is-main"),n=window.pageYOffset||document.documentElement.scrollTop;Math.abs(n-i)<100||(i<n?e.addClass("is-mobile"):e.removeClass("is-mobile"),i=n)}))});