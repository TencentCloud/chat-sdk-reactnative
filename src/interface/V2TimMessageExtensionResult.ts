/**
 * @module interface
 */

import type { V2TimMessageExtension } from './V2TimMessageExtension';

export interface V2TimMessageExtensionResult {
    resultCode: number;
    resultInfo: string;
    message: V2TimMessageExtension;
}
