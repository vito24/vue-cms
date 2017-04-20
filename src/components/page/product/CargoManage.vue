<template>
    <div>
        <Breadcrumb>
            <Breadcrumb-item>商品</Breadcrumb-item>
            <Breadcrumb-item>货物管理</Breadcrumb-item>
        </Breadcrumb>
        <div class="pt10">
            <Form>
                <Row>
                    <Col span="6">
                        <Form-item label="货号" :label-width="80">
                            <Input placeholder="请输入货号" v-model="searchDetail.cargoNo"></Input>
                        </Form-item>
                    </Col>
                    <Col span="6">
                        <Form-item label="分类" :label-width="80">
                            <Cascader :data="ccSelectList" trigger="click" v-model="searchDetail.categoryId"></Cascader>
                        </Form-item>
                    </Col>
                    <Col span="6">
                        <Form-item label="名称" :label-width="80">
                            <Input placeholder="请输入名称" v-model="searchDetail.name"></Input>
                        </Form-item>
                    </Col>
                    <Col span="6">
                        <Form-item label="供应商" :label-width="80">
                            <Select placeholder="请选择" v-model="searchDetail.supplierId">
                                <Option
                                    :value="item.suppliersId"
                                    v-for="item in supplierList"
                                    :label="item.name"
                                    :key="item.suppliersId">
                                </Option>
                            </Select>
                        </Form-item>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <Form-item label="厂家型号" :label-width="80">
                            <Input placeholder="请输入厂家型号" v-model="searchDetail.manufacturerModel"></Input>
                        </Form-item>
                    </Col>
                    <Col span="6">
                        <Form-item label="采购价" :label-width="80">
                            <Input placeholder="请输入最低价" v-model="searchDetail.minPurchasePrice"></Input>
                        </Form-item>
                    </Col>
                    <Col span="2">
                        <Form-item label="" :label-width="0" class="tc">-</Form-item>
                    </Col>
                    <Col span="4">
                        <Form-item label="" :label-width="0">
                            <Input placeholder="请输入最高价" v-model="searchDetail.maxPurchasePrice"></Input>
                        </Form-item>
                    </Col>
                    <Col span="6" class="tr">
                        <Form-item>
                            <Button @click="reset">清空</Button>
                            <Button type="primary" @click="search">搜索</Button>
                        </Form-item>
                    </Col>
                </Row>
                <Row>
                    <Col class="tr">
                        <Form-item>
                            <a href="#/product/cargo-add">
                                <Button type="primary">新增货物</Button>
                            </a>
                        </Form-item>
                    </Col>
                </Row>
            </Form>
            <Table border :context="self" :columns="columns" :data="cargoData.list"></Table>
            <Page class="vi-pagnation" :total="cargoData.count" show-total show-elevator @on-change="handlePageChange"></Page>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        data () {
            return {
                self: this,
                searchDetail: {
                    categoryId: [],
                    supplierId: null
                },
                cargoData: [],
                ccSelectList: [],
                supplierList: [],
                props: {
                    value: 'id',
                    label: 'name'
                },
                pageNo: 1,
                pageSize: 10,
                columns: [{
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
                }]
            }
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
            search () {
                console.log('searchDetail', this.searchDetail)
//                this.INCREMENT()
//                this.add()
//                this.$store.dispatch('add').then(() => {
//
//                });
            },
            reset () {
                this.searchDetail = {
                    categoryId: [],
                    supplierId: null
                };
            },
            handleEdit () {

            },
            handleDelete () {

            },
            handlePageChange(val) {
                console.log(`当前第 ${val} 页`);
            }
        },
        mounted () {
            //获取分类
            this.$http.post('/api/gateway/cargoCategory/queryCargoCategoryTree/1.0.0/458/BF1E95D99A97EFE02D8DC071D3F73C53', {
                parentId: 0,
            }).then(response => {
                this.ccSelectList = response.data.obj.cargoCategoryVoList;
            }).catch(error => {
                throw new Error(error);
            });

            //获取供货商
            this.$http.post('/api/supplier/querySuppliers/458/BF1E95D99A97EFE02D8DC071D3F73C53', {
                pageNo: 1,
                pageSize: 10000
            }).then(response => {
                this.supplierList = response.data.obj.list;
            }).catch(error => {
                throw new Error(error);
            });

            //获取货物列表
            this.$http.post('/api/gateway/cargo/queryCargo/1.0.0/458/BF1E95D99A97EFE02D8DC071D3F73C53', {
                pageNo: this.pageNo,
                pageSize: this.pageSize
            }).then(response => {
                this.cargoData = response.data.obj;
            }).catch(error => {
                throw new Error(error);
            });
        }
    }
</script>

<style>
    .vi-pagnation {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
</style>
