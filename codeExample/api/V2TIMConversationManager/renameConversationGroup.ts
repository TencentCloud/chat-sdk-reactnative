import { TencentImSDKPlugin } from 'react-native-tim-js';
//重命名会话分组
const deleteConversationGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .renameConversationGroup(
        'oldName', //需要重命名的会话分组的名称
        'newName'
    ); //回话分组的新名称
if (deleteConversationGroupRes.code === 0) {
    // 重命名成功
}
