import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建合并消息
const createMergerMessageResult = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createMergerMessage(
        // 需要合并的消息id列表，需要被转发的消息列表，消息列表里可以包含合并消息，不能包含群 Tips 消息 messageId为消息发送后服务端创建的messageid，不是创建消息时的消息id
        ['msgid1', 'msgid2'],
        'user1与user2的聊天', // 合并消息标题
        ['user1:hello', 'user2:你好'], // 合并消息摘要列表
        '当前版本不支持该消息' // 合并消息兼容文本，低版本 SDK 如果不支持合并消息，默认会收到一条文本消息，文本消息的内容为 compatibleText
    );
if (createMergerMessageResult.code === 0) {
    // 发送合并消息
    // 在sendMessage时，若只填写receiver则发个人用户单聊消息
    //                 若只填写groupID则发群组消息
    //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    TencentImSDKPlugin.v2TIMManager.getMessageManager().sendMessage({
        id: createMergerMessageResult.data!.id!,
        receiver: 'receiver',
        groupID: 'groupID',
    });
}
