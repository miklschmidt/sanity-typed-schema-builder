/// <reference types="react" />
import { z } from "zod";
import type { Rule, SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
export declare const datetime: <ParsedValue = Date, ResolvedValue = Date>({ max, min, validation, mock, zod: zodFn, zodResolved, ...def }?: {
    options?: Schema.DatetimeOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: Rule<string>) => Rule<string>) | undefined;
    initialValue?: string | (() => import("type-fest").Promisable<string>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => string) | undefined;
    zod?: ((zod: z.ZodType<string, any, string>) => z.ZodType<ParsedValue, any, string>) | undefined;
    zodResolved?: ((zod: z.ZodType<string, any, string>) => z.ZodType<ResolvedValue, any, string>) | undefined;
} & {
    max?: string | undefined;
    min?: string | undefined;
}) => import("../types").SanityType<{
    type: string;
    validation: (rule: Rule<string>) => Rule<string>;
    options?: Schema.DatetimeOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    initialValue?: string | (() => import("type-fest").Promisable<string>) | undefined;
}, string, ParsedValue, ResolvedValue>;
