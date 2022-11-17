import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取当前用户已经加入的支持话题的社群列表
const getJoinedCommunityListRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getJoinedCommunityList();
if (getJoinedCommunityListRes.code === 0) {
    // 查询成功
    getJoinedCommunityListRes.data?.forEach((element) => {
        element.createTime; // 群创建时间
        element.customInfo; // 群自定义字段
        element.faceUrl; // 群头像Url
        element.groupAddOpt; // 群添加选项设置
        element.groupID; // 群ID
        element.groupName; // 群名
        element.groupType; // 群类型
        element.introduction; // 群介绍
        element.isAllMuted; // 群是否全体禁言
        element.isSupportTopic; // 群是否支持话题
        element.joinTime; // 当前用户在此群的加入时间
        element.lastInfoTime; // 最后一次群修改资料的时间
        element.lastMessageTime; // 最后一次群发消息的时间
        element.memberCount; // 群员数量
        element.notification; // 群公告
        element.onlineCount; // 群在线人数
        element.owner; // 群主
        element.recvOpt; // 当前用户在此群中接受信息的选项
        element.role; // 此用户在群中的角色
    });
}
