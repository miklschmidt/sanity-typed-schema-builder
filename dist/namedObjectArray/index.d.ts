/// <reference types="react" />
import { z } from "zod";
import type { InferParsedValue, InferResolvedValue, InferValue, Rule, SanityType, SanityTypeDef, TupleOfLength } from "../types";
import type { Schema } from "@sanity/types";
import type { Merge } from "type-fest";
declare type AddKey<T> = T extends object ? Merge<T, {
    _key: string;
}> : T;
declare type Precedence<A extends number, B extends number> = number extends A ? B : A;
export declare const namedObjectArray: <ItemValue, ParsedItemValue, ResolvedItemValue, ItemsArray extends [SanityType<{
    name: string;
    type: string;
}, ItemValue, ParsedItemValue, ResolvedItemValue>, ...SanityType<{
    name: string;
    type: string;
}, ItemValue, ParsedItemValue, ResolvedItemValue>[]], Length extends number, Min extends number, Max extends number, Value extends TupleOfLength<AddKey<InferValue<ItemsArray[number]>>, Precedence<Length, Min>, Precedence<Length, Max>, []>, ParsedValue = TupleOfLength<AddKey<InferParsedValue<ItemsArray[number]>>, Precedence<Length, Min>, Precedence<Length, Max>, []>, ResolvedValue = TupleOfLength<AddKey<InferResolvedValue<ItemsArray[number]>>, Precedence<Length, Min>, Precedence<Length, Max>, []>>({ length, max, min, validation, of: items, mock, zod: zodFn, zodResolved, ...def }: {
    options?: Schema.ArrayOptions<Value[keyof Value]> | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: Rule<Value>) => Rule<Value>) | undefined;
    initialValue?: Value | (() => import("type-fest").Promisable<Value>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => Value) | undefined;
    zod?: ((zod: z.ZodType<TupleOfLength<AddKey<InferParsedValue<ItemsArray[number]>>, Precedence<Length, Min>, Precedence<Length, Max>, []>, any, Value>) => z.ZodType<ParsedValue, any, Value>) | undefined;
    zodResolved?: ((zod: z.ZodType<TupleOfLength<AddKey<InferResolvedValue<ItemsArray[number]>>, Precedence<Length, Min>, Precedence<Length, Max>, []>, any, Value>) => z.ZodType<ResolvedValue, any, Value>) | undefined;
    length?: Length | undefined;
    max?: Max | undefined;
    min?: Min | undefined;
    of: ItemsArray;
}) => SanityType<{
    type: string;
    of: {
        name: string;
        type: string;
    }[];
    validation: (rule: Rule<Value>) => Rule<Value>;
    options?: Schema.ArrayOptions<Value[keyof Value]> | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    initialValue?: Value | (() => import("type-fest").Promisable<Value>) | undefined;
}, Value, ParsedValue, ResolvedValue>;
export {};
