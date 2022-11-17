import { TencentImSDKPlugin, GroupAddOptEnum } from 'react-native-tim-js';

// 使用getGroupManager创建群组的案例
// 创建群组
const createGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .createGroup({
        groupType: 'Publich', // 群类型
        groupName: 'groupName', // 群名称，不能为 null。
        notification: '', // 群公告
        introduction: '', // 群介绍
        faceUrl: '', // 群头像Url
        isAllMuted: false, // 是否全体禁言
        isSupportTopic: false, // 是否支持话题
        addOpt: GroupAddOptEnum.V2TIM_GROUP_ADD_AUTH, // 添加群设置
        memberList: [], // 初始成员列表
    });
if (createGroupRes.code === 0) {
    // 创建成功
    const groupID = createGroupRes.data; // 创建的群号
    console.log(groupID);
}
