import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取加群的申请列表
const getGroupApplicationListRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupApplicationList();
if (getGroupApplicationListRes.code == 0) {
    // 获取成功
    getGroupApplicationListRes.data?.groupApplicationList?.forEach(
        (element) => {
            element?.addTime; // 申请时间
            element?.fromUser; // 请求者 userID
            element?.fromUserFaceUrl; // 请求者头像
            element?.fromUserNickName; // 请求者昵称
            element?.groupID; // 申请的群组ID
            element?.handleMsg; // 审批信息：同意或拒绝信息
            element?.handleResult; // 处理结果
            element?.handleStatus; // 处理标志 0:未处理 1:被他人处理 2:自己已处理
            element?.requestMsg; // 申请或邀请附加信息 0:拒绝申请 1:同意申请
            element?.toUser; // 判决者id，有人请求加群:0，邀请其他人加群:被邀请人用户 ID
            element?.type; // 请求类型 0:申请入群 1:邀请入群
        }
    );
}
