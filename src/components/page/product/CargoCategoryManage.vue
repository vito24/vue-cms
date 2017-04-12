<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>商品</el-breadcrumb-item>
            <el-breadcrumb-item>货物分类</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="pt10">
            <el-form>
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-form-item label="上级分类" label-width="80px">
                            <el-select placeholder="请选择" v-model="searchDetail.brand">
                                <el-option
                                    :value="item.value"
                                    v-for="item in options"
                                    :label="item.label"
                                    :key="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="18" class="tr">
                        <el-form-item>
                            <el-button @click="reset">清空</el-button>
                            <el-button type="primary" @click="search">搜索</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24" class="tr">
                        <el-form-item>
                            <el-button type="primary" @click="addCategory">新增分类</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    label="分类编号"
                    width="150">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.spuId }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="分类名称"
                    width="180">
                    <template scope="scope">
                        <img class="first-img" :src="scope.row.imageUrl" >
                    </template>
                </el-table-column>
                <el-table-column
                    label="展开/收缩"
                    width="180">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="是否启用"
                    width="140">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.brandName }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="上级分类"
                    width="120">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button
                            size="small"
                            type="danger"
                        @click="handleAdd(scope.$index, scope.row)">添加</el-button>
                        <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
            }
        }
    }
</script>

<style scoped>

</style>
