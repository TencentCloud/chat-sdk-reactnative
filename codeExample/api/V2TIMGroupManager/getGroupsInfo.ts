import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取群资料
const getGroupsInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupsInfo([]); // 需要查询的群组id列表
if (getGroupsInfoRes.code == 0) {
    // 查询成功
    getGroupsInfoRes.data?.forEach((element) => {
        element.resultCode; // 此群组查询结果码
        element.resultMessage; // 此群查询结果描述
        element.groupInfo?.createTime; // 群创建时间
        element.groupInfo?.customInfo; // 群自定义字段
        element.groupInfo?.faceUrl; // 群头像Url
        element.groupInfo?.groupAddOpt; // 群添加选项设置
        element.groupInfo?.groupID; // 群ID
        element.groupInfo?.groupName; // 群名
        element.groupInfo?.groupType; // 群类型
        element.groupInfo?.introduction; // 群介绍
        element.groupInfo?.isAllMuted; // 群是否全体禁言
        element.groupInfo?.isSupportTopic; // 群是否支持话题
        element.groupInfo?.joinTime; // 当前用户在此群的加入时间
        element.groupInfo?.lastInfoTime; // 最后一次群修改资料的时间
        element.groupInfo?.lastMessageTime; // 最后一次群发消息的时间
        element.groupInfo?.memberCount; // 群员数量
        element.groupInfo?.notification; // 群公告
        element.groupInfo?.onlineCount; // 群在线人数
        element.groupInfo?.owner; // 群主
        element.groupInfo?.recvOpt; // 当前用户在此群中接受信息的选项
        element.groupInfo?.role; // 此用户在群中的角色
    });
}
