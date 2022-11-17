import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置指定好友资料
const setFriendInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .setFriendInfo(
        'userID', //需要修改的用户id
        'friendRemark', //修改的好友备注
        { custom: 'custom' } //修改的好友自定义信息
    );
if (setFriendInfoRes.code === 0) {
    // 修改成功
}
