import { TencentImSDKPlugin } from 'react-native-tim-js';

// 禁言群组内的用户
const muteGroupMemberRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .muteGroupMember(
        'groupID', // 禁言的群组id
        'userID', // 禁言的用户id
        0 // 禁言时间
    );
if (muteGroupMemberRes.code === 0) {
    // 禁言成功
}
