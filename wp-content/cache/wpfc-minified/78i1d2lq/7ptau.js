jQuery((function(t){if("undefined"==typeof wc_single_product_params)return!1;t("body").on("init",".wc-tabs-wrapper, .woocommerce-tabs",(function(){t(this).find(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();var e=window.location.hash,i=window.location.href,o=t(this).find(".wc-tabs, ul.tabs").first();(0<=e.toLowerCase().indexOf("comment-")||"#reviews"===e||"#tab-reviews"===e||0<i.indexOf("comment-page-")||0<i.indexOf("cpage=")?o.find("li.reviews_tab a"):"#tab-additional_information"===e?o.find("li.additional_information_tab a"):o.find("li:first a")).trigger("click")})).on("click",".wc-tabs li a, ul.tabs li a",(function(e){e.preventDefault();var i=(e=t(this)).closest(".wc-tabs-wrapper, .woocommerce-tabs");i.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),i.find(".wc-tab, .panel:not(.panel .panel)").hide(),e.closest("li").addClass("active"),i.find("#"+e.attr("href").split("#")[1]).show()})).on("click","a.woocommerce-review-link",(function(){return t(".reviews_tab a").trigger("click"),!0})).on("init","#rating",(function(){t("#rating").hide().before('<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a class="star-1" href="#">1</a>\t\t\t\t\t\t\t<a class="star-2" href="#">2</a>\t\t\t\t\t\t\t<a class="star-3" href="#">3</a>\t\t\t\t\t\t\t<a class="star-4" href="#">4</a>\t\t\t\t\t\t\t<a class="star-5" href="#">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>')})).on("click","#respond p.stars a",(function(){var e=t(this),i=t(this).closest("#respond").find("#rating"),o=t(this).closest(".stars");return i.val(e.text()),e.siblings("a").removeClass("active"),e.addClass("active"),o.addClass("selected"),!1})).on("click","#respond #submit",(function(){var e=t(this).closest("#respond").find("#rating"),i=e.val();if(0<e.length&&!i&&"yes"===wc_single_product_params.review_rating_required)return window.alert(wc_single_product_params.i18n_required_rating_text),!1})),t(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");var e=function(e,i){this.$target=e,this.$images=t(".woocommerce-product-gallery__image",e),0===this.$images.length?this.$target.css("opacity",1):(e.data("product_gallery",this),this.flexslider_enabled="function"==typeof t.fn.flexslider&&wc_single_product_params.flexslider_enabled,this.zoom_enabled="function"==typeof t.fn.zoom&&wc_single_product_params.zoom_enabled,this.photoswipe_enabled="undefined"!=typeof PhotoSwipe&&wc_single_product_params.photoswipe_enabled,i&&(this.flexslider_enabled=!1!==i.flexslider_enabled&&this.flexslider_enabled,this.zoom_enabled=!1!==i.zoom_enabled&&this.zoom_enabled,this.photoswipe_enabled=!1!==i.photoswipe_enabled&&this.photoswipe_enabled),1===this.$images.length&&(this.flexslider_enabled=!1),this.initFlexslider=this.initFlexslider.bind(this),this.initZoom=this.initZoom.bind(this),this.initZoomForTarget=this.initZoomForTarget.bind(this),this.initPhotoswipe=this.initPhotoswipe.bind(this),this.onResetSlidePosition=this.onResetSlidePosition.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.flexslider_enabled?(this.initFlexslider(i.flexslider),e.on("woocommerce_gallery_reset_slide_position",this.onResetSlidePosition)):this.$target.css("opacity",1),this.zoom_enabled&&(this.initZoom(),e.on("woocommerce_gallery_init_zoom",this.initZoom)),this.photoswipe_enabled&&this.initPhotoswipe())};e.prototype.initFlexslider=function(e){var i=this.$target,o=this;e=t.extend({selector:".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",start:function(){i.css("opacity",1)},after:function(t){o.initZoomForTarget(o.$images.eq(t.currentSlide))}},e);i.flexslider(e),t(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load",(function(){var e=t(this);e&&setTimeout((function(){var t=e.closest(".woocommerce-product-gallery__image").height(),i=e.closest(".flex-viewport");t&&i&&i.height(t)}),100)})).each((function(){this.complete&&t(this).trigger("load")}))},e.prototype.initZoom=function(){this.initZoomForTarget(this.$images.first())},e.prototype.initZoomForTarget=function(e){if(!this.zoom_enabled)return!1;var i,o=this.$target.width(),a=!1;t(e).each((function(e,i){if(t(i).find("img").data("large_image_width")>o)return!(a=!0)})),a&&(i=t.extend({touch:!1},wc_single_product_params.zoom_options),"ontouchstart"in document.documentElement&&(i.on="click"),e.trigger("zoom.destroy"),e.zoom(i),setTimeout((function(){e.find(":hover").length&&e.trigger("mouseover")}),100))},e.prototype.initPhotoswipe=function(){this.zoom_enabled&&0<this.$images.length&&(this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>'),this.$target.on("click",".woocommerce-product-gallery__trigger",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery__image a",(function(t){t.preventDefault()})),this.flexslider_enabled)||this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)},e.prototype.onResetSlidePosition=function(){this.$target.flexslider(0)},e.prototype.getGalleryItems=function(){var e=this.$images,i=[];return 0<e.length&&e.each((function(e,o){var a,r,s;(o=t(o).find("img")).length&&(s=o.attr("data-large_image"),a=o.attr("data-large_image_width"),r=o.attr("data-large_image_height"),s={alt:o.attr("alt"),src:s,w:a,h:r,title:o.attr("data-caption")?o.attr("data-caption"):o.attr("title")},i.push(s))})),i},e.prototype.openPhotoswipe=function(e){e.preventDefault();var i=t(".pswp")[0],o=this.getGalleryItems();e=0<(e=t(e.target)).closest(".woocommerce-product-gallery__trigger").length?this.$target.find(".flex-active-slide"):e.closest(".woocommerce-product-gallery__image"),e=t.extend({index:t(e).index(),addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].textContent=t.title,!0):(e.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);new PhotoSwipe(i,PhotoSwipeUI_Default,o,e).init()},t.fn.wc_product_gallery=function(t){return new e(this,t||wc_single_product_params),this},t(".woocommerce-product-gallery").each((function(){t(this).trigger("wc-product-gallery-before-init",[this,wc_single_product_params]),t(this).wc_product_gallery(wc_single_product_params),t(this).trigger("wc-product-gallery-after-init",[this,wc_single_product_params])}))}));