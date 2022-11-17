import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建转发消息
const createForwardMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createForwardMessage(
        // 需要合并的消息id列表，需要被转发的消息列表，消息列表里可以包含合并消息，不能包含群 Tips 消息 messageId为消息发送后服务端创建的messageid，不是创建消息时的消息id
        'msgid'
    );
if (createForwardMessageRes.code === 0) {
    // 文本信息创建成功
    const id = createForwardMessageRes.data!.id!;
    // 发送转发消息
    // 在sendMessage时，若只填写receiver则发个人用户单聊消息
    //                 若只填写groupID则发群组消息
    //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendMessage({ id: id, receiver: 'userID', groupID: 'groupID' });
    if (sendMessageRes.code === 0) {
        // 发送成功
    }
}
