import { TencentImSDKPlugin } from 'react-native-tim-js'; //添加会话到一个会话分组

//获取会话列表
const getConversationListRes = await TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .getConversationList(
        100, //分页拉取的个数，一次分页拉取不宜太多，会影响拉取的速度，建议每次拉取 100 个会话
        '0' //分页拉取的游标，第一次默认取传 0，后续分页拉传上一次分页拉取成功回调里的 nextSeq
    );
if (getConversationListRes.code === 0) {
    //拉取成功
    const isFinished = getConversationListRes.data?.isFinished; //是否拉取完
    const nextSeq = getConversationListRes.data?.nextSeq; //后续分页拉取的游标
    getConversationListRes.data?.conversationList; //此次拉取到的消息列表
    //如果没有拉取完，使用返回的nextSeq继续拉取直到isFinished为true
    if (!isFinished!) {
        await TencentImSDKPlugin.v2TIMManager
            .getConversationManager()
            .getConversationList(100, nextSeq ?? '0'); //使用返回的nextSeq继续拉取直到isFinished为true
    }

    getConversationListRes.data?.conversationList?.forEach((element) => {
        element?.conversationID; //会话唯一 ID，如果是单聊，组成方式为 c2c_userID；如果是群聊，组成方式为 group_groupID。
        element?.draftText; //草稿信息
        element?.draftTimestamp; //草稿编辑时间，草稿设置的时候自动生成。
        element?.faceUrl; //会话展示头像，群聊头像：群头像；单聊头像：对方头像。
        element?.groupAtInfoList; //群会话 @ 信息列表，通常用于展示 “有人@我” 或 “@所有人” 这两种提醒状态。
        element?.groupID; //当前群聊 ID，如果会话类型为群聊，groupID 会存储当前群的群 ID，否则为 null。
        element?.groupType; //当前群聊类型，如果会话类型为群聊，groupType 为当前群类型，否则为 null。
        element?.isPinned; //会话是否置顶
        element?.lastMessage; //会话最后一条消息
        element?.orderkey; //会话排序字段
        element?.recvOpt; //消息接收选项
        element?.showName; //会话展示名称，群聊会话名称优先级：群名称 > 群 ID；单聊会话名称优先级：对方好友备注 > 对方昵称 > 对方的 userID。
        element?.type; //会话类型，分为 C2C（单聊）和 Group（群聊）。
        element?.unreadCount; //会话未读消息数，直播群（AVChatRoom）不支持未读计数，默认为 0。
        element?.userID; //对方用户 ID，如果会话类型为单聊，userID 会存储对方的用户 ID，否则为 null。
    });
}
