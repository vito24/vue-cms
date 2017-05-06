/**
 * 二级导航配置
 * Created by vito on 2017/4/3.
 */
const sideBars = {
    product: [
        {
            path: '/product/cargo-category-manage',
            name: '货物分类',
            icon: 'pricetags'
        }, {
            path: '/product/cargo-manage',
            name: '货物管理',
            icon: 'gear-a'
        }, {
            path: 'productManage',
            name: '商品管理',
            icon: 'ios-keypad',
            children: [
                {
                    path: '/product/product-list',
                    name: '所有商品',
                    icon: 'bag'
                }, {
                    path: '/product/product-draft-manage',
                    name: '草稿箱',
                    icon: 'trash-a'
                }
            ]
        }
    ],
    home: [
        {
            path: '/home/index',
            name: '概况',
            icon: 'ios-home'
        }, {
            path: '/home/feedbacks',
            name: '意见反馈',
            icon: 'android-mail'
        }
    ]
};

export default sideBars;
