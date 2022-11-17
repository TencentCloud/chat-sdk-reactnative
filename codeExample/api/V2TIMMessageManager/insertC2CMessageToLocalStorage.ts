import { TencentImSDKPlugin } from 'react-native-tim-js';

// 向C2C消息列表中添加一条消息
const insertC2CMessageToLocalStorageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .insertC2CMessageToLocalStorage(
        'data', // 文本消息内容
        'userID', // 接受信息用户id
        'sender' // 发送者id
    );
if (insertC2CMessageToLocalStorageRes.code === 0) {
    //添加成功
}
