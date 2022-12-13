/// <reference types="react" />
import { z } from "zod";
import type { SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
export declare const boolean: <ParsedValue = boolean, ResolvedValue = boolean>({ mock, zod: zodFn, zodResolved, ...def }?: {
    options?: Schema.BooleanOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<boolean>) => import("../types").Rule<boolean>) | undefined;
    initialValue?: boolean | (() => import("type-fest").Promisable<boolean>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => boolean) | undefined;
    zod?: ((zod: z.ZodType<boolean, any, boolean>) => z.ZodType<ParsedValue, any, boolean>) | undefined;
    zodResolved?: ((zod: z.ZodType<boolean, any, boolean>) => z.ZodType<ResolvedValue, any, boolean>) | undefined;
}) => import("../types").SanityType<{
    type: string;
    options?: Schema.BooleanOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<boolean>) => import("../types").Rule<boolean>) | undefined;
    initialValue?: boolean | (() => import("type-fest").Promisable<boolean>) | undefined;
}, boolean, ParsedValue, ResolvedValue>;
