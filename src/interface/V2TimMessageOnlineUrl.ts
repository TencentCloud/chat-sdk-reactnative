/**
 * @module interface
 */
import type { V2TimFileElem } from './v2TimFileElem';
import type { V2TimImageElem } from './v2TimImageElem';
import type { V2TimSoundElem } from './v2TimSoundElem';
import type { V2TimVideoElem } from './v2TimVideoElem';

export interface V2TimMessageOnlineUrl {
    imageElem: V2TimImageElem;
    soundElem: V2TimSoundElem;
    videoElem: V2TimVideoElem;
    fileElem: V2TimFileElem;
}
