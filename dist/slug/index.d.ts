/// <reference types="react" />
import { z } from "zod";
import type { SanityTypeDef } from "../types";
import type { Schema, Slug } from "@sanity/types";
export declare type SanitySlug = Slug;
export declare const slug: <ParsedValue = string, ResolvedValue = string>({ mock, zod: zodFn, zodResolved, ...def }?: {
    options?: import("@sanity/types").SlugOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<Slug>) => import("../types").Rule<Slug>) | undefined;
    initialValue?: Slug | (() => import("type-fest").Promisable<Slug>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => Slug) | undefined;
    zod?: ((zod: z.ZodType<Slug, any, Slug>) => z.ZodType<ParsedValue, any, Slug>) | undefined;
    zodResolved?: ((zod: z.ZodType<Slug, any, Slug>) => z.ZodType<ResolvedValue, any, Slug>) | undefined;
}) => import("../types").SanityType<{
    type: string;
    options?: import("@sanity/types").SlugOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<Slug>) => import("../types").Rule<Slug>) | undefined;
    initialValue?: Slug | (() => import("type-fest").Promisable<Slug>) | undefined;
}, Slug, ParsedValue, ResolvedValue>;
