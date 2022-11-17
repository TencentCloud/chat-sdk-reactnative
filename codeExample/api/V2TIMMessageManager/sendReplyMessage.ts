import { TencentImSDKPlugin, MessagePriorityEnum } from 'react-native-tim-js';

// 创建文本消息
const createTextMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage(
        'test' // 回复消息的文本信息
    );
//查询消息
const findMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .findMessages([]); //需要查询的消息id
if (createTextMessageRes.code == 0) {
    // 文本信息创建成功
    const id = createTextMessageRes.data?.id;
    // 发送文本消息
    // 在sendMessage时，若只填写receiver则发个人用户单聊消息
    //                 若只填写groupID则发群组消息
    //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendReplyMessage({
            id: id!, // 发送的回复消息的id
            receiver: 'userID', // 接收人id
            groupID: 'groupID', // 接收群组id
            replyMessage: findMessageRes.data![0], // 被回复的消息 类型为V2TimMessage
            priority: MessagePriorityEnum.V2TIM_PRIORITY_DEFAULT, // 消息优先级
            onlineUserOnly: false, // 是否只有在线用户才能收到，如果设置为 true ，接收方历史消息拉取不到，常被用于实现“对方正在输入”或群组里的非重要提示等弱提示功能，该字段不支持 AVChatRoom。
            isExcludedFromUnreadCount: false, // 发送消息是否计入会话未读数
            needReadReceipt: false, // 消息是否需要已读回执（只有 Group 消息有效，6.1 及以上版本支持，需要您购买旗舰版套餐）
            offlinePushInfo: {}, // 离线推送时携带的标题和内容
            localCustomData: '', // 消息本地数据，消息附带的额外的数据，存本地，消息的接受者不可以访问到，App 卸载后数据丢失
        });
    if (sendMessageRes.code === 0) {
        // 发送成功
    }
}
