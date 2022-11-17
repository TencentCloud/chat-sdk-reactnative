import { TencentImSDKPlugin } from 'react-native-tim-js';

//用户资料设置信息
const setSelfInfoRes = await TencentImSDKPlugin.v2TIMManager.setSelfInfo({
    nickName: '', // 用户昵称
    allowType: 0, //用户的好友验证方式 0:允许所有人加我好友 1:不允许所有人加我好友 2:加我好友需我确认
    birthday: 0, //用户生日
    customInfo: { custom: 'custom' }, //用户的自定义状态 旗舰版支持修改此属性
    faceUrl: '', //用户头像 url
    gender: 1, //用户的性别 1:男 2:女
    level: 0, //用户的等级
    role: 0, //用户的角色
    selfSignature: '', //用户的签名
    userID: '', //用户 ID
}); //用户资料设置信息
if (setSelfInfoRes.code === 0) {
    // 修改成功
}
