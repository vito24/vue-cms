<template>
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
                        <Form-item label="商品名称" :label-width="80">
                            <Input placeholder="请输入商品名称" v-model="searchDetail.productName"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="厂家型号" :label-width="80">
                            <Input placeholder="请输入厂家型号" v-model="searchDetail.factorySerial"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="SPU编号" :label-width="80">
                            <Input placeholder="请输入SPU编号" v-model="searchDetail.spuId"></Input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="SKU编号" :label-width="80">
                            <Input placeholder="请输入SKU编号" v-model="searchDetail.skuId"></Input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row :gutter="24">
                    <i-col span="6">
                        <Form-item label="品牌&系列" :label-width="80">
                            <Select placeholder="请选择" v-model="searchDetail.brand">
                                <Option
                                    :value="item.value"
                                    v-for="item in options"
                                    :label="item.label"
                                    :key="item.value">
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
            <Tabs v-model="activeName" @on-click="handleClick">
                <Tab-pane label="全部" name="all"></Tab-pane>
                <Tab-pane label="已上架" name="up"></Tab-pane>
                <Tab-pane label="已下架" name="down"></Tab-pane>
            </Tabs>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    label="商品编号（SPU）"
                    width="150">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.spuId }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="头图"
                    width="180">
                    <template scope="scope">
                        <img class="first-img" :src="scope.row.imageUrl" >
                    </template>
                </el-table-column>
                <el-table-column
                    label="商品名称"
                    width="180">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="品牌&系列"
                    width="140">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.brandName }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="商品规格"
                    width="120">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="	艾佳售价"
                    width="100">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                searchDetail: {
                    brand: ''
                },
                options: [
                    {
                        value: 1,
                        label: '五木'
                    }, {
                        value: 2,
                        label: '乐视'
                    }, {
                        value: 3,
                        label: '格力'
                    }
                ],
                activeName: 'up',
                tableData: [{
                    spuId: '123',
                    name: '【兴利 璞极】格适-L3',
                    brandName: '兴利',
                    imageUrl: 'http://pic.58pic.com/58pic/16/53/72/19d58PICgFZ_1024.jpg'
                }, {
                    spuId: '456',
                    name: '春在东方 中式 实木 茶几',
                    brandName: '春在东方',
                    imageUrl: 'http://pic.qiantucdn.com/58pic/18/01/33/55c03e470a9a2_1024.jpg'
                }, {
                    spuId: '789',
                    name: '【安吉尔】中央过滤器J2615-GWG2000',
                    brandName: '安吉尔',
                    imageUrl: 'http://pic.58pic.com/58pic/13/60/13/82M58PICVPs_1024.jpg'
                }]
            }
        },
        methods: {
            reset () {
                this.searchDetail = {};
            },
            search () {
                console.log('search', this.searchDetail);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>
    .first-img {
        width: 150px;
        margin-top: 8px;
    }
</style>
