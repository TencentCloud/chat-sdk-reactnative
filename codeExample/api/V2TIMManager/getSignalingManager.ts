import { TencentImSDKPlugin } from 'react-native-tim-js';

// 使用getSignalingManager设置信令监听器与创建邀请的案例
//设置信令监听器
const listener = {
    onInvitationCancelled: (inviteID, inviter, data) => {},
    onInvitationTimeout: (inviteID, inviteeList) => {
        //邀请超时的回调
        //inviteID 邀请消息信令id
        //inviteeList 被邀请人的列表
    },
    onInviteeAccepted: (inviteID, invitee, data) => {
        //邀请被接受的回调
        //inviteID 邀请消息信令id
        //inviter 被邀请人id
        //data 接受邀请时的自定义data
    },
    onInviteeRejected: (inviteID, invitee, data) => {
        //邀请被拒绝的回调
        //inviteID 邀请消息信令id
        //inviter 被邀请人id
        //data 拒绝邀请时的自定义data
    },
    onReceiveNewInvitation: (inviteID, inviter, groupID, inviteeList, data) => {
        //获取新的邀请的回调
        //inviteID 邀请消息信令id
        //inviter 邀请人id
        //groupID 发出邀请的群组id
        //inviteeList 被邀请人的列表
        //data 邀请时的自定义data
    },
};
TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .addSignalingListener(listener); //添加信令监听器

const invitee = ''; //被邀请人id
const data = 'data'; //邀请时附带的定义消息
const timeout = 30; //邀请超时时间
const onlineUserOnly = false; //是否只发给在线用户
const offlinePushInfo = {
    title: '',
}; // 离线推送信息
const inviteRes = await TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .invite(invitee, data, timeout, onlineUserOnly, offlinePushInfo); //离线推送设置
if (inviteRes.code === 0) {
    //创建邀请成功
    const inviteId = inviteRes.data; //创建的邀请id
    console.log(inviteId);
}
