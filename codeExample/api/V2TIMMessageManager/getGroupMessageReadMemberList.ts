import {
    TencentImSDKPlugin,
    GetGroupMessageReadMemberListFilter,
} from 'react-native-tim-js';

// 先创建消息
const target = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage('test');
const groupTargetdId = target.data?.id;

const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .sendMessage({
        id: groupTargetdId!,
        receiver: '',
        needReadReceipt: true,
        groupID: '',
    });

// 查询消息已读回执
const getMessageReadReceipts = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getMessageReadReceipts([sendMessageRes.data!.msgID!]); // 需要查询的的消息id列表
if (getMessageReadReceipts.code == 0) {
    getMessageReadReceipts.data?.forEach((element) => {
        // 解析群消息已读回执
        element.groupID; // 消息的群组id
        element.msgID; // 消息的id
        element.readCount; // 群消息已读人数
        element.timestamp;
        element.unreadCount; // 群消息未读人数
        element.userID; // 发送此消息的用户id
    });
}
//需要先调用查询消息已读回执 才能 获取群消息已读或未读群成员列表
const getGroupMessageReadMemberList = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getGroupMessageReadMemberList(
        sendMessageRes.data!.msgID!, // 查询的消息id
        GetGroupMessageReadMemberListFilter.V2TIM_GROUP_MESSAGE_READ_MEMBERS_FILTER_UNREAD, // 已读或未读的类型
        0, // 分页拉取标志，第一次填0，回调成功时若不为0则需要分页，再次传入拉去直到为0
        100 // 拉取数量
    );
if (getGroupMessageReadMemberList.code === 0) {
    // 获取群消息已读未读群成员列表
    getGroupMessageReadMemberList.data?.isFinished; // 是否拉去完
    getGroupMessageReadMemberList.data?.memberInfoList; // 已读或未读的成员列表
    getGroupMessageReadMemberList.data?.nextSeq; // 分页拉取的 seq 如果为 0 表示拉取结束
}
