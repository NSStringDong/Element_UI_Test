<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" active-text-color="#20a0ff" unique-opened router>
			<template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				collapse: false,
                items: [
                    {
                        icon: 'el-icon-tickets',
                        index: '0',
                        title: '运营管理',
                        subs: [
                            {
                                index: 'partner',
                                title: '合作伙伴'
                            },
                            {
                                index: 'fee',
                                title: '资费定义'
                            },
                            {
                            	index: 'feeRule',
                            	title: '结算规则'
                            },
                            {
                            	index: 'userManage',
                            	title: '用户管理'
                            },
                            {
                            	index: 'chargeOrder',
                            	title: '充电订单'
                            },
                            {
                            	index: 'chargeManege',
                            	title: '充值管理'
                            },
                            {
                            	index: 'couponManage',
                            	title: '优惠券管理'
                            },
                            {
                            	index: 'userMessage',
                            	title: '用户反馈'
                            },
                            {
                            	index: 'refound',
                            	title: '退款申请'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '1',
                        title: '售前管理',
                        subs: [
                            {
                                index: 'contractManage',
                                title: '合同管理'
                            },
                            {
                                index: 'sendApply',
                                title: '发货申请'
                            },
                            {
                            	index: 'online',
                            	title: '上线申请'
                            },
                            {
                            	index: 'survey',
                            	title: '站点勘察'
                            },
                            {
                            	index: 'electerManage',
                            	title: '电工管理'
                            },
                            {
                            	index: 'orderManage',
                            	title: '订货管理'
                            },
                            {
                            	index: 'rejected',
                            	title: '退货管理'
                            },
                            {
                            	index: 'transfer',
                            	title: '迁移管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '2',
                        title: '站点管理',
                        subs: [
                            {
                                index: 'car',
                                title: '汽车充电站'
                            },
                            {
                                index: 'bike',
                                title: '自行车充电站'
                            },
                            {
                            	index: 'deviceManage',
                            	title: '设备管理'
                            },
                            {
                            	index: 'module',
                            	title: '充电口'
                            },
                            {
                            	index: 'wireless',
                            	title: '无线中继'
                            },
                            {
                            	index: 'sim',
                            	title: 'sim卡管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '3',
                        title: '维护',
                        subs: [
                            {
                                index: 'emergencyManage',
                                title: '告警管理'
                            },
                            {
                                index: 'abnormalOrder',
                                title: '异常订单分析'
                            },
                            {
                            	index: 'malfunction',
                            	title: '故障分析'
                            },
                            {
                            	index: 'upgrade',
                            	title: '升级任务'
                            },
                            {
                            	index: 'hardware',
                            	title: '硬件管理'
                            },
                            {
                            	index: 'repair',
                            	title: '维修单'
                            },
                            {
                            	index: 'repairAnalysis',
                            	title: '维修单分析'
                            },
                            {
                            	index: 'map',
                            	title: '上报地图'
                            },
                            {
                            	index: 'messageList',
                            	title: '消息记录'
                            },
                            {
                            	index: 'testOrder',
                            	title: '测试站订单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '4',
                        title: '财务',
                        subs: [
                            {
                                index: 'billing',
                                title: '工单开票回款'
                            },
                            {
                                index: 'buildSettlement',
                                title: '安装商结算'
                            },
                            {
                            	index: 'carSettlement',
                            	title: '4S店结算'
                            },
                            {
                            	index: 'stationBill',
                            	title: '站点账单'
                            },
                            {
                            	index: 'propertyBill',
                            	title: '物业账单'
                            },
                            {
                            	index: 'installSubsidy',
                            	title: '安装补贴'
                            },
                            {
                            	index: 'withdrawalReview',
                            	title: '提现审核'
                            },
                            {
                            	index: 'financeClean',
                            	title: '财务清算表'
                            },
                            {
                            	index: 'financeCommercial',
                            	title: '资产报表'
                            },
                            {
                            	index: 'meterRead',
                            	title: '抄表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '5',
                        title: '报表',
                        subs: [
                            {
                                index: 'bikeAnalysis',
                                title: '自行车分析'
                            },
                            {
                                index: 'operationData',
                                title: '运营数据'
                            },
                            {
                            	index: 'orderAnalysis',
                            	title: '工单分析'
                            },
                            {
                            	index: 'salesmanAnalysis',
                            	title: '业务员分析'
                            },
                            {
                            	index: 'companyAnalysis',
                            	title: '公司业务分析'
                            },
                            {
                            	index: 'performance',
                            	title: '绩效'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '6',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'operator',
                                title: '操作员管理'
                            },
                            {
                                index: 'permission',
                                title: '权限管理'
                            }
                        ]
                    }
                ]
			}
		},
		computed:{
            onRoutes(){
                // return this.$route.path.replace('/','');
                return;
            }
        },
        methods: {
        	
        }
	}
</script>
<style>
	.sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 150px;
    }
    .sidebar > ul {
        height:100%;
    }
    element.style {
    	padding-left: 0 !important;
	}
    el-submenu:hover {
		background-color: none;
    }
    .el-submenu__title {
    	color: #8d8d8d;
    }
    .el-submenu__title:hover {
    	color: #65be01;
    }
    .el-menu-item {
    	text-align: left !important;
    	height: 44px !important;
    	line-height: 44px !important;
    	min-width: 0 !important;
    	/*padding: 0 !important;*/
    }
    .el-menu-item.is-active {
		background-color: #65be01 !important; 
    	color: #ffffff !important;
    }
</style>