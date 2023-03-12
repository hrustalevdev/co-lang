import { EFieldType } from './types';
export interface IFieldTokenModel<T = unknown> {
    id: string;
    fieldName: string;
    fieldValue: T;
    fieldType: EFieldType;
    children: IFieldTokenModel[];
}
export declare class FieldTokenModel<T = unknown> implements IFieldTokenModel<T> {
    id: string;
    fieldName: string;
    fieldValue: T;
    fieldType: EFieldType;
    children: FieldTokenModel[];
    constructor(id: string, fieldName: string, fieldValue: T, fieldType: EFieldType, children?: FieldTokenModel[]);
}
//# sourceMappingURL=FieldTokenModel.d.ts.map