/// <reference types="react" />
import { z } from "zod";
import type { WithTypedOptionsList } from "../list";
import type { Rule, SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
export declare const number: <TypedValue extends number, ParsedValue = TypedValue, ResolvedValue = TypedValue>({ greaterThan, integer, lessThan, max, min, options, negative, positive, precision, validation, options: { list }, mock, zod: zodFn, zodResolved, ...def }?: {
    options?: (Omit<Schema.NumberOptions | undefined, "list"> & {
        list?: [TypedValue | {
            title: string;
            value: TypedValue;
        }, ...(TypedValue | {
            title: string;
            value: TypedValue;
        })[]] | undefined;
    }) | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: Rule<TypedValue>) => Rule<TypedValue>) | undefined;
    initialValue?: TypedValue | (() => import("type-fest").Promisable<TypedValue>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => TypedValue) | undefined;
    zod?: ((zod: z.ZodType<TypedValue, any, TypedValue>) => z.ZodType<ParsedValue, any, TypedValue>) | undefined;
    zodResolved?: ((zod: z.ZodType<TypedValue, any, TypedValue>) => z.ZodType<ResolvedValue, any, TypedValue>) | undefined;
} & {
    greaterThan?: number | undefined;
    integer?: boolean | undefined;
    lessThan?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
    negative?: boolean | undefined;
    positive?: boolean | undefined;
    precision?: number | undefined;
}) => import("../types").SanityType<{
    options: (Omit<Schema.NumberOptions | undefined, "list"> & {
        list?: [TypedValue | {
            title: string;
            value: TypedValue;
        }, ...(TypedValue | {
            title: string;
            value: TypedValue;
        })[]] | undefined;
    }) | undefined;
    type: string;
    validation: (rule: Rule<TypedValue>) => Rule<TypedValue>;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    initialValue?: TypedValue | (() => import("type-fest").Promisable<TypedValue>) | undefined;
}, TypedValue, ParsedValue, ResolvedValue>;
