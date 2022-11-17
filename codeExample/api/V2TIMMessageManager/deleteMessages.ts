import { TencentImSDKPlugin } from 'react-native-tim-js';

// 删除本地及漫游消息
const deleteMessagesRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .deleteMessages(
        ['messageid'] // 需要删除的消息id
    );
if (deleteMessagesRes.code === 0) {
    //删除成功
}
