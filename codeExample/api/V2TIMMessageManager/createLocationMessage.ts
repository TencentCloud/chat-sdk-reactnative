import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建位置消息
const createLocationMessage = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createLocationMessage(
        '深圳市南山区深南大道', //位置信息摘要
        34, // 经度
        20 // 纬度
    );
if (createLocationMessage.code === 0) {
    const id = createLocationMessage.data?.id;
    // 发送位置消息
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
