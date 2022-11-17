import {
    TencentImSDKPlugin,
    GroupMemberRoleTypeEnum,
} from 'react-native-tim-js';

// 设置群成员的角色
const setGroupMemberRoleRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .setGroupMemberRole(
        'groupID', // 设置群组的id
        'userID', // 被设置角色的用户id
        GroupMemberRoleTypeEnum.V2TIM_GROUP_MEMBER_ROLE_ADMIN // 用户被设置的角色属性
    );
if (setGroupMemberRoleRes.code === 0) {
    // 设置成功
}
