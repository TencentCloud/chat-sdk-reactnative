import { TencentImSDKPlugin } from 'react-native-tim-js';

//订阅用户状态
const subscribeUserStatusRes =
    await TencentImSDKPlugin.v2TIMManager.subscribeUserStatus([]); // 订阅的用户id列表
if (subscribeUserStatusRes.code === 0) {
    // 订阅成功
}
