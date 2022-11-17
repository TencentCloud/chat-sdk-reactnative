import { TencentImSDKPlugin } from 'react-native-tim-js';

// 撤回消息
const revokeMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .revokeMessage(
        'msgID' // 需要撤回的消息id
    );
if (revokeMessageRes.code === 0) {
    //撤回成功
}
