<template>
    <main-layout>
        <div>
            <Breadcrumb>
                <Breadcrumb-item>商品</Breadcrumb-item>
                <Breadcrumb-item>货物分类</Breadcrumb-item>
            </Breadcrumb>
            <div class="mt20">
                <Form>
                    <Row>
                        <i-col span="6">
                            <Form-item label="上级分类" :label-width="80">
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
                        <i-col span="18" class="tr">
                            <Form-item>
                                <Button @click="reset">清空</Button>
                                <Button type="primary" @click="search">搜索</Button>
                            </Form-item>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col class="tr">
                            <Form-item>
                                <Button type="primary">新增分类</Button>
                            </Form-item>
                        </i-col>
                    </Row>
                </Form>
                <Table border :context="self" :columns="columns" :data="cargoList"></Table>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/components/common/MainLayout'
    export default {
        data () {
            return {
                self: this,
                queryParams: {},
                supplierList: [],
                cargoList: [],
                columns: [
                    {
                        title: '分类编号',
                        key: 'id',
                    }, {
                        title: '分类名称',
                        key: 'name'
                    }, {
                        title: '展开/收缩',
                        key: 'categoryId'
                    }, {
                        title: '是否启用',
                        key: 'status',
                        render (row, column, index) {
                            return row.status === 1 ? '是' : '否';
                        }
                    }, {
                        title: '上级分类',
                        key: 'parentName'
                    }, {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width: 160,
                        render (row, column, index) {
                            return `
                                <i-button type="error" size="small" @click="handleAdd(${index})">添加</i-button>
                                <i-button type="primary" size="small" @click="handleEdit(${index})">编辑</i-button>
                            `;
                        }
                    }
                ]
            };
        },
        components: {
            MainLayout
        },
        methods: {
            reset () {
                this.queryParams = {};
            },
            search () {

            },
            handleAdd () {

            },
            handleEdit () {

            },
            queryCargoCategory () {
                this.$http({
                    method: 'post',
                    url: '/gateway/cargoCategory/queryCargoCategoryTree/1.0.0/',
                    data: {
                        parentId: 0
                    }
                }).then(res => {
                    this.cargoList = res.data.obj.cargoCategoryVoList;
                });
            }
        },
        mounted () {
            this.queryCargoCategory();
        }
    }
</script>

<style scoped>

</style>
