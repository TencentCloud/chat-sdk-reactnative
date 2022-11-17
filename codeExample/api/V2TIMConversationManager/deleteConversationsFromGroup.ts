import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//从一个会话分组中删除会话
const deleteConversationsFromGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .deleteConversationsFromGroup('groupName', []);
if (deleteConversationsFromGroupRes.code === 0) {
    // 删除成功
    deleteConversationsFromGroupRes.data?.forEach((element) => {
        element.conversationID; // 被删除的会话id
        element.resultCode; // 此条会话的操作结果错误码
        element.resultInfo; // 此条会话的操作结果描述
    });
}
