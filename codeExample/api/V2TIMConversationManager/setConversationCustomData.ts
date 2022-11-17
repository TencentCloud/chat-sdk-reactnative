import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置会话自定义消息
const setConversationCustomDataRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .setConversationCustomData(
        'customData', // 设置的自定义消息
        []
    ); // 需要设置自定义消息的会话id列表
if (setConversationCustomDataRes.code === 0) {
    // 设置成功
    setConversationCustomDataRes.data?.forEach((element) => {
        element.conversationID; //被设置的会话id
        element.resultCode; //此条会话的请求结果错误码
        element.resultInfo; //此条会话的请求结果描述
    });
}
