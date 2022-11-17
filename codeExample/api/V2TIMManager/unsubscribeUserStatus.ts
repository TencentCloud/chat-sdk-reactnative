import { TencentImSDKPlugin } from 'react-native-tim-js';

//取消订阅用户状态
const unsubscribeUserStatusRes =
    await TencentImSDKPlugin.v2TIMManager.unsubscribeUserStatus([]); // 订阅的用户id列表
if (unsubscribeUserStatusRes.code === 0) {
    // 取消订阅成功
}
