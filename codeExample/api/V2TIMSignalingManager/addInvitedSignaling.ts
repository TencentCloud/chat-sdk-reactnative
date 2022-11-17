import { TencentImSDKPlugin } from 'react-native-tim-js';

//创建的信令消息的设置
const addInvitedSignalingRes = await TencentImSDKPlugin.v2TIMManager
    .getSignalingManager()
    .addInvitedSignaling({
        //信令状态
        //1:邀请方发起邀请
        //2:邀请方取消邀请
        //3:被邀请方接受邀请
        //4:被邀请方拒绝邀请
        //5:邀请超时
        actionType: 1, //信令状态
        businessID: 1, //传1即可
        data: '', //信令的自定义消息
        groupID: '', //发出信令的群组id
        inviteeList: [], //信令接收人列表
        inviteID: '', //邀请ID
        timeout: 30, //信令超时时间
        inviter: '', //邀请人ID
        isOnlineUserOnly: false, //是否只发送给在线用户
        offlinePushInfo: {},
    }); //创建的信令消息的设置
if (addInvitedSignalingRes.code === 0) {
    //创建成功
}
