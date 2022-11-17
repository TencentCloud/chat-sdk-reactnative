import { TencentImSDKPlugin } from 'react-native-tim-js';

// 先创建消息
const target = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTextMessage('');
// 获取消息的发送id
const id = target.data?.id;
// 创建定向群消息消息
const groupTarget = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createTargetedGroupMessage(
        id!, // 创建的消息id
        ['user1', 'user2'] //定向成员id列表
    );
// 发送定向群消息
if (groupTarget.code === 0) {
    const groupTargetdId = groupTarget.data?.id;
    // 发送定向群消息
    // 若只填写groupID则发群组消息
    // 若填写了receiver与groupID则发群内的个人用户，消息在群聊中显示，只有指定receiver能看见
    const sendMessageRes = await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .sendMessage({
            id: groupTargetdId!,
            receiver: 'userID',
            groupID: 'groupID',
        });
    if (sendMessageRes.code === 0) {
        // 发送成功
    }
}
