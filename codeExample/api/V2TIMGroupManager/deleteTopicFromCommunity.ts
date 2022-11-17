import { TencentImSDKPlugin } from 'react-native-tim-js';

// 删除话题
const deleteTopicFromCommunityRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .deleteTopicFromCommunity(
        'groupID', // 需要删除属性的群组id
        [] // 删除的话题id列表
    );
if (deleteTopicFromCommunityRes.code === 0) {
    // 删除成功
    deleteTopicFromCommunityRes.data?.forEach((element) => {
        element.errorCode; // 删除处理结果错误码
        element.errorMessage; // 删除处理结果描述
        element.topicID; // 被删除的话题id
    });
}
