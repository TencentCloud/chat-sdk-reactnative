import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取信令信息
const getSignalingInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .getSignalingInfo('msgID'); //信令消息的id
if (getSignalingInfoRes.code === 0) {
    //查询成功

    //信令状态
    //1:邀请方发起邀请
    //2:邀请方取消邀请
    //3:被邀请方接受邀请
    //4:被邀请方拒绝邀请
    //5:邀请超时
    getSignalingInfoRes.data?.actionType; //信令状态
    getSignalingInfoRes.data?.businessID; //传1即可
    getSignalingInfoRes.data?.data; //信令的自定义消息
    getSignalingInfoRes.data?.groupID; //发出信令的群组id
    getSignalingInfoRes.data?.inviteID; //邀请ID
    getSignalingInfoRes.data?.inviteeList; //信令接收人列表
    getSignalingInfoRes.data?.inviter; //邀请人ID
    getSignalingInfoRes.data?.isOnlineUserOnly; //是否只发送给在线用户 ios不回返回这条
    getSignalingInfoRes.data?.offlinePushInfo; //离线消息推送设置 ios不回返回这条
    getSignalingInfoRes.data?.timeout; //信令超时时间
}
