/**
 * 二级导航配置
 * Created by sun on 2017/4/3.
 */
const sideBars = {
    product: [
        {
            index: '1',
            name: '商品管理',
            children: [
                {
                    index: '/product/product-list',
                    name: '所有商品'
                }, {
                    index: '1-2',
                    name: '草稿箱'
                }
            ]
        }, {
            index: '/product/cargo-category-manage',
            name: '货物分类'
        }, {
            index: '/product/cargo-manage',
            name: '货物管理'
        }
    ],
    home: [
        {
            index: '/home/index',
            name: '概况'
        }, {
            index: '/home/feedbacks',
            name: '意见反馈'
        }
    ]
};

export default sideBars;
