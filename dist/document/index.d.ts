/// <reference types="react" />
import { z } from "zod";
import type { FieldOptions, FieldsZodObject, FieldsZodResolvedObject, Preview } from "../field";
import type { SanityNamedTypeDef, SanityType, WithTypedValidation } from "../types";
import type { Faker } from "@faker-js/faker";
import type { SanityDocument as SanityDocumentOriginal, Schema } from "@sanity/types";
import type { Merge, RemoveIndexSignature } from "type-fest";
export interface DocumentType<DocumentName extends string, Value, ParsedValue, ResolvedValue> extends SanityType<Merge<WithTypedValidation<Schema.DocumentDefinition, Value>, {
    name: DocumentName;
}>, Value, ParsedValue, ResolvedValue> {
    getMockById: (id: string) => Value | undefined;
    getNthMock: (faker: Faker, n: number) => Value;
    name: DocumentName;
}
export declare type SanityDocument<DocumentName extends string = string> = Merge<RemoveIndexSignature<SanityDocumentOriginal>, {
    _type: DocumentName;
}>;
export declare type ParsedSanityDocument<DocumentName extends string = string> = Merge<SanityDocument<DocumentName>, {
    _createdAt: Date;
    _updatedAt: Date;
}>;
interface ExtraZodFields<DocumentName extends string> {
    _createdAt: z.ZodType<Date, any, string>;
    _id: z.ZodString;
    _rev: z.ZodString;
    _type: z.ZodLiteral<DocumentName>;
    _updatedAt: z.ZodType<Date, any, string>;
}
export declare const document: <DocumentName extends string, Names extends string, Zods extends z.ZodTypeAny, ResolvedValues, Optionals extends boolean, FieldsArray extends [FieldOptions<Names, Zods, ResolvedValues, Optionals>, ...FieldOptions<Names, Zods, ResolvedValues, Optionals>[]], Zod extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_1]["_output"]; } : never> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_1 ? { [k_1 in keyof T_1]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_1]["_output"]; } : never>[k]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_3]["_input"]; } : never> extends infer T_2 ? { [k_2 in keyof T_2]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_3 ? { [k_3 in keyof T_3]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_3]["_input"]; } : never>[k_2]; } : never>, ZodResolved extends z.ZodObject<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_5]["_output"]; } : never> extends infer T_4 ? { [k_4 in keyof T_4]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_5 ? { [k_5 in keyof T_5]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_5]["_output"]; } : never>[k_4]; } : never, z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_7]["_input"]; } : never> extends infer T_6 ? { [k_6 in keyof T_6]: z.objectUtil.addQuestionMarks<import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}> extends infer T_7 ? { [k_7 in keyof T_7]: import("type-fest").Simplify<import("type-fest/source/merge").Merge_<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<DocumentName>>, {}>[k_7]["_input"]; } : never>[k_6]; } : never>, ParsedValue = z.output<Zod>, ResolvedValue = z.output<ZodResolved>, Select extends Record<string, string> = {}>({ name, fields, preview: previewDef, mock, zod: zodFn, zodResolved, ...def }: {
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
    liveEdit?: boolean | undefined;
    orderings?: import("@sanity/types").SortOrdering[] | undefined;
    validation?: ((rule: import("../types").Rule<z.input<Zod>>) => import("../types").Rule<z.input<Zod>>) | undefined;
    initialValue?: z.input<Zod> | (() => import("type-fest").Promisable<z.input<Zod>>) | undefined;
    mock?: ((faker: Faker, path: string) => z.input<Zod>) | undefined;
    zod?: ((zod: z.ZodType<z.output<Zod>, any, z.input<Zod>>) => z.ZodType<ParsedValue, any, z.input<Zod>>) | undefined;
    zodResolved?: ((zod: z.ZodType<z.output<ZodResolved>, any, z.input<Zod>>) => z.ZodType<ResolvedValue, any, z.input<Zod>>) | undefined;
    fields: FieldsArray;
    name: DocumentName;
    preview?: Preview<z.input<Zod>, Select> | undefined;
}) => DocumentType<DocumentName, z.input<Zod>, ParsedValue, ResolvedValue>;
export {};
