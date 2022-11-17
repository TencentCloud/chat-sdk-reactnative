import { TencentImSDKPlugin } from 'react-native-tim-js';

//群组踢人
const kickGroupMemberRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .kickGroupMember(
        'groupID', // 需要踢人的群组id
        [], // 踢出的用户id列表
        'reason' // 踢出原因
    );
if (kickGroupMemberRes.code === 0) {
    // 踢出成功
}
