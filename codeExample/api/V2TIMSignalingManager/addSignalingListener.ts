import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置信令监听器
const listener = {
    onInvitationCancelled: (inviteID, inviter, data) => {
        //邀请被取消的回调
        //inviteID 邀请消息信令id
        //inviter 邀请人id
        //data 邀请被取消时的自定义data
    },
    onInvitationTimeout: (inviteID, inviteeList) => {
        //邀请超时的回调
        //inviteID 邀请消息信令id
        //inviteeList 被邀请人的列表
    },
    onInviteeAccepted: (inviteID, invitee, data) => {
        //邀请被接受的回调
        //inviteID 邀请消息信令id
        //invitee 被邀请人id
        //data 接受邀请时的自定义data
    },
    onInviteeRejected: (inviteID, invitee, data) => {
        //邀请被拒绝的回调
        //inviteID 邀请消息信令id
        //invitee 被邀请人id
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
