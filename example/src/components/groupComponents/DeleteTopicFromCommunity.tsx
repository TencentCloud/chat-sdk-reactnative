import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TencentImSDKPlugin, V2TimTopicInfo } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';
import mystylesheet from '../../stylesheets';

const DeleteTopicInfoList = () => {
    const [groupID, setGroupID] = useState<string>('未选择');
    const [topicID, setTopicID] = useState<string>('未选择');
    const [res, setRes] = React.useState<any>({});

    const deleteTopic = async () => {
        const response = await TencentImSDKPlugin.v2TIMManager
            .getGroupManager()
            .deleteTopicFromCommunity(groupID, [topicID]);
        setRes(response);
    };

    const getSourceValue = (val: V2TimTopicInfo) => {
        setTopicID(val.topicID ?? '');
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
    const TopicSelectComponent = () => {
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
                                选择话题
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{topicID}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setTopicID}
                    getSource={getSourceValue}
                    groupID={groupID}
                    type={'topic'}
                />
            </View>
        );
    };
    return (
        <View style={{ height: '100%' }}>
            <GroupSelectComponent />
            <TopicSelectComponent />
            <CommonButton handler={() => deleteTopic()} content={'删除话题'} />
            <CodeComponent />
        </View>
    );
};

export default DeleteTopicInfoList;

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
