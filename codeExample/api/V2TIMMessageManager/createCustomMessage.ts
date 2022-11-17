import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建自定义消息
const createCustomMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createCustomMessage({
        data: '自定义data',
        desc: '自定义desc',
        extension: '自定义extension',
    });
if (createCustomMessageRes.code === 0) {
    const id = createCustomMessageRes.data?.id;
    // 发送自定义消息
    // 在sendMessage时，若只填写receiver则发个人用户单聊消息
    //                 若只填写groupID则发群组消息
    //                 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendMessage({ id: id!, receiver: 'userID', groupID: 'groupID' });
    if (sendMessageRes.code === 0) {
        // 发送成功
        sendMessageRes.data?.customElem?.data; //自定义data
        sendMessageRes.data?.customElem?.desc; //自定义desc
        sendMessageRes.data?.customElem?.extension; //自定义extension
    }
}
