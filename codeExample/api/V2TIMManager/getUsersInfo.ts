import { TencentImSDKPlugin } from 'react-native-tim-js';

const userIDList = []; //需要查询的用户id列表

//获取用户资料
const getUsersInfoRes = await TencentImSDKPlugin.v2TIMManager.getUsersInfo(
    userIDList
);
if (getUsersInfoRes.code === 0) {
    // 查询成功
    getUsersInfoRes.data?.forEach((element) => {
        element.allowType; //用户的好友验证方式 0:允许所有人加我好友 1:不允许所有人加我好友 2:加我好友需我确认
        element.birthday; //用户生日
        element.customInfo; //用户的自定义状态 旗舰版支持修改此属性
        element.faceUrl; //用户头像 url
        element.gender; //用户的性别 1:男 2:女
        element.level; //用户的等级
        element.nickName; //用户昵称
        element.role; //用户的角色
        element.selfSignature; //用户的签名
        element.userID; //用户 ID
    });
}
