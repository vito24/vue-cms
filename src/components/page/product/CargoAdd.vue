<template>
    <div>
        <Breadcrumb>
            <Breadcrumb-item>商品</Breadcrumb-item>
            <Breadcrumb-item>货物管理</Breadcrumb-item>
            <Breadcrumb-item>新增货物</Breadcrumb-item>
        </Breadcrumb>
        <div class="pt10">
            <Form>
                <Row>
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
                    <i-col span="6">
                        <Form-item label="采购价" :label-width="80">
                            <i-input placeholder="请输入采购价" v-model="queryParams.manufacturerModel"></i-input>
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
                        <Form-item label="规格备注" :label-width="80">
                            <i-input placeholder="请输入规格备注" v-model="queryParams.minPurchasePrice"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="6">
                        <Form-item label="包裹数" :label-width="80">
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
                        <Form-item label="包裹信息" :label-width="80">

                        </Form-item>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="24">
                        <Table border :context="self" :columns="columns" :data="cargoData"></Table>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="24" class="mt20 tr">
                        <Form-item>
                            <Button @click="reset">取消</Button>
                            <Button type="primary" @click="save">保存</Button>
                        </Form-item>
                    </i-col>
                </Row>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                queryParams: '',
                cargoData: [],
                columns: [
                    {
                        title: '包裹数',
                        key: 'cargoNo',
                    }, {
                        title: '长（mm）',
                        key: 'name'
                    }, {
                        title: '宽（mm）',
                        key: 'categoryId'
                    }, {
                        title: '高（mm）',
                        key: 'supplierId'
                    }, {
                        title: '体积（m<sup>3</sup>）',
                        key: 'manufacturerModel'
                    }, {
                        title: '毛重（kg）',
                        key: 'manufacturerModel'
                    }
                ]
            }
        }
    }
</script>

<style>
    sup {
        top: -0.3em;
    }
</style>
