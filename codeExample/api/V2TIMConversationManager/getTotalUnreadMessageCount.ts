import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//获取会话未读总数
const getTotalUnreadMessageCountRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .getTotalUnreadMessageCount();
if (getTotalUnreadMessageCountRes.code === 0) {
    //拉取成功
    getTotalUnreadMessageCountRes.data; //会话未读总数
}
