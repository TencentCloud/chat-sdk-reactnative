import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组
const addConversationsToGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .addConversationsToGroup(
        'groupName', //需要被添加会话的会话分组的名称
        [] //被添加的会话id列表
    );
if (addConversationsToGroupRes.code === 0) {
    // 添加成功
    addConversationsToGroupRes.data?.forEach((element) => {
        element.conversationID; // 被添加的会话id
        element.resultCode; // 此条会话的操作结果错误码
        element.resultInfo; // 此条会话的操作结果描述
    });
}
