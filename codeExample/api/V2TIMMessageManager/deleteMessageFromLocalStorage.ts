import { TencentImSDKPlugin } from 'react-native-tim-js';

// 删除本地消息
const deleteMessageFromLocalStorageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .deleteMessageFromLocalStorage(''); // 需要删除的消息id
if (deleteMessageFromLocalStorageRes.code === 0) {
    //删除成功
}
