/*
 * 合作伙伴类型 0:小绿人 1:电动汽车物业 2:安装商 3:4s店 4:车企 5:自行车站主
 */
export var getPartnertype = function (type) {
	switch (type) {
		case 0:
			return "小绿人";
		case 1:
			return "电动汽车物业";
		case 2:
			return "安装商";
		case 3:
			return "4S店";
		case 4:
			return "车企";
		case 5:
			return "自行车物业";
		case 6:
			return "自行车站主";
		case 7:
			return "代理商";
		default :
			return "";
		
	}
}
/*
 * 分成方式
 */
export var getProrationType = function (type) {
	switch (type){
		default: return "";
		case 1:
			return "按比例分成";
		case 2:
			return "抄表";
		case 3:
			return "小绿人收取管理费";
		case 4:
			return "小绿人资费提成";
		case 5:
			return "系统度数";
		case 6:
			return "按梯度分成";
        case 7:
            return "扣除电费分成";
        case 8:
            return "订单数提成";
        case 9:
            return "扣除订单数服务费提成";
		case -1:
			return "按业务类型结算";
        case 99:
            return "无结算"
	}
}
/*
 * 分成比例转换
 */
export var getProration = function (num) {
	if (num <= 0 || num == null) {
		return "";
	} else{
		return num+"%";
	}
}