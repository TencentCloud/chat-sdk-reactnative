import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建文件消息
const createFileMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createFileMessage(
        '本地文件绝对路径', // 不能使用网络Url
        '文件名'
    );
if (createFileMessageRes.code === 0) {
    const id = createFileMessageRes.data?.id;
    // 发送文件消息
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
