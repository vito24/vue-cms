<template>
    <main-layout>
        <div>
            <Breadcrumb>
                <Breadcrumb-item>商品</Breadcrumb-item>
                <Breadcrumb-item>货物管理</Breadcrumb-item>
            </Breadcrumb>
            <div class="mt20">
                <Form>
                    <Row>
                        <i-col span="6">
                            <Form-item label="货号" :label-width="80">
                                <i-input placeholder="请输入货号" v-model="queryParams.cargoNo"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="6">
                            <Form-item label="分类" :label-width="80">
                                <Cascader :data="ccSelectList" trigger="click" v-model="queryParams.categoryId"></Cascader>
                            </Form-item>
                        </i-col>
                        <i-col span="6">
                            <Form-item label="名称" :label-width="80">
                                <i-input placeholder="请输入名称" v-model="queryParams.name"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="6">
                            <Form-item label="供应商" :label-width="80">
                                <Select placeholder="请选择" v-model="queryParams.supplierId">
                                    <Option
                                        :value="item.suppliersId"
                                        v-for="item in supplierList"
                                        :label="item.name"
                                        :key="item.suppliersId">
                                    </Option>
                                </Select>
                            </Form-item>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="6">
                            <Form-item label="厂家型号" :label-width="80">
                                <i-input placeholder="请输入厂家型号" v-model="queryParams.manufacturerModel"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="6">
                            <Form-item label="采购价" :label-width="80">
                                <i-input placeholder="请输入最低价" v-model="queryParams.minPurchasePrice"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="2">
                            <Form-item label="" :label-width="0" class="tc">-</Form-item>
                        </i-col>
                        <i-col span="4">
                            <Form-item label="" :label-width="0">
                                <i-input placeholder="请输入最高价" v-model="queryParams.maxPurchasePrice"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="6" class="tr">
                            <Form-item>
                                <Button @click="reset">清空</Button>
                                <Button type="primary" @click="search">搜索</Button>
                            </Form-item>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col class="tr">
                            <Form-item>
                                <router-link to="/product/cargo-add">
                                    <Button type="primary">新增货物</Button>
                                </router-link>
                            </Form-item>
                        </i-col>
                    </Row>
                </Form>
                <Table border :context="self" :columns="columns" :data="cargoData.list"></Table>
                <Page
                    class="vi-pagnation"
                    :total="cargoData.count"
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
    import MainLayout from '@/components/common/MainLayout'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        data () {
            return {
                self: this,
                queryParams: {

                },
                cargoData: [],
                ccSelectList: [],
                supplierList: [],
                pageNo: 1,
                pageSize: 30,
                columns: [
                    {
                        title: '货号',
                        key: 'cargoNo',
                    }, {
                        title: '名称',
                        key: 'name'
                    }, {
                        title: '图片',
                        key: 'image',
                        align: 'center',
                        width: 130,
                        render (row, column, index) {
                            return `
                                <img style="margin: 10px 0;" src="${row.image}?imageView2/2/w/100/h/100">
                            `;
                        }
                    }, {
                        title: '分类',
                        key: 'categoryId'
                    }, {
                        title: '供应商',
                        key: 'supplierId'
                    }, {
                        title: '厂家型号',
                        key: 'manufacturerModel'
                    },  {
                        title: '规格备注',
                        key: 'specificationNote'
                    }, {
                        title: '采购价',
                        key: 'purchasePrice'
                    }, {
                        title: '包裹数',
                        key: 'packageSum'
                    }, {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width: 160,
                        render (row, column, index) {
                            return `
                                <i-button type="primary" size="small" @click="handleEdit(${index})">编辑</i-button>
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
//            ...mapState([
//                'count'
//            ]),
//            test () {
//                return this.count;
//            }
        },
        methods: {
//            ...mapMutations([
//                'INCREMENT'
//            ]),
            ...mapActions([
               'add'
            ]),
            queryCargo () {
                //获取货物列表
                let params = {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                };
                Object.assign(params, this.queryParams);
                this.$http({
                    method: 'post',
                    url: '/gateway/cargo/queryCargo/1.0.0/',
                    data: params
                }).then(response => {
                    this.cargoData = response.data.obj;
                });
            },
            search () {
                console.log('queryParams', this.queryParams)
                this.queryCargo();
//                this.INCREMENT()
//                this.add()
//                this.$store.dispatch('add').then(() => {
//
//                });
            },
            reset () {
                this.queryParams = {};
            },
            handleEdit () {

            },
            handleDelete () {

            },
            handlePageChange (pageNo) {
                this.pageNo = pageNo;
                this.queryCargo();
            }
        },
        mounted () {
            //获取分类
            this.$http({
                method: 'post',
                url: '/gateway/cargoCategory/queryCargoCategoryTree/1.0.0/',
                data: {
                    parentId: 0
                }
            }).then(response => {
                this.ccSelectList = response.data.obj.cargoCategoryVoList;
            });

            //获取供货商
            this.$http({
                method: 'post',
                url: '/supplier/querySuppliers/',
                data: {
                    pageNo: 1,
                    pageSize: 10000
                }
            }).then(response => {
                this.supplierList = response.data.obj.list;
            });

            this.queryCargo();
        }
    }
</script>

<style>
    .ivu-table-header th, .ivu-table-cell {
        text-align: center;
    }
</style>
