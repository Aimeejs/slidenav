/*!
 * slidenav For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-09-05
 */

import App from 'app';
import template from 'slidenav.jade';

class slidenav extends App {

    constructor() {
        super();
        this.name = 'slidenav';
        this.template = template;
    }

    onload() {

    }

    // app渲染到页面之前执行，用于预处理渲染内容
    prerender(app) {
        this.load()
        this.bind({
            'click@li': function() {
                app.load($(this).index());
                return false;
            }
        })
    }

    // app渲染到页面之后执行，此时app还在内存中，不能获取宽度高度等与尺寸相关的属性
    postrender(app) {
        // app为模块的实例
    }

    // 页面渲染到浏览器后执行，此时可以获取宽高等与尺寸相关的属性
    pagerender(app) {
        // some code
    }

    load(index) {
        index = index || 0;
        this.find('li').eq(index)
            .addClass('selected')
            .siblings().removeClass('selected');
    }
}

export default slidenav;
