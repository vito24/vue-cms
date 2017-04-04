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
            index: '2',
            name: '货物分类'
        }, {
            index: '3',
            name: '货物管理'
        }
    ],
    home: [
        {
            index: '/home/home1',
            name: '首页1'
        }, {
            index: '/home/home2',
            name: '首页2'
        }
    ]
};

export default sideBars;
