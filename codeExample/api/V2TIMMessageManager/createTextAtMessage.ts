import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建文本消息
const createTextAtMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextAtMessage(
        'test', // 文本信息
        ['__kImSDK_MesssageAtALL__', 'uesr1'] // @用户ID列表 @所有人并@uesr1
    );
if (createTextAtMessageRes.code === 0) {
    // 文本信息创建成功
    const id = createTextAtMessageRes.data?.id;
    // 发送@文本消息
    // 在sendMessage时，必须填写groupID，receiver必须为空，否则无法发送消息
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendMessage({ id: id!, receiver: '', groupID: 'groupID' });
    if (sendMessageRes.code === 0) {
        // 发送成功
    }
}
