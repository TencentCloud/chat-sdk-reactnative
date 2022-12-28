/**
 * @module interface
 */

export interface V2TimMessageDownloadProgress {
    isFinish: boolean;
    isError: boolean;
    msgID: string;
    totalSize: number;
    currentSize: number;
    type: number;
    isSnapshot: boolean;
    path: string;
}
