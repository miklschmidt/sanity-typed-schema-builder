/// <reference types="react" />
import { z } from "zod";
import { referenceZod } from "../reference";
import type { FieldOptions, FieldsZodObject, FieldsZodResolvedObject } from "../field";
import type { SanityReference } from "../reference";
import type { SanityNamedTypeDef } from "../types";
import type { Faker } from "@faker-js/faker";
import type { ImageCrop, ImageHotspot, Schema } from "@sanity/types";
import type { Merge } from "type-fest";
export declare type SanityImage<Hotspot extends boolean> = Hotspot extends false ? {
    _type: "image";
    asset: SanityReference;
} : {
    _type: "image";
    asset: SanityReference;
    crop?: ImageCrop;
    hotspot?: ImageHotspot;
};
declare type ExtraZodFields<Hotspot extends boolean> = Hotspot extends false ? {
    _type: z.ZodLiteral<"image">;
    asset: ReturnType<typeof referenceZod<false>>;
} : {
    _type: z.ZodLiteral<"image">;
    asset: ReturnType<typeof referenceZod<false>>;
    crop: z.ZodOptional<z.ZodObject<{
        _type: z.ZodOptional<z.ZodLiteral<"sanity.imageCrop">>;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
        top: z.ZodNumber;
    }>>;
    hotspot: z.ZodOptional<z.ZodObject<{
        _type: z.ZodOptional<z.ZodLiteral<"sanity.imageHotspot">>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }>>;
};
export declare const image: <Names extends string, Zods extends z.ZodTypeAny, ResolvedValues, Optionals extends boolean, Zod extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_1]["_output"]; } : never> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_1]["_output"]; } : never>[k]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_3]["_input"]; } : never> extends infer T_2 ? { [k_2 in keyof T_2]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_3]["_input"]; } : never>[k_2]; } : never>, ZodResolved extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_5]["_output"]; } : never> extends infer T_4 ? { [k_4 in keyof T_4]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_5]["_output"]; } : never>[k_4]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_7]["_input"]; } : never> extends infer T_6 ? { [k_6 in keyof T_6]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<Hotspot>>, {}>[k_7]["_input"]; } : never>[k_6]; } : never>, FieldsArray extends [FieldOptions<Names, Zods, ResolvedValues, Optionals>, ...FieldOptions<Names, Zods, ResolvedValues, Optionals>[]] = never, Hotspot extends boolean = false, ParsedValue = z.output<Zod>, ResolvedValue = z.output<ZodResolved>>({ hotspot, fields, mock, zod: zodFn, zodResolved, options, ...def }?: {
    zodResolved?: ((zod: z.ZodType<z.output<ZodResolved>, any, z.input<Zod>>) => z.ZodType<ResolvedValue, any, z.input<Zod>>) | undefined;
    mock?: ((faker: Faker, path: string) => z.input<Zod>) | undefined;
    zod?: ((zod: z.ZodType<z.output<Zod>, any, z.input<Zod>>) => z.ZodType<ParsedValue, any, z.input<Zod>>) | undefined;
    description?: string | undefined;
    validation?: ((rule: import("../types").Rule<z.input<Zod>>) => import("../types").Rule<z.input<Zod>>) | undefined;
    title?: string | undefined;
    initialValue?: z.input<Zod> | (() => import("type-fest").Promisable<z.input<Zod>>) | undefined;
    options?: Schema.ImageOptions | undefined;
    groups?: Schema.FieldGroupDefinition[] | undefined;
    fieldsets?: Schema.FieldsetDefinition[] | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    metadata?: Schema.ImageMetadataType[] | undefined;
    fields?: FieldsArray | undefined;
    hotspot?: Hotspot | undefined;
}) => import("../types").SanityType<{
    options: {
        hotspot: boolean;
        metadata?: Schema.ImageMetadataType[] | undefined;
        storeOriginalFilename?: boolean | undefined;
        accept?: string | undefined;
        sources?: import("@sanity/types").AssetSource[] | undefined;
        collapsible?: boolean | undefined;
        collapsed?: boolean | undefined;
        columns?: number | undefined;
        modal?: {
            type?: "dialog" | "popover" | undefined;
            width?: number | number[] | "auto" | undefined;
        } | undefined;
    };
    type: string;
    preview?: import("@sanity/types").PreviewConfig | undefined;
    fields?: {
        name: string;
        validation: (rule: import("@sanity/types").Rule) => import("../types").Rule<any>;
        description?: string | undefined;
        title?: string | undefined;
        fieldset?: string | undefined;
        group?: string | string[] | undefined;
        type: string;
    }[] | undefined;
    description?: string | undefined;
    validation?: ((rule: import("../types").Rule<z.input<Zod>>) => import("../types").Rule<z.input<Zod>>) | undefined;
    title?: string | undefined;
    initialValue?: z.input<Zod> | (() => import("type-fest").Promisable<z.input<Zod>>) | undefined;
    groups?: Schema.FieldGroupDefinition[] | undefined;
    fieldsets?: Schema.FieldsetDefinition[] | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    metadata?: Schema.ImageMetadataType[] | undefined;
}, z.input<Zod>, ParsedValue, ResolvedValue>;
export {};
