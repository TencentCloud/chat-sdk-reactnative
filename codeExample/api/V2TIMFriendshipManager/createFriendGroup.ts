import { TencentImSDKPlugin } from 'react-native-tim-js';

// 新建好友分组
const createFriendGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .createFriendGroup(
        'groupName', //新建的分组名称
        [] //要添加到分组中的好友 userID 列表
    );
if (createFriendGroupRes.code == 0) {
    // 新建请求发送成功
    createFriendGroupRes.data?.forEach((element) => {
        element.resultCode; //此条操作的错误码
        element.resultInfo; //此条操作的结果描述
        element.userID; //此条被操作的用户id
    });
}
