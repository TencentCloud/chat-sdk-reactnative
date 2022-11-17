import { TencentImSDKPlugin } from 'react-native-tim-js';

//搜索参数设置
const param = {
    groupIDList: [], // 指定群 ID 列表，若为 null 则搜索全部群中的群成员
    isSearchMemberNameCard: true, // 设置是否搜索群成员名片，默认为true
    isSearchMemberRemark: true, // 设置是否搜索群成员备注，默认为true
    isSearchMemberNickName: true, // 设置是否搜索群成员昵称，默认为true
    isSearchMemberUserID: true, // 设置是否搜索群成员 userID，默认为true
    keywordList: [],
}; // 搜索关键字列表，最多支持5个
//搜索群成员
const searchGroupMembersRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .searchGroupMembers(param); // 搜索群成员的搜索参数
if (searchGroupMembersRes.code === 0) {
    // 搜索成功
    searchGroupMembersRes.data?.groupMemberSearchResultItems; // 群成员搜索结果
}
