<template>
    <main-layout>
        <div class="product-list">
        <Breadcrumb>
            <Breadcrumb-item>商品</Breadcrumb-item>
            <Breadcrumb-item>商品管理</Breadcrumb-item>
            <Breadcrumb-item>所有商品</Breadcrumb-item>
        </Breadcrumb>
        <div class="pt10">
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
                        <Form-item label="类目" :label-width="80">
                            <Select placeholder="请选择" v-model="queryParams.brand">
                                <Option
                                    :value="item.categoryDto.id"
                                    v-for="item in categoryList"
                                    :key="item.categoryDto.id">
                                    {{item.categoryDto.name}}
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                </Row>
                <Row :gutter="24">
                    <i-col span="6">
                        <Form-item label="品牌&系列" :label-width="80">
                            <Select placeholder="请选择" v-model="queryParams.brand">
                                <Option
                                    :value="item.categoryDto.name"
                                    v-for="item in categoryList"
                                    :label="item.label"
                                    :key="item.categoryDto.name">
                                </Option>
                            </Select>
                        </Form-item>
                    </i-col>
                    <i-col span="18" class="tr">
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
                <Tab-pane label="全部" name="all"></Tab-pane>
                <Tab-pane label="已上架" name="up"></Tab-pane>
                <Tab-pane label="已下架" name="down"></Tab-pane>
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

                },
                categoryList: [],
                activeName: 'up',
                productData: {},
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
                this.queryParams = {};
            },
            search () {
                this.queryProduct();
                console.log('search', this.queryParams);
            },
            handleClickTab (tab, event) {
                //切换tab
                console.log(tab, event);
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
                        typeOneId: null,
                        typeTwoId: null,
                        typeThreeId: null,
                        brandIdOne: null,
                        brandIdTwo: null,
                        factoryNumber: queryParams.factoryNumber || null,
                        skuId: queryParams.skuId || null,
                        status: null
                    }
                };
                Object.assign(params, this.queryParams);
                this.$http.post('/api/gateway/search/searchGoodses/1.0.0/458/747906AB3E3014C7FCC8F2D96E00F7F2', params).then(response => {
                    this.productData = response.data.obj;
                }).catch(error => {
                    throw new Error(error);
                });
            },
            handlePageChange (pageNo) {
                this.pageNo = pageNo;
                this.queryProduct();
            }
        },
        mounted () {
            this.queryProduct();
            //获取商品类目
            this.$http.post('/api/gateway/category/queryCategory/1.0.0/458/747906AB3E3014C7FCC8F2D96E00F7F2', {
                type: '1'
            }).then(response => {
                console.log(1111,response)
                this.categoryList = response.data.obj.categoryTreeNodeDtos;
            }).catch(error => {
                throw new Error(error);
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
