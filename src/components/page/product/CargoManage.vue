<template>
    <div>
        <Breadcrumb>
            <Breadcrumb-item>商品</Breadcrumb-item>
            <Breadcrumb-item>货物管理</Breadcrumb-item>
        </Breadcrumb>
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
                            <el-cascader
                                placeholder="请选择"
                                v-model="searchDetail.categoryId"
                                :options="ccSelectList"
                                filterable
                                :props="props"
                                change-on-select>
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="名称" label-width="80px">
                            <el-input placeholder="请输入名称" v-model="searchDetail.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="供应商" label-width="80px">
                            <el-select placeholder="请选择" v-model="searchDetail.supplierId">
                                <el-option
                                    :value="item.suppliersId"
                                    v-for="item in supplierList"
                                    :label="item.name"
                                    :key="item.suppliersId">
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
                :data="cargoDetails.list"
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
                        <span>{{ scope.row.categoryId }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="供应商"
                    width="120">
                    <template scope="scope">
                        <span>{{ scope.row.supplierId }}</span>
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
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="cargoDetails.pageNo"
                :page-size="cargoDetails.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="cargoDetails.count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        data () {
            return {
                searchDetail: {
                    categoryId: [],
                    supplierId: null
                },
                cargoDetails: [],
                ccSelectList: [],
                supplierList: [],
                props: {
                    value: 'id',
                    label: 'name'
                },
                pageNo: 1,
                pageSize: 30
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                this.pageNo = val;
                console.log(`当前页: ${val}`);
            }
        },
        mounted () {
            //获取分类
            this.$http.post('/api/gateway/cargoCategory/queryCargoCategoryTree/1.0.0/458/DFCEC5C57FDF8FACCD342B239064C8A4', {
                parentId: 0,
            }).then(response => {
                this.ccSelectList = response.data.obj.cargoCategoryVoList;
            }).catch(error => {
                throw new Error(error);
            });

            //获取供货商
            this.$http.post('/api/supplier/querySuppliers/458/DFCEC5C57FDF8FACCD342B239064C8A4', {
                pageNo: 1,
                pageSize: 10000
            }).then(response => {
                this.supplierList = response.data.obj.list;
            }).catch(error => {
                throw new Error(error);
            });

            //获取货物列表
            this.$http.post('/api/gateway/cargo/queryCargo/1.0.0/458/DFCEC5C57FDF8FACCD342B239064C8A4', {
                pageNo: this.pageNo,
                pageSize: this.pageSize
            }).then(response => {
                this.cargoDetails = response.data.obj;
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
