<template>
    <main-layout>
        <div class="product-list">
        <Breadcrumb>
            <Breadcrumb-item>商品</Breadcrumb-item>
            <Breadcrumb-item>商品管理</Breadcrumb-item>
            <Breadcrumb-item>所有商品</Breadcrumb-item>
        </Breadcrumb>
        <div class="mt20">
            <Form>
                <Row :gutter="24">
                    <i-col span="6">
                        <Form-item label="厂家型号" :label-width="80">
                            <Input placeholder="请输入厂家型号" v-model="queryParams.factoryNumber"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="SPU编号" :label-width="80">
                            <Input placeholder="请输入SPU编号" v-model="queryParams.spuId"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="SKU编号" :label-width="80">
                            <Input placeholder="请输入SKU编号" v-model="queryParams.skuId"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="商品名称" :label-width="80">
                            <Input placeholder="请输入商品名称" v-model="queryParams.name"></Input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row :gutter="24">
                    <i-col span="6">
                        <Form-item label="艾佳售价" :label-width="80">
                            <i-input placeholder="请输入最低价" v-model="queryParams.aijiaLowerPrice"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="2">
                        <Form-item label="" :label-width="0" class="tc">-</Form-item>
                    </i-col>
                    <i-col span="4">
                        <Form-item label="" :label-width="0">
                            <i-input placeholder="请输入最高价" v-model="queryParams.aijiaUpperPrice"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="品牌&系列" :label-width="80">
                            <Select
                                placeholder="请选择"
                                v-model="queryParams.brand"
                                @on-change="handleSelectBrand(queryParams.brand)">
                                <Option
                                    :value="brand.brandDto.id"
                                    v-for="brand in brandList"
                                    :key="brand.brandDto.id">
                                    {{brand.brandDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="" :label-width="80">
                            <Select
                                placeholder="请选择"
                                v-model="queryParams.brand2"
                                v-show="brand2List.length">
                                <Option
                                    :value="brand2.brandDto.id"
                                    v-for="brand2 in brand2List"
                                    :key="brand2.brandDto.id">
                                    {{brand2.brandDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                </Row>
                <Row :gutter="24">
                    <i-col span="6">
                        <Form-item label="类目" :label-width="80">
                            <Select
                                placeholder="请选择"
                                v-model="queryParams.type"
                                @on-change="handleSelectType(queryParams.type)">
                                <Option
                                    :value="item.categoryDto.id"
                                    v-for="item in categoryList"
                                    :key="item.categoryDto.id">
                                    {{item.categoryDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="" :label-width="80">
                            <Select
                                placeholder="请选择"
                                v-model="queryParams.type2"
                                @on-change="handleSelectType2(queryParams.type2)"
                                v-show="category2List.length">
                                <Option
                                    :value="item.categoryDto.id"
                                    v-for="item in category2List"
                                    :key="item.categoryDto.id">
                                    {{item.categoryDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="" :label-width="80">
                            <Select
                                placeholder="请选择"
                                v-model="queryParams.type3"
                                v-show="category3List.length">
                                <Option
                                    :value="item.categoryDto.id"
                                    v-for="item in category3List"
                                    :key="item.categoryDto.id">
                                    {{item.categoryDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                    <i-col span="6" class="tr">
                        <Form-item>
                            <Button @click="reset">清空</Button>
                            <Button type="primary" @click="search">搜索</Button>
                        </Form-item>
                    </i-col>
                </Row>
                <Row :gutter="24">
                    <i-col span="24" class="tr">
                        <Form-item>
                            <a href="#/product/product-new">
                                <Button type="primary">新增商品</Button>
                            </a>
                        </Form-item>
                    </i-col>
                </Row>
            </Form>
            <Tabs v-model="activeName" @on-click="handleClickTab">
                <Tab-pane label="全部" name=""></Tab-pane>
                <Tab-pane label="已上架" name="1"></Tab-pane>
                <Tab-pane label="已下架" name="0"></Tab-pane>
            </Tabs>
            <Table border :context="self" :columns="columns" :data="productData.goodses"></Table>
            <Page
                class="vi-pagnation"
                :total="productData.total"
                :page-size="pageSize"
                show-total
                show-elevator
                @on-change="handlePageChange">
            </Page>
        </div>
    </div>
    </main-layout>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import MainLayout from '@/components/common/MainLayout'
    export default {
        data () {
            return {
                self: this,
                pageNo: 1,
                pageSize: 30,
                queryParams: {
                    //查询参数
                },
                categoryList: [],  //一级类目
                category2List: [],  //二级类目
                category3List: [],  //三级类目
                brandList: [],  //一级品牌
                brand2List: [], //二级品牌
                activeName: '',
                productData: {},   //商品信息
                columns: [
                    {
                        title: '商品编号（SPU）',
                        key: 'spuId',
                        align: 'center',
                        width: 140
                    }, {
                        title: '头图',
                        key: 'name',
                        align: 'center',
                        width: 130,
                        render (row, column, index) {
                            return `
                                <img style="margin: 10px 0;" src="${row.imageUrl}?imageView2/2/w/100/h/100">
                            `
                        }
                    }, {
                        title: '商品名称',
                        key: 'name',
                        align: 'center',
                        width: 180
                    }, {
                        title: '品牌&系列',
                        key: 'categoryId',
                        align: 'center',
                        width: 100,
                        render (row, column, index) {
                            return row.brandNameOne || '' + row.brandNameTwo || ''
                        }
                    }, {
                        title: '商品规格',
                        key: 'supplierId',
                        align: 'left',
                        width: 130,
                        render (row, column, index) {
                            let sku = '';
                            if (row.style) {
                                sku += `类型：${row.style}`
                            }
                            if (row.color) {
                                sku += `<br>颜色：${row.color}`
                            }
                            return sku
                        }
                    }, {
                        title: '艾佳售价',
                        key: 'manufacturerModel',
                        align: 'center',
                        render (row, column, index) {
                            let price = '';
                            if (row.aijiaLowerPrice !== row.aijiaUpperPrice) {
                                price = '￥' + row.aijiaLowerPrice.toFixed(2) + ' ~ ' + '￥' + row.aijiaUpperPrice.toFixed(2);
                            } else {
                                price = '￥' + row.aijiaLowerPrice.toFixed(2);
                            }
                            return price
                        }
                    },  {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width: 220,
                        render (row, column, index) {
                            let type = 'success';
                            let text = '上架';
                            if (row.status === '1') {
                                type = 'warning';
                                text = '下架';
                            }
                            return `
                                <i-button type="primary" size="small" @click="handleEdit(${index})">编辑</i-button>
                                <i-button type="${type}" size="small" @click="handleChangeStatus(${index})">${text}</i-button>
                                <i-button type="error" size="small" @click="handleDelete(${index})">删除</i-button>
                            `;
                        }
                    }
                ]
            }
        },
        components: {
            MainLayout
        },
        computed: {

        },
        methods: {
            reset () {
                //清空
                this.queryParams = {};
            },
            search () {
                //搜索
                this.queryProduct();
                console.log('search', this.queryParams);
            },
            handleClickTab (status) {
                //切换tab
                this.queryParams.status = status;
                this.queryProduct();
            },
            handleEdit (index, row) {
                //编辑商品
                console.log(index, row);
            },
            handleDelete (index, row) {
                //删除商品
                console.log(index, row);
            },
            handleChangeStatus (index, row) {
                //上下架
                console.log(index, row);
            },
            queryProduct () {
                //获取商品列表
                const queryParams = this.queryParams;
                let params = {
                    page: this.pageNo,
                    size: this.pageSize,
                    searchGoodsesConditionVo: {
                        spuId: queryParams.spuId || null,
                        name: queryParams.name || null,
                        aijiaLowerPrice: queryParams.aijiaLowerPrice || null,
                        aijiaUpperPrice: queryParams.aijiaUpperPrice || null,
                        typeOneId: queryParams.type || null,
                        typeTwoId: queryParams.type2 || null,
                        typeThreeId: queryParams.type3 || null,
                        brandIdOne: queryParams.brand || null,
                        brandIdTwo: queryParams.brand2 || null,
                        factoryNumber: queryParams.factoryNumber || null,
                        skuId: queryParams.skuId || null,
                        status: queryParams.status || null
                    }
                };
                this.$http({
                    method: 'post',
                    url: '/gateway/search/searchGoodses/1.0.0/',
                    data: params
                }).then(response => {
                    this.productData = response.data.obj;
                });
            },
            handlePageChange (pageNo) {
                this.pageNo = pageNo;
                this.queryProduct();
            },
            handleSelectBrand (brandId) {
                //切换一级品牌，获取二级品牌
                this.$http({
                    method: 'post',
                    url: '/gateway/brand/queryBrand/1.0.0/',
                    data: {
                        id: brandId
                    }
                }).then(response => {
                    this.brand2List = response.data.obj.brandTreeNodeDtos;
                });
            },
            handleSelectType (typeId) {
                //切换一级类目，获取二级类目
                this.category3List = [];
                this.categoryList.forEach((value, index, array) => {
                   if (value.categoryDto.id === typeId) {
                        this.category2List = array[index].categoryTreeNodeDtos;
                        return false;
                   }
                });
            },
            handleSelectType2 (type2Id) {
                //切换二级类目，获取三级类目
                this.category2List.forEach((value, index, array) => {
                    if (value.categoryDto.id === type2Id) {
                        this.category3List = array[index].categoryTreeNodeDtos;
                        return false;
                    }
                });
            }
        },
        mounted () {
            this.queryProduct();
            //获取商品类目
            this.$http({
                method: 'post',
                url: '/gateway/category/queryCategory/1.0.0/',
                data: {
                    type: '1'
                }
            }).then(response => {
                this.categoryList = response.data.obj.categoryTreeNodeDtos;
            });

            //获取一级品牌
            this.$http({
                method: 'post',
                url: '/gateway/brand/queryBrand/1.0.0/',
                data: {}
            }).then(response => {
                this.brandList = response.data.obj.brandTreeNodeDtos;
            });
        }
    }
</script>

<style scoped>
    .first-img {
        width: 150px;
        margin-top: 8px;
    }
</style>
