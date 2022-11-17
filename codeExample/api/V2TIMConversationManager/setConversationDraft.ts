import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置会话草稿
const setConversationDraftRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .setConversationDraft(
        '', //需要设置草稿的会话id
        '' //草稿信息
    );
if (setConversationDraftRes.code === 0) {
    //设置成功
}
