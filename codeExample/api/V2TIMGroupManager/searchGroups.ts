import { TencentImSDKPlugin } from 'react-native-tim-js';

// 搜索群资料的搜索设置
const param = {
    isSearchGroupID: true, //设置是否搜索群 ID，默认为true
    isSearchGroupName: true, // 设置是否搜索群名称，默认为true
    keywordList: [],
}; // 搜索关键字列表，最多支持5个。
// 搜索群资料
const searchGroupsRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .searchGroups(param); // 搜索群资料的搜索设
if (searchGroupsRes.code === 0) {
    // 搜索成功
    searchGroupsRes.data?.forEach((element) => {
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
