import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//获取指定会话
const getConversationtRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .getConversation(''); //会话唯一 ID，如果是 C2C 单聊，组成方式为 c2c_userID，如果是群聊，组成方式为 group_groupID
if (getConversationtRes.code === 0) {
    //拉取成功
    getConversationtRes.data?.conversationID; //会话唯一 ID，如果是单聊，组成方式为 c2c_userID；如果是群聊，组成方式为 group_groupID。
    getConversationtRes.data?.draftText; //草稿信息
    getConversationtRes.data?.draftTimestamp; //草稿编辑时间，草稿设置的时候自动生成。
    getConversationtRes.data?.faceUrl; //会话展示头像，群聊头像：群头像；单聊头像：对方头像。
    getConversationtRes.data?.groupAtInfoList; //群会话 @ 信息列表，通常用于展示 “有人@我” 或 “@所有人” 这两种提醒状态。
    getConversationtRes.data?.groupID; //当前群聊 ID，如果会话类型为群聊，groupID 会存储当前群的群 ID，否则为 null。
    getConversationtRes.data?.groupType; //当前群聊类型，如果会话类型为群聊，groupType 为当前群类型，否则为 null。
    getConversationtRes.data?.isPinned; //会话是否置顶
    getConversationtRes.data?.lastMessage; //会话最后一条消息
    getConversationtRes.data?.orderkey; //会话排序字段
    getConversationtRes.data?.recvOpt; //消息接收选项
    getConversationtRes.data?.showName; //会话展示名称，群聊会话名称优先级：群名称 > 群 ID；单聊会话名称优先级：对方好友备注 > 对方昵称 > 对方的 userID。
    getConversationtRes.data?.type; //会话类型，分为 C2C（单聊）和 Group（群聊）。
    getConversationtRes.data?.unreadCount; //会话未读消息数，直播群（AVChatRoom）不支持未读计数，默认为 0。
    getConversationtRes.data?.userID; //对方用户 ID，如果会话类型为单聊，userID 会存储对方的用户 ID，否则为 null。
}
