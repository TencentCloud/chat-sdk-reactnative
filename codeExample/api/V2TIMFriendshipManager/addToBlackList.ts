import { TencentImSDKPlugin } from 'react-native-tim-js';

//添加好友到黑名单
const addToBlackListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .addToBlackList(
        [] //需要加入黑名单的好友id列表
    );
if (addToBlackListRes.code == 0) {
    // 添加成功
    addToBlackListRes.data?.forEach((element) => {
        element.resultCode; //此条记录的错误码
        element.resultInfo; //此条记录的操作结果描述
        element.userID; //被操作的用户id
    });
}
