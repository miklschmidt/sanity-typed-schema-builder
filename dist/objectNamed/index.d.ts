/// <reference types="react" />
import { z } from "zod";
import type { FieldOptions, FieldsZodObject, FieldsZodResolvedObject, Preview } from "../field";
import type { SanityNamedTypeDef } from "../types";
import type { Schema } from "@sanity/types";
import type { Merge } from "type-fest";
interface ExtraZodFields<ObjectNames extends string> {
    _type: z.ZodLiteral<ObjectNames>;
}
export declare const objectNamed: <ObjectNames extends string, Names extends string, Zods extends z.ZodTypeAny, ResolvedValues, Optionals extends boolean, FieldsArray extends [FieldOptions<Names, Zods, ResolvedValues, Optionals>, ...FieldOptions<Names, Zods, ResolvedValues, Optionals>[]], Zod extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_1]["_output"]; } : never> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_1]["_output"]; } : never>[k]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_3]["_input"]; } : never> extends infer T_2 ? { [k_2 in keyof T_2]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_3]["_input"]; } : never>[k_2]; } : never>, ZodResolved extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_5]["_output"]; } : never> extends infer T_4 ? { [k_4 in keyof T_4]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_5]["_output"]; } : never>[k_4]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_7]["_input"]; } : never> extends infer T_6 ? { [k_6 in keyof T_6]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>, {}>[k_7]["_input"]; } : never>[k_6]; } : never>, ParsedValue = z.output<Zod>, ResolvedValue = z.output<ZodResolved>, Select extends Record<string, string> = {}>({ name, fields, preview: previewDef, mock, zod: zodFn, zodResolved, ...def }: {
    description?: string | undefined;
    title?: string | undefined;
    options?: Schema.ObjectOptions | undefined;
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
    validation?: ((rule: import("../types").Rule<z.input<Zod>>) => import("../types").Rule<z.input<Zod>>) | undefined;
    initialValue?: z.input<Zod> | (() => import("type-fest").Promisable<z.input<Zod>>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => z.input<Zod>) | undefined;
    zod?: ((zod: z.ZodType<z.output<Zod>, any, z.input<Zod>>) => z.ZodType<ParsedValue, any, z.input<Zod>>) | undefined;
    zodResolved?: ((zod: z.ZodType<z.output<ZodResolved>, any, z.input<Zod>>) => z.ZodType<ResolvedValue, any, z.input<Zod>>) | undefined;
    fields: FieldsArray;
    name: ObjectNames;
    preview?: Preview<z.input<Zod>, Select> | undefined;
}) => {
    ref: () => import("../types").SanityType<{
        type: ObjectNames;
    }, z.input<Zod>, ParsedValue, ResolvedValue>;
    mock: (faker: import("@faker-js/faker").Faker, path?: string | undefined) => z.input<Zod>;
    parse: (data: unknown) => ParsedValue;
    resolve: (data: unknown) => ResolvedValue;
    schema: () => {
        name: ObjectNames;
        type: string;
        preview: import("@sanity/types").PreviewConfig | undefined;
        fields: {
            name: string;
            validation: (rule: import("@sanity/types").Rule) => import("../types").Rule<any>;
            description?: string | undefined;
            title?: string | undefined;
            fieldset?: string | undefined;
            group?: string | string[] | undefined;
            type: string;
        }[];
        description?: string | undefined;
        title?: string | undefined;
        options?: Schema.ObjectOptions | undefined;
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
        validation?: ((rule: import("../types").Rule<z.input<Zod>>) => import("../types").Rule<z.input<Zod>>) | undefined;
        initialValue?: z.input<Zod> | (() => import("type-fest").Promisable<z.input<Zod>>) | undefined;
    };
    zod: z.ZodType<ParsedValue, any, z.input<Zod>>;
    zodResolved: z.ZodType<ResolvedValue, any, z.input<Zod>>;
};
export {};
