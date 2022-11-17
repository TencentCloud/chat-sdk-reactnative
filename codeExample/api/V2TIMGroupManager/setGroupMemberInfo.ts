import { TencentImSDKPlugin } from 'react-native-tim-js';

// 修改指定的群成员资料
const setGroupMemberInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .setGroupMemberInfo(
        'groupID', // 需要修改的群组id
        'userID', // 需要修改的用户id
        '', // 修改名片属性
        { custom: 'custom' } // 修改自定义属性 需开通此功能
    );
if (setGroupMemberInfoRes.code === 0) {
    // 修改成功
}
