import { TencentImSDKPlugin } from 'react-native-tim-js';

const userIDList = []; // 需要查询用户在线状态的用户id列表
//获取用户在线状态
const getUserStatusRes = await TencentImSDKPlugin.v2TIMManager.getUserStatus(
    userIDList
);
if (getUserStatusRes.code === 0) {
    //查询成功
    getUserStatusRes.data?.forEach((element) => {
        element.customStatus; //此条为此API查询的用户在线状态字段
        element.statusType; //用户在线状态类型 1:在线状态 2:离线状态 3:未登录（如主动调用 logout 接口，或者账号注册后还未登录）
        element.userID; //用户id
    });
}
