import { TencentImSDKPlugin } from 'react-native-tim-js';

// 转让群主
const transferGroupOwnerRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .transferGroupOwner('groupID', 'userID');
if (transferGroupOwnerRes.code === 0) {
    // 转让成功
}
