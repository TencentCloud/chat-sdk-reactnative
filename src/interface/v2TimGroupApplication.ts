/**
 * @module interface
 */
export interface V2TimGroupApplication {
    groupID: string;
    fromUser?: string;
    fromUserNickName?: string;
    fromUserFaceUrl?: string;
    toUser?: string;
    addTime?: number;
    requestMsg?: string;
    handleMsg?: string;
    type: number;
    handleStatus: number;
    handleResult: number;
}
