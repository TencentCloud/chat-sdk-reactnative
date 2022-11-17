// 拉取单聊历史消息
// 首次拉取，lastMsgID 设置为 null

import { TencentImSDKPlugin, HistoryMsgGetTypeEnum } from 'react-native-tim-js';

// 再次拉取时，lastMsgID 可以使用返回的消息列表中的最后一条消息的id
const getHistoryMessageListRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getHistoryMessageList(
        10, // 拉取数据数量
        HistoryMsgGetTypeEnum.V2TIM_GET_LOCAL_OLDER_MSG, // 拉取消息的位置及方向
        'userID', // 用户id 拉取单聊消息，需要指定对方的 userID，此时 groupID 传空即可。
        'groupID', // 群组id 拉取群聊消息，需要指定群聊的 groupID，此时 userID 传空即可。
        // 仅能在群聊中使用该字段。
        // 设置 lastMsgSeq 作为拉取的起点，返回的消息列表中包含这条消息。
        // 如果同时指定了 lastMsg 和 lastMsgSeq，SDK 优先使用 lastMsg。
        // 如果均未指定 lastMsg 和 lastMsgSeq，拉取的起点取决于是否设置 getTimeBegin。设置了，则使用设置的范围作为起点；未设置，则使用最新消息作为起点。
        -1,
        undefined, // 拉取起始消息id
        [] // 用于过滤历史信息属性，若为空则拉取所有属性信息。
    );
if (getHistoryMessageListRes.code === 0) {
    //获取成功
}
