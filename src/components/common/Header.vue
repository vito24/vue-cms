<template>
    <div>
        <Menu theme="dark" mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
            <router-link to="/">
                <img src="./../../assets/aijia-logo.png" class="logo">
            </router-link>
            <div class="nav-wrapper">
                <Menu-item name="home">
                    <Icon type="ios-home"></Icon>
                    首页
                </Menu-item>
                <Menu-item name="product">
                    <Icon type="ios-keypad"></Icon>
                    商品
                </Menu-item>
                <Dropdown placement="bottom-end" @on-click="handleClickDropdown" class="mr10">
                    <a href="javascript:void(0)">
                        {{userInfo.username}}
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item name="changePsw">修改密码</Dropdown-item>
                        <Dropdown-item name="loginOut">退出</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </Menu>
        <!--修改密码弹窗-->
        <Modal
            v-model="modalVisible"
            title="修改密码"
            @on-ok="handleChangePsd"
            :loading="loading">
            <Form ref="pswForm" :model="pswDetail" :rules="rules" :label-width="100" style="width: 70%;">
                <Form-item label="旧密码" prop="oldPsw">
                    <i-input type="password" v-model="pswDetail.oldPsw" placeholder="请输入旧密码"></i-input>
                </Form-item>
                <Form-item label="新密码" prop="newPsw">
                    <i-input type="password" v-model="pswDetail.newPsw" placeholder="请输入新密码"></i-input>
                </Form-item>
                <Form-item label="确认新密码" prop="newPswConfirm">
                    <i-input type="password" v-model="pswDetail.newPswConfirm" placeholder="请再次输入新密码"></i-input>
                </Form-item>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import siderbar from '@/config/sidebar';
    import { mapState } from 'vuex'
    export default {
        name: 'header',
        data () {
            const validatePsw = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.pswDetail.newPswConfirm !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.pswForm.validateField('newPswConfirm');
                    }
                    callback();
                }
            };
            const validatePswConfirm = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'));
                } else if (value !== this.pswDetail.newPsw) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                currentActiveKey: this.activeKey,
                modalVisible: false,
                loading: true,
                pswDetail: {
                    oldPsw: '',
                    newPsw: '',
                    newPswConfirm: ''
                },
                rules: {
                    oldPsw: [
                        {
                            required: true,
                            message: '旧密码不能为空'
                        }
                    ],
                    newPsw: [
                        {
                            required: true,
                            validator: validatePsw
                        }
                    ],
                    newPswConfirm: [
                        {
                            required: true,
                            validator: validatePswConfirm
                        }
                    ]
                }
            };
        },
        props: {
            activeKey: String
        },
        computed: {
            ...mapState([
                'userInfo'
            ])
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            }
        },
        methods: {
            handleSelect (type) {
                //切换一级菜单
                if (siderbar[type][0].children) {
                    this.$router.push(siderbar[type][0].children[0].path);
                } else {
                    this.$router.push(siderbar[type][0].path);
                }
                this.$nextTick(() => {
                    this.updateActiveNav(type);
                });
            },
            updateActiveNav (type) {
                this.currentActiveKey = type;
            },
            handleClickDropdown (name) {
                //点击下拉菜单
                if (name === 'changePsw') {
                    this.modalVisible = true;
                } else {
                    this.$store.commit('SET_USERINFO', '');
                    window.localStorage.removeItem('aijiaUserdata');
                    this.$router.push('/login');
                }
            },
            changeLoading() {
                this.loading = false;
                this.$nextTick(() => {
                    this.loading = true;
                });
            },
            handleChangePsd () {
                //确认修改密码
                this.$refs.pswForm.validate((valid) => {
                    if (valid) {
                        let userInfo = JSON.parse(window.localStorage.getItem('aijiaUserdata'));
                        let formData = new FormData();
                        formData.append('adminId', userInfo.userId);
                        formData.append('username', userInfo.username);
                        formData.append('password', this.pswDetail.oldPsw);
                        formData.append('newPassword', this.pswDetail.newPsw);
                        this.$http({
                            method: 'post',
                            url: '/admin/resetPassword',
                            data: formData,
                            login: false
                        }).then(response => {
                            const res = response.data;
                            if (res.code === 1) {
                                this.$Message.success('修改密码成功!');
                                this.$store.commit('SET_USERINFO', '');
                                window.localStorage.removeItem('aijiaUserdata');
                                this.$router.push('/login');
                            } else {
                                this.$Message.error(res.ext.msg);
                                this.changeLoading();
                            }
                        });
                    } else {
                        this.changeLoading();
                    }
                });
            }
        }
    };
</script>

<style>
    .logo {
        float: left;
        height: 30px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .nav-wrapper {
        display: flex;
        justify-content: flex-end;
    }
    .nav-wrapper a {
        color: #9ea7b4;
    }
</style>
