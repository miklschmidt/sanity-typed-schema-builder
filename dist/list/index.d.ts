import type { Faker } from "@faker-js/faker";
import type { Merge } from "type-fest";
import type { TupleOfLength } from "types";
declare type ListValue<T> = T | {
    title: string;
    value: T;
};
export declare type WithTypedOptionsList<Value, T extends {
    options?: {
        list?: Array<ListValue<any>>;
    };
}> = Merge<T, {
    options?: Omit<T["options"], "list"> & {
        list?: TupleOfLength<ListValue<Value>, 1>;
    };
}>;
export declare const listValueToValue: <T>(item: ListValue<T>) => T;
export declare const listMock: <Input>(list: [ListValue<Input>, ...ListValue<Input>[]]) => (faker: Faker) => Input;
export {};
