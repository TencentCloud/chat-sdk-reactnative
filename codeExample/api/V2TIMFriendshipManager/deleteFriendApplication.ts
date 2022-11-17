import {
    TencentImSDKPlugin,
    FriendApplicationTypeEnum,
} from 'react-native-tim-js';

//删除好友申请
const deleteFriendApplicationRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .deleteFriendApplication(
        FriendApplicationTypeEnum.V2TIM_FRIEND_APPLICATION_BOTH, //加好友类型 要与getApplicationList查询到的type相同，否则会报错。
        'userID' //被删除好友申请的用户id
    );
if (deleteFriendApplicationRes.code === 0) {
    // 删除成功
}
