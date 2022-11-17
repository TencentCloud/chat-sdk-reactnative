import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//删除会话分组
const deleteConversationGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .deleteConversationGroup('groupName'); //需要删除的会话分组的名称
if (deleteConversationGroupRes.code === 0) {
    // 删除成功
}
