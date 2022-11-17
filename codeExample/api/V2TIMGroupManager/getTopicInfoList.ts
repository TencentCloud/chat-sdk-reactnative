import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取话题属性的列表
const getTopicInfoListoRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getTopicInfoList(
        'groupID', // 需要获取话题属性的群组id
        [] // 需要获取话题属性的话题id列表
    );
if (getTopicInfoListoRes.code == 0) {
    // 查询成功
    getTopicInfoListoRes.data?.forEach((element) => {
        element.errorCode; // 查询结果错误码
        element.errorMessage; // 查询结果描述
        element.topicInfo?.customString; // 此条话题的自定义信息
        element.topicInfo?.draftText; // 此条话题的草稿
        element.topicInfo?.groupAtInfoList; // 此条话题的@信息列表
        element.topicInfo?.introduction; // 此条话题的介绍
        element.topicInfo?.isAllMute; // 此条话题是否全员禁言
        element.topicInfo?.lastMessage; // 此条话题的最新消息
        element.topicInfo?.notification; // 此条话题的公告
        element.topicInfo?.recvOpt; // 此条话题的话题消息接收选项
        element.topicInfo?.selfMuteTime; // 当前用户在此条话题中的禁言时间
        element.topicInfo?.topicFaceUrl; // 此条话题的头像Url
        element.topicInfo?.topicID; // 此条话题的id
        element.topicInfo?.unreadCount; // 此条话题的消息未读数量
    });
}
