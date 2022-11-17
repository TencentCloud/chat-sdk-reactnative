import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//标记会话
const markConversationRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .markConversation(
        0, //标记类型
        true, //是否支持标记功能
        []
    ); //需要标记的会话id列表
if (markConversationRes.code === 0) {
    // 标记成功
    markConversationRes.data?.forEach((element) => {
        element.conversationID; // 被标记的会话id
        element.resultCode; // 此条会话的操作结果错误码
        element.resultInfo; // 此条会话的操作结果描述
    });
}
