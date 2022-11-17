import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//删除会话
const deleteConversationRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .deleteConversation(
        '' //需要删除的会话id
    );
if (deleteConversationRes.code === 0) {
    //删除成功
}
