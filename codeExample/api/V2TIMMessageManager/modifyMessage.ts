import { TencentImSDKPlugin } from 'react-native-tim-js';

// 通过消息id查找到需要修改的消息
const msgListRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .findMessages(['msgid']); // 查找需要修改消息的id
// 编辑消息
if (msgListRes.code === 0) {
    const messageList = msgListRes.data;
    if (messageList!.length !== 0) {
        const originMessage = messageList![0];
        originMessage.cloudCustomData = 'change data'; // 修改消息的信息
        const modifyMessageRes = await TencentImSDKPlugin.v2TIMManager
            .getMessageManager()
            .modifyMessage(originMessage);
        if (modifyMessageRes.code === 0) {
            if (modifyMessageRes.data?.code === 0) {
                // 修改成功
            }
        }
    }
}
