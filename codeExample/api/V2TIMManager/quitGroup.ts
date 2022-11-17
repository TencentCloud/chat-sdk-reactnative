import { TencentImSDKPlugin } from 'react-native-tim-js';

const groupID = 'groupID'; // 需要退出的群组 ID

// 退出群组
const quitGroupRes = await TencentImSDKPlugin.v2TIMManager.quitGroup(groupID);
if (quitGroupRes.code === 0) {
    // 退出成功
}
