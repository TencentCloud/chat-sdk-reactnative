import React from 'react';
import { View } from 'react-native';

import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';

const GetJoinedCommunityList = () => {
    const [res, setRes] = React.useState<any>({});
    const getJoinedGroupList = async () => {
        const joinedGroupCommunityResponse =
            await TencentImSDKPlugin.v2TIMManager
                .getGroupManager()
                .getJoinedCommunityList();
        setRes(joinedGroupCommunityResponse);
    };
    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res, null, 2)} />
        ) : null;
    };
    return (
        <View style={{ height: '100%' }}>
            <CommonButton
                handler={() => getJoinedGroupList()}
                content={'获取加入的社群列表'}
            />
            <CodeComponent />
        </View>
    );
};

export default GetJoinedCommunityList;
