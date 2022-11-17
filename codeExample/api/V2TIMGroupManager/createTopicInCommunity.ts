import { TencentImSDKPlugin, V2TimTopicInfo } from 'react-native-tim-js';

//创建话题
const topicInfo: V2TimTopicInfo = {
    customString: '', // 话题自定义字段
    draftText: '', // 话题草稿
    groupAtInfoList: [], // 话题 at 信息列表
    introduction: '', // 话题介绍
    isAllMute: false, // 话题是否全员禁言
    lastMessage: undefined, // 话题最新消息
    notification: '', // 话题公告
    selfMuteTime: 0, // 当前用户在话题中的禁言时间
    topicFaceUrl: '', // 话题头像Url
    topicID: '', // 话题id
    topicName: '', // 话题名称
    unreadCount: 0, // 话题消息未读数量
};
const createTopicInCommunityRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .createTopicInCommunity(
        'groupID', // 需要创建话题的群组id
        topicInfo // 创建话题的设置
    );
if (createTopicInCommunityRes.code === 0) {
    // 创建成功
    createTopicInCommunityRes.data; // 被创建话题的id
}
