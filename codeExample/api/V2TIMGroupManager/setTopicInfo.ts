import { TencentImSDKPlugin, V2TimTopicInfo } from 'react-native-tim-js';

// 设置话题属性 通过topicInfo中的topicID确定需要修改的话题
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
    topicID: '', // 需要修改的话题的id
    topicName: '', // 话题名称
    unreadCount: 0, // 话题消息未读数量
};
const setTopicInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .setTopicInfo(
        'groupID', // 话题所在的群组id
        topicInfo // 需要修改的话题的设置
    );
if (setTopicInfoRes.code === 0) {
    // 设置成功
}
