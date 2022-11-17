import { TencentImSDKPlugin } from 'react-native-tim-js';

// 向群组消息列表中添加一条消息
const insertGroupMessageToLocalStorageRes =
    await TencentImSDKPlugin.v2TIMManager
        .getMessageManager()
        .insertGroupMessageToLocalStorage(
            'data', // 文本消息内容
            'groupID', // 接收群组id
            'sender' // 发送者id
        );
if (insertGroupMessageToLocalStorageRes.code === 0) {
    //添加成功
}
