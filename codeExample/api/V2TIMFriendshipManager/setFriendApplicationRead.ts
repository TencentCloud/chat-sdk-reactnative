import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置好友申请已读
const setFriendApplicationReadRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .setFriendApplicationRead();
if (setFriendApplicationReadRes.code === 0) {
    // 设置成功
}
