import { TencentImSDKPlugin } from 'react-native-tim-js';

// 使用getMessageManager创建消息的案例
// 创建文本消息
const textMessage = 'test'; // 文本信息

const createTextMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage(textMessage);
if (createTextMessageRes.code === 0) {
    // 文本信息创建成功
    const id = createTextMessageRes.data?.id;
    // 发送文本消息
    // 在sendMessage时，若只填写receiver则发个人用户单聊消息
    //                 若只填写groupID则发群组消息
    //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendMessage({ id: id!, receiver: 'userID', groupID: 'groupID' });
    if (sendMessageRes.code === 0) {
        // 发送成功
    }
}
