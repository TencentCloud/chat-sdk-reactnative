import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//获取会话分组列表
const getConversationGroupListDataRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .getConversationGroupList();
if (getConversationGroupListDataRes.code === 0) {
    // 查询成功
    getConversationGroupListDataRes.data?.forEach((element) => {
        element; //此条会话分组的名称
    });
}
