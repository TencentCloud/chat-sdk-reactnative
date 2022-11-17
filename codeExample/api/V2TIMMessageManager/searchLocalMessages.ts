import { TencentImSDKPlugin } from 'react-native-tim-js';
// 搜索历史信息
const searchLocalMessagesRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .searchLocalMessages({
        conversationID: '', // conversationID == null，代表搜索全部会话，conversationID != null，代表搜索指定会话。
        keywordList: [], // 关键字列表，最多支持5个。当消息发送者以及消息类型均未指定时，关键字列表必须非空；否则，关键字列表可以为空。
        type: 0, // 获取历史消息类型
        userIDList: [], // 指定 userID 发送的消息，最多支持5个。
        messageTypeList: [], // 消息类型过滤列表
        searchTimePeriod: 0, // 从起始时间点开始的过去时间范围，单位秒。默认为0即代表不限制时间范围，传24x60x60代表过去一天。
        searchTimePosition: 0, // 搜索的起始时间点。默认为0即代表从现在开始搜索。UTC 时间戳，单位：秒
        pageIndex: 0, // 分页的页号：用于分页展示查找结果，从零开始起步。
        pageSize: 10, // 每页结果数量：用于分页展示查找结果，如不希望分页可将其设置成 0，但如果结果太多，可能会带来性能问题。默认为100。
    });
if (searchLocalMessagesRes.code === 0) {
    // 搜索成功
}
