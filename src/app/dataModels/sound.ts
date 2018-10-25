import {File} from './file';

export interface Sound {
    name: string;
    duration: number;
    files: Array<File>
}
