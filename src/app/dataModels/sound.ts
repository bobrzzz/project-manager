import {File} from './file';

export interface Sound {
    name: string;
    duration: number;
    lazy: boolean;
    files: Array<File>
}
