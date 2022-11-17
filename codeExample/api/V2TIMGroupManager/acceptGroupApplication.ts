import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取加群列表
const getGroupApplicationListRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupApplicationList();
if (getGroupApplicationListRes.code === 0) {
    // 获取成功
    getGroupApplicationListRes.data?.groupApplicationList?.forEach(
        async (element) => {
            if (element != null) {
                const acceptGroupApplicationRes =
                    await TencentImSDKPlugin.v2TIMManager
                        .getGroupManager()
                        .acceptGroupApplication(
                            element.groupID, // 加入的群组id
                            element.fromUser!, //  请求者id
                            element.toUser!, // 判决者id
                            'reason', // 同意原因
                            element.addTime, // 申请时间
                            element.type // 申请类型
                        );
                if (acceptGroupApplicationRes.code === 0) {
                    // 同意成功
                }
            }
        }
    );
}
