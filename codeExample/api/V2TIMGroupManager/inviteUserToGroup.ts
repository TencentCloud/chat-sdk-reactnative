import { TencentImSDKPlugin } from 'react-native-tim-js';

// 邀请他人入群
const inviteUserToGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .inviteUserToGroup(
        'groupID', // 需要加入的群组id
        [] // 邀请的用户id列表
    );
if (inviteUserToGroupRes.code == 0) {
    // 邀请成功
    inviteUserToGroupRes.data?.forEach((element) => {
        element.memberID; // 被操作成员 ID
        // 邀请结果状态
        // 0:操作失败，1:操作成功，2:无效操作，加群时已经是群成员
        // 3:等待处理，邀请入群时等待对方处理，4:操作失败，创建群指定初始群成员列表或邀请入群时，被邀请者加入的群总数超限
        element.result; // 邀请结果状态
    });
}
