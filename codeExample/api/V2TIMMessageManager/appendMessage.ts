import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建文本消息
const createTextMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage(
        'test' // 文本信息
    );
// 创建append消息
const createAppendMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage(
        'append' // 添加的文本信息
    );
if (createTextMessageRes.code === 0 && createAppendMessageRes.code === 0) {
    // 文本信息创建成功
    const id = createTextMessageRes.data?.id;
    const appendId = createAppendMessageRes.data?.id;
    // 为第一个消息添加一个Text消息
    const appendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .appendMessage(id!, appendId!);
    if (appendMessageRes.code === 0) {
        // 发送文本消息
        // 在sendMessage时，若只填写receiver则发个人用户单聊消息
        //                 若只填写groupID则发群组消息
        //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
        const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
            .getMessageManager()
            .sendMessage({ id: id!, receiver: 'userID', groupID: 'groupID' }); //注意此时的id为被添加的消息id
        if (sendMessageRes.code === 0) {
            // 发送成功
            // append的Text消息在sendMessageRes.data.textElem.nextElem中
        }
    }
}
