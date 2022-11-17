import { TencentImSDKPlugin } from 'react-native-tim-js';

//把用户从黑名单中删除
const deleteFromBlackListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .deleteFromBlackList(
        [] //需要移出黑名单的好友id列表
    );
if (deleteFromBlackListRes.code === 0) {
    // 删除成功
    deleteFromBlackListRes.data?.forEach((element) => {
        element.resultCode; //此条记录的错误码
        element.resultInfo; //此条记录的操作结果描述
        element.userID; //被操作的用户id
    });
}
