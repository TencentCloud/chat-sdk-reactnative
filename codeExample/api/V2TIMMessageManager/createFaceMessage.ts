import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建表情消息
const createFaceMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createFaceMessage(
        0, // 表情索引

        '自定义消息'
    );
if (createFaceMessageRes.code === 0) {
    const id = createFaceMessageRes.data?.id;
    // 发送表情消息
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
