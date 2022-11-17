import { TencentImSDKPlugin } from 'react-native-tim-js';

// 创建视频消息
const createVideoMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .createVideoMessage(
        '本地视频文件绝对路径', // 不能使用网络Url
        'mp4', // 视频类型 会在接收的消息属性里显示，一般用于回显文件类型
        10, // 视频时长 会在接收的消息属性里显示，一般用于回显文件属性
        '本地视频封面文件绝对路径' // 不能使用网络Url
    );
if (createVideoMessageRes.code === 0) {
    const id = createVideoMessageRes.data?.id;
    // 发送视频消息
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
