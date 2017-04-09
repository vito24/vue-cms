<template>
	<div class="product-list">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>商品</el-breadcrumb-item>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>所有商品</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="pt10">
            <el-form>
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-form-item label="商品名称" label-width="80px">
                            <el-input placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="厂家型号" label-width="80px">
                            <el-input placeholder="请输入厂家型号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="SPU编号" label-width="80px">
                            <el-input placeholder="请输入SPU编号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="SKU编号" label-width="80px">
                            <el-input placeholder="请输入SKU编号"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24" class="tr">
                        <el-form-item>
                            <el-button @click="reset">清空</el-button>
                            <el-button type="primary" @click="search">搜索</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'product list'
			}
		},
        methods: {
		    reset () {
                console.log('reset');
            },
            search () {
                console.log('search');
            }
        }
	}
</script>

<style scoped>

</style>
