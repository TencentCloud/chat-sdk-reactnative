import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置信令监听器
const listener = {
    onInvitationCancelled: (inviteID, inviter, data) => {},
    onInvitationTimeout: (inviteID, inviteeList) => {},
    onInviteeAccepted: (inviteID, invitee, data) => {},
    onInviteeRejected: (inviteID, invitee, data) => {},
    onReceiveNewInvitation: async (
        inviteID,
        inviter,
        groupID,
        inviteeList,
        data
    ) => {
        //获取新的邀请的回调
        //inviteID 邀请消息信令id
        //inviter 邀请人id
        //groupID 发出邀请的群组id
        //inviteeList 被邀请人的列表
        //data 邀请时的自定义data
        const acceptRes = await TencentImSDKPlugin.v2TIMManager
            .getSignalingManager()
            .accept(
                inviteID, //邀请消息信令id
                ''
            ); //接受邀请时发送的自定义消息
        if (acceptRes.code == 0) {
            //接受邀请成功
        }
    },
};
TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .addSignalingListener(listener);
