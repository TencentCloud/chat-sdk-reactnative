import { TencentImSDKPlugin } from 'react-native-tim-js';

const groupID = 'groupID', // 需要加入群组 ID
    message = 'hello'; // 加群附带留言
// 加入群组
const joinGroupRes = await TencentImSDKPlugin.v2TIMManager.joinGroup(
    groupID, // 需要加入群组 ID
    message
);
if (joinGroupRes.code === 0) {
    // 加入成功
}
