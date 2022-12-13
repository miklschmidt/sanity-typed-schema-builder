/// <reference types="react" />
import { z } from "zod";
import type { SanityTypeDef } from "../types";
import type { ArbitraryTypedObject, PortableTextBlock, PortableTextMarkDefinition, PortableTextSpan, TypedObject } from "@portabletext/types";
import type { Schema } from "@sanity/types";
export declare const block: <M extends PortableTextMarkDefinition = PortableTextMarkDefinition, C extends TypedObject = ArbitraryTypedObject | PortableTextSpan, S extends string = string, L extends string = string, ParsedValue = PortableTextBlock<M, C, S, L>, ResolvedValue = PortableTextBlock<M, C, S, L>>({ mock, zod: zodFn, zodResolved, ...def }?: {
    options?: Schema.BlockOptions | undefined;
    of?: (Schema.TypeDefinition<"string" | "number" | "boolean" | "object" | "reference" | "block" | "array" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "slug" | "span" | "text" | "url"> | Schema.TypeReference<"string" | "number" | "boolean" | "object" | "reference" | "block" | "array" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "slug" | "span" | "text" | "url">)[] | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    styles?: {
        title: string;
        value: string;
    }[] | undefined;
    lists?: {
        title: string;
        value: string;
    }[] | undefined;
    marks?: unknown;
    validation?: ((rule: import("../types").Rule<PortableTextBlock<M, C, S, L>>) => import("../types").Rule<PortableTextBlock<M, C, S, L>>) | undefined;
    initialValue?: PortableTextBlock<M, C, S, L> | (() => import("type-fest").Promisable<PortableTextBlock<M, C, S, L>>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => PortableTextBlock<M, C, S, L>) | undefined;
    zod?: ((zod: z.ZodType<PortableTextBlock<M, C, S, L>, any, PortableTextBlock<M, C, S, L>>) => z.ZodType<ParsedValue, any, PortableTextBlock<M, C, S, L>>) | undefined;
    zodResolved?: ((zod: z.ZodType<PortableTextBlock<M, C, S, L>, any, PortableTextBlock<M, C, S, L>>) => z.ZodType<ResolvedValue, any, PortableTextBlock<M, C, S, L>>) | undefined;
}) => import("../types").SanityType<{
    type: string;
    options?: Schema.BlockOptions | undefined;
    of?: (Schema.TypeDefinition<"string" | "number" | "boolean" | "object" | "reference" | "block" | "array" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "slug" | "span" | "text" | "url"> | Schema.TypeReference<"string" | "number" | "boolean" | "object" | "reference" | "block" | "array" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "slug" | "span" | "text" | "url">)[] | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    styles?: {
        title: string;
        value: string;
    }[] | undefined;
    lists?: {
        title: string;
        value: string;
    }[] | undefined;
    marks?: unknown;
    validation?: ((rule: import("../types").Rule<PortableTextBlock<M, C, S, L>>) => import("../types").Rule<PortableTextBlock<M, C, S, L>>) | undefined;
    initialValue?: PortableTextBlock<M, C, S, L> | (() => import("type-fest").Promisable<PortableTextBlock<M, C, S, L>>) | undefined;
}, PortableTextBlock<M, C, S, L>, ParsedValue, ResolvedValue>;
