/**
 * 二级导航配置
 * Created by sun on 2017/4/3.
 */
const sideBars = {
    product: [
        {
            path: '/product/cargo-category-manage',
            name: '货物分类'
        }, {
            path: '/product/cargo-manage',
            name: '货物管理'
        }, {
            path: 'productManage',
            name: '商品管理',
            children: [
                {
                    path: '/product/product-list',
                    name: '所有商品'
                }, {
                    path: '/product/product-draft-manage',
                    name: '草稿箱'
                }
            ]
        }
    ],
    home: [
        {
            path: '/home/index',
            name: '概况'
        }, {
            path: '/home/feedbacks',
            name: '意见反馈'
        }
    ]
};

export default sideBars;
