<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>商品</el-breadcrumb-item>
            <el-breadcrumb-item>货物管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="pt10">
            <el-form>
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-form-item label="货号" label-width="80px">
                            <el-input placeholder="请输入货号" v-model="searchDetail.cargoNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="分类" label-width="80px">
                            <el-select placeholder="请选择" v-model="searchDetail.categoryId">
                                <el-option
                                    :value="item.value"
                                    v-for="item in ccSelectList"
                                    :label="item.label"
                                    :key="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="名称" label-width="80px">
                            <el-input placeholder="请输入名称" v-model="searchDetail.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="供应商" label-width="80px">
                            <el-select placeholder="请选择" v-model="searchDetail.brand">
                                <el-option
                                    :value="item.value"
                                    v-for="item in supplierList"
                                    :label="item.label"
                                    :key="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-form-item label="厂家型号" label-width="80px">
                            <el-input placeholder="请输入厂家型号" v-model="searchDetail.manufacturerModel"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="采购价" label-width="80px">
                            <el-input placeholder="请输入最低价" v-model="searchDetail.minPurchasePrice"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="" label-width="80px">
                            <el-input placeholder="请输入最高价" v-model="searchDetail.maxPurchasePrice"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="tr">
                        <el-form-item>
                            <el-button @click="reset">清空</el-button>
                            <el-button type="primary" @click="search">搜索</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24" class="tr">
                        <el-form-item>
                            <a href="#/product/cargo-add">
                                <el-button type="primary">新增货物</el-button>
                            </a>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-table
                :data="cargoList"
                border
                style="width: 100%">
                <el-table-column
                    label="货号"
                    width="150">
                    <template scope="scope">
                        <span>{{ scope.row.cargoNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="名称"
                    width="180">
                    <template scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="图片"
                    width="130">
                    <template scope="scope">
                        <img class="first-img" :src="scope.row.image" >
                    </template>
                </el-table-column>
                <el-table-column
                    label="分类"
                    width="140">
                    <template scope="scope">
                        <span>{{ scope.row.brandName }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="供应商"
                    width="120">
                    <template scope="scope">
                        <span>{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="	厂家型号"
                    width="100">
                    <template scope="scope">
                        <span>{{ scope.row.manufacturerModel }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="	规格备注"
                    width="100">
                    <template scope="scope">
                        <span>{{ scope.row.specificationNote }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="	采购价"
                    width="100">
                    <template scope="scope">
                        <span>{{ scope.row.purchasePrice }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="	包裹数"
                    width="80">
                    <template scope="scope">
                        <span>{{ scope.row.packageSum }}</span>
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

                },
                cargoList: [],
                ccSelectList: [],
                supplierList: []
            }
        },
        computed: {

        },
        methods: {
            search () {

            },
            reset () {

            },
            handleEdit () {

            },
            handleDelete () {

            }
        },
        mounted () {
            //获取供货商
            this.$http.post('/api/supplier/querySuppliers/1.0.0/458/6F1EFCAE82A010AC1C82D701B7FDAB9B', {
                pageNo: 1,
                pageSize: 10000
            }).then(response => {
                this.supplierList = response.data.obj.list;
            }).catch(error => {
                throw new Error(error);
            });

            //获取货物列表
            this.$http.post('/api/gateway/cargo/queryCargo/1.0.0/458/6F1EFCAE82A010AC1C82D701B7FDAB9B', {
                pageNo: 1,
                pageSize: 30
            }).then(response => {
                this.cargoList = response.data.obj.list;
            }).catch(error => {
                throw new Error(error);
            });
        }
    }
</script>

<style scoped>
    .first-img {
        width: 100px;
        margin-top: 8px;
    }
</style>
