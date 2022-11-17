import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//会话置顶
const pinConversationRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .pinConversation(
        '', //需要修改置顶属性的会话id
        true //是否置顶
    );
if (pinConversationRes.code === 0) {
    //设置置顶成功
}
