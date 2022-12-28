import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';
import mystylesheet from '../../stylesheets';

const GetTopicInfoList = () => {
    const [groupID, setGroupID] = useState<string>('未选择');
    const [res, setRes] = React.useState<any>({});

    const getTopicInfoList = async () => {
        const response = await TencentImSDKPlugin.v2TIMManager
            .getGroupManager()
            .getTopicInfoList(groupID, []);
        setRes(response);
    };
    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res, null, 2)} />
        ) : null;
    };
    const GroupSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.container}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择社群
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{groupID}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setGroupID}
                    type={'community'}
                />
            </View>
        );
    };
    return (
        <View style={{ height: '100%' }}>
            <GroupSelectComponent />
            <Text style={styles.nextseqstyle}>nextSeq 0</Text>
            <CommonButton
                handler={() => getTopicInfoList()}
                content={'获取话题列表'}
            />
            <CodeComponent />
        </View>
    );
};

export default GetTopicInfoList;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    selectView: {
        flexDirection: 'row',
    },
    selectContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    userInputcontainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    selectText: {
        marginLeft: 10,
        lineHeight: 35,
        fontSize: 14,
    },
    nextseqstyle: {
        margin: 10,
    },
});
