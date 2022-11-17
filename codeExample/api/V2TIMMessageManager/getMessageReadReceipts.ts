import { TencentImSDKPlugin } from 'react-native-tim-js';

// 查询消息已读回执
const getMessageReadReceipts = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getMessageReadReceipts([]); // 需要查询的的消息id列表
if (getMessageReadReceipts.code === 0) {
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
