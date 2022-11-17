import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建音频消息
const createSoundMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createSoundMessage(
        '本地录音文件绝对路径', // 不能使用网络Url
        10 // 录音时长，需要用户自己读取
    );
if (createSoundMessageRes.code === 0) {
    const id = createSoundMessageRes.data?.id;
    // 发送音频消息
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
