/// <reference types="react" />
import { z } from "zod";
import type { SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
export declare const date: <ParsedValue = string, ResolvedValue = string>({ mock, zod: zodFn, zodResolved, ...def }?: {
    options?: Schema.DateOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<string>) => import("../types").Rule<string>) | undefined;
    initialValue?: string | (() => import("type-fest").Promisable<string>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => string) | undefined;
    zod?: ((zod: z.ZodType<string, any, string>) => z.ZodType<ParsedValue, any, string>) | undefined;
    zodResolved?: ((zod: z.ZodType<string, any, string>) => z.ZodType<ResolvedValue, any, string>) | undefined;
}) => import("../types").SanityType<{
    type: string;
    options?: Schema.DateOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<string>) => import("../types").Rule<string>) | undefined;
    initialValue?: string | (() => import("type-fest").Promisable<string>) | undefined;
}, string, ParsedValue, ResolvedValue>;
