import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置信令监听器
const listener = {
    onInvitationCancelled: (inviteID, inviter, data) => {
        //邀请被取消的回调
        //inviteID 邀请消息信令id
        //inviter 邀请人id
        //data 邀请被取消时的自定义data
    },
    onInvitationTimeout: (inviteID, inviteeList) => {},
    onInviteeAccepted: (inviteID, invitee, data) => {},
    onInviteeRejected: (inviteID, invitee, data) => {},
    onReceiveNewInvitation: (
        inviteID,
        inviter,
        groupID,
        inviteeList,
        data
    ) => {},
};
TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .addSignalingListener(listener);
const cancelRes = await TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .cancel(
        'inviteID', //被取消邀请的id
        ''
    ); //取消邀请时附带的定义消息
if (cancelRes.code === 0) {
    //取消成功
}
