import { TencentImSDKPlugin } from 'react-native-tim-js';

// 需要解散的群ID
const groupID = 'groupID';
// 解散群
const dismissGroupRes = await TencentImSDKPlugin.v2TIMManager.dismissGroup(
    groupID
);
if (dismissGroupRes.code === 0) {
    // 解散成功
}
