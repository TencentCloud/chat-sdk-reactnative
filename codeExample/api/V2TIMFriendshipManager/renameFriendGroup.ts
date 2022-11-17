import { TencentImSDKPlugin } from 'react-native-tim-js';

//修改好友分组的名称
const renameFriendGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .renameFriendGroup(
        ' oldName', //旧的分组名称
        'newName' //新的分组名称
    );
if (renameFriendGroupRes.code === 0) {
    // 修改成功
}
