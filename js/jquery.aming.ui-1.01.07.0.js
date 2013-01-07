/**
* $.amingimage
* @extends jquery.1.7.1
* @fileOverview 预加载图片后显示
* @author 阿命
* @email y2443@163.com
* @site wwww.y2443.com
* @version 1.01.04.1
* @date 2013-01-04
* Copyright (c) 2012-2013 AMing
* @example
*    $("input").amingui_text();
*/
(function ($) {
    $.extend($.fn, {
        amingui_text: function (setting, callback) {//默认值
            var sdata = $.extend({
                width: 200,
                height: 20,
                info: ""
            }, setting);

            var $renderTo = jQuery(this);
            var $div_root = jQuery("<div class='amingui_text'></div>");
            var $div_move = jQuery("<div class='amingui_text_move'></div>");
            var $div_border = jQuery("<div class='amingui_text_border'></div>");
            var $span_info = jQuery("<span class='amingui_text_info'></span>");


            //GetAttribute
            var text_w = $renderTo.width();
            var text_h = $renderTo.height();
            //SetCss
            $div_root.css("position", "relative");
            $div_move.css("position", "absolute");
            $div_border.css("position", "absolute");
            $renderTo.css("position", "absolute");
            $span_info.css("position", "absolute");

            $div_root.css("height", (text_h + 5) + "px");
            $div_move.css("height", (text_h + 5) + "px");
            $div_root.css("width", (text_w + 6) + "px");
            $div_move.css("width", (text_w + 6) + "px");
            $div_border.css("width", (text_w + 6) + "px");
            $span_info.css("height", (text_h + 2) + "px");
            $span_info.css("width", (text_w) + "px");

            $div_root.css("font-family", '"Microsoft YaHei" , "Microsoft JhengHei"');

            $div_border.css("border", "2px solid #0094ff");
            $div_border.css("border-top-width", "0px");
            $div_border.css("border-top-width", "0px");
            $div_border.css("bottom", "0");
            $div_border.css("height", "4px");

            $renderTo.css("border-width", "0");
            $renderTo.css("left", "3px");
            $renderTo.css("bottom", "3px");
            $renderTo.css("outline", "none");
            $renderTo.css("display", "none");
            $renderTo.css("font-family", '"Microsoft YaHei" , "Microsoft JhengHei"');

            $span_info.css("left", "6px");
            $span_info.css("bottom", "6px");
            $span_info.css("overflow", "hidden");
            $span_info.css("color", "#979797");

            $span_info.html(sdata.info);

            $renderTo.before($div_root);
            $div_root.append($div_move);
            $div_move.append($div_border);
            $div_move.append($span_info);
            $div_move.append($renderTo);

            $div_root.bind("click", function () {
                var text = $renderTo.val();
                if (text.length == 0) {
                    $renderTo.show();
                    $span_info.hide();
                    $renderTo.trigger("focus");
                }
            });
            $renderTo.bind("focusout", function () {
                var text = $renderTo.val();
                if (text.length == 0) {
                    $renderTo.hide();
                    $span_info.show();
                }
            });

            return this;
        }
    });
})(jQuery)