<template>
    <main-layout>
        <div>
            <Breadcrumb>
                <Breadcrumb-item>商品</Breadcrumb-item>
                <Breadcrumb-item>货物管理</Breadcrumb-item>
                <Breadcrumb-item>新增货物</Breadcrumb-item>
            </Breadcrumb>
            <div class="mt20">
                <Form>
                    <Row>
                        <i-col span="8">
                            <Form-item label="分类" :label-width="120">
                                <Cascader :data="ccSelectList" trigger="click" v-model="cargoDetail.categoryId"></Cascader>
                            </Form-item>
                        </i-col>
                        <i-col span="8">
                            <Form-item label="名称" :label-width="120">
                                <i-input placeholder="请输入名称" v-model="cargoDetail.name"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="8">
                            <Form-item label="供应商" :label-width="120">
                                <Select placeholder="请选择" v-model="cargoDetail.supplierId">
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
                        <i-col span="8">
                            <Form-item label="采购价" :label-width="120">
                                <i-input placeholder="请输入采购价" v-model="cargoDetail.manufacturerModel"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="8">
                            <Form-item label="厂家型号" :label-width="120">
                                <i-input placeholder="请输入厂家型号" v-model="cargoDetail.manufacturerModel"></i-input>
                            </Form-item>
                        </i-col>
                        <i-col span="8">
                            <Form-item label="规格备注" :label-width="120">
                                <i-input placeholder="请输入规格备注" v-model="cargoDetail.minPurchasePrice"></i-input>
                            </Form-item>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="8">
                            <Form-item label="包裹数" :label-width="120">
                                <Select placeholder="请选择" v-model="cargoDetail.packageCount" @on-change="changePackageCount">
                                    <Option
                                        :value="n"
                                        v-for="n in 10"
                                        :label="n"
                                        :key="n">
                                    </Option>
                                </Select>
                            </Form-item>
                        </i-col>
                        <i-col span="16">
                            <Form-item label="上传图片" :label-width="120">
                                <div class="upload-list" v-for="item in uploadList">
                                    <template v-if="item.status === 'finished'">
                                        <img :src="item.url">
                                        <div class="upload-list-cover">
                                            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                                            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                    </template>
                                </div>
                                <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :default-file-list="defaultList"
                                    :on-success="handleSuccess"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    :on-format-error="handleFormatError"
                                    :on-exceeded-size="handleMaxSize"
                                    :before-upload="handleBeforeUpload"
                                    :multiple="false"
                                    type="drag"
                                    :data="fileData"
                                    action="http://upload.qiniu.com"
                                    style="display: inline-block; width: 98px;">
                                    <div style="width: 98px; height: 98px; line-height: 98px;">
                                        <Icon type="camera" size="20"></Icon>
                                    </div>
                                </Upload>
                                <Modal title="查看图片" v-model="visible">
                                    <img :src="viewImgUrl" v-if="visible" style="width: 100%">
                                </Modal>
                            </Form-item>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="3">
                            <Form-item label="包裹信息" :label-width="120"></Form-item>
                        </i-col>
                        <i-col span="16">
                            <Table border :context="self" :columns="columns" :data="cargoDetail.cargoData"></Table>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="24" class="mt20 tr">
                            <Form-item>
                                <Button>取消</Button>
                                <Button type="primary" @click="save">保存</Button>
                            </Form-item>
                        </i-col>
                    </Row>
                </Form>
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
                ccSelectList: [],
                supplierList: [],
                cargoDetail: {
                    cargoData: []
                },
                columns: [
                    {
                        title: '包裹数',
                        key: 'cargoNo',
                        render (row, column, index) {
                            return `
                                包裹${index + 1}
                            `;
                        }
                    }, {
                        title: '长（mm）',
                        key: 'name',
                        render (row, column, index) {
                            return `
                                <i-input
                                    placeholder=""
                                    v-model="cargoDetail.cargoData[${index}].length"
                                    @on-change="handleChangeSize(${index})"
                                    :maxlength="7"
                                    :number="true">
                                </i-input>
                            `;
                        }
                    }, {
                        title: '宽（mm）',
                        key: 'categoryId',
                        render (row, column, index) {
                            return `
                                <i-input
                                    placeholder=""
                                    v-model="cargoDetail.cargoData[${index}].width"
                                    @on-change="handleChangeSize(${index})"
                                    :maxlength="7">
                                </i-input>
                            `;
                        }
                    }, {
                        title: '高（mm）',
                        key: 'supplierId',
                        render (row, column, index) {
                            return `
                                <i-input
                                    placeholder=""
                                    v-model="cargoDetail.cargoData[${index}].height"
                                    @on-change="handleChangeSize(${index})"
                                    :maxlength="7">
                                </i-input>
                            `;
                        }
                    }, {
                        title: '体积（m<sup>3</sup>）',
                        key: 'manufacturerModel',
                        render (row, column, index) {
                            return `
                                <span>{{cargoDetail.cargoData[${index}].volume}}</span>
                            `;
                        }
                    }, {
                        title: '毛重（kg）',
                        key: 'manufacturerModel',
                        render (row, column, index) {
                            return `
                                <i-input
                                    placeholder=""
                                    v-model="cargoDetail.cargoData[${index}].weight"
                                    :maxlength="7">
                                </i-input>
                            `;
                        }
                    }
                ],
                defaultList: [],
                viewImgUrl: '',
                visible: false,
                uploadList: [],
                qiniuDomain: '',
                fileData: {}
            }
        },
        components: {
            MainLayout
        },
        methods: {
            //改变包裹数量
            changePackageCount (val) {
                let cargoData = [];
                for (let i = 0; i < val; i++) {
                    cargoData.push({});
                }
                this.cargoDetail.cargoData = cargoData;
            },
            //改变货物尺寸
            handleChangeSize (index) {
                let curCargoData = this.cargoDetail.cargoData[index];
                const length = curCargoData.length;
                const width = curCargoData.width;
                const height = curCargoData.height;
                curCargoData.volume = length * width * height / 1000000000;
                this.cargoDetail.cargoData.splice(index, 1, curCargoData);
            },
            //保存货物
            save () {
                console.log('save', this.cargoDetail);
            },
            //预览图片
            handleView (url) {
                this.viewImgUrl = url;
                this.visible = true;
            },
            //移除图片
            handleRemove (file) {
                this.uploadList.splice(this.uploadList.indexOf(file), 1);
            },
            //图片上传成功
            handleSuccess (res, file) {
                this.uploadList.push({
                    url: `http://${this.qiniuDomain}/${res.hash}`,
                    status: 'finished'
                });
            },
            //图片格式错误
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            //图片尺寸错误
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            //上传图片之前
            handleBeforeUpload (file) {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.defaultList;
            //获取qiniu的token
            this.$http({
                method: 'get',
                url: '/media/qiniutoken?bucketName=aijia-product-test',
                data: {
                    parentId: 0,
                },
                login: false
            }).then(response => {
                const resp = response.data.obj;
                this.qiniuDomain = resp.downloadUrl;
                this.fileData = {
                    token: resp.token,
                    accept: 'text/plain'
                }
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
        }
    };
</script>

<style>
    sup {
        top: -0.3em;
    }
    .upload-list {
        display: inline-block;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .upload-list img {
        width: 100%;
        height: 100%;
    }
    .upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .upload-list:hover .upload-list-cover {
        display: block;
    }
    .upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
