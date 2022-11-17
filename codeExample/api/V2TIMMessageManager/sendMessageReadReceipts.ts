import { TencentImSDKPlugin } from 'react-native-tim-js';

// 用户首先需要创建一条信息
const createCustomMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createCustomMessage({
        data: '正在输入中',
    });
// 发送消息时，需要把needReadReceipt设置为true
TencentImSDKPlugin.v2TIMManager.getMessageManager().sendMessage({
    id: createCustomMessageRes.data!.id!,
    receiver: '',
    groupID: 'groupID',
    onlineUserOnly: true,
    needReadReceipt: true,
}); // 消息需要已读回执设置
// 通过消息id确认消息已读
// 接收端发送消息已读回执后，发送端可以通过 V2TimAdvancedMsgListener 的 onRecvMessageReadReceipts 回调监听消息已读回执通知
const sendMessageReadReceipts = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .sendMessageReadReceipts([createCustomMessageRes.data!.id!]); // 需要确认已读的消息id
if (sendMessageReadReceipts.code === 0) {
    // 成功
} else {
    // 失败
}
