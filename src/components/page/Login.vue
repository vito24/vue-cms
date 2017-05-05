<template>
    <Row type="flex" justify="center" align="middle" class="vi-login">
        <i-col span="5" class="form">
            <Form ref="userinfo" :model="userinfo" :rules="rules">
                <Form-item prop="username">
                    <i-input type="text" v-model="userinfo.username" placeholder="Username"></i-input>
                </Form-item>
                <Form-item prop="password">
                    <i-input type="password" v-model="userinfo.password" placeholder="Password"></i-input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit" class="vi-login-btn">登录</Button>
                </Form-item>
            </Form>
        </i-col>
    </Row>
</template>

<script>
    export default {
        data () {
            return {
                userinfo: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: '请填写用户名',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请填写密码',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs.userinfo.validate((valid) => {
                    if (valid) {
                        const userinfo = this.userinfo;
                        let formData = new FormData();
                        formData.append('username', userinfo.username);
                        formData.append('password', userinfo.password);
                        this.$http({
                            method: 'post',
                            url: '/admin/login/',
                            data: formData,
                            login: false
                        }).then(res => {
                            const data = res.data;
                            console.log(data)
                            if (data.code === 1) {
                                //登陆成功
                                const obj = {
                                    userId: data.obj.queryAdmin.adminId,
                                    sessionId: data.obj.queryAdmin.sessionId,
                                    username: data.obj.queryAdmin.username,
                                    menuList: data.obj.menuList,
                                    roleCode: data.obj.adminInfo && data.obj.adminInfo.roleCode,
                                    companyCode: data.obj.adminInfo && data.obj.adminInfo.companyCode
                                };
                                window.localStorage.setItem('aijiaUserdata', JSON.stringify(obj));
                                this.$router.push('/home/index');
                            } else if (data.code === 20) {
                                //首次登录
                            } else {
                                //登录异常
                                this.$Message.error(data.ext.msg);
                            }
                        });
                    } else {
                        this.$Message.error('请填写正确的用户信息!');
                    }
                })
            }
        }
    }
</script>

<style>
    #app {
        background-color: #364150;
    }
    .vi-login {
        height: 100%;
    }
    .vi-login-btn {
        width: 100%;
    }
    .ivu-input {
        height: 36px;
    }
</style>
