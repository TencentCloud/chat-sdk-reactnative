import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//创建会话分组
const setConversationCustomDataRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .createConversationGroup(
        'groupName', // 创建的会话分组的名称
        [] // 需要放入创建的会话分组的会话id列表
    );
if (setConversationCustomDataRes.code === 0) {
    // 创建设置成功
    setConversationCustomDataRes.data?.forEach((element) => {
        element.conversationID; // 被添加的会话id
        element.resultCode; // 此条会话的操作结果错误码
        element.resultInfo; // 此条会话的操作结果描述
    });
}
