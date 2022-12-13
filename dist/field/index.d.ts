import { z } from "zod";
import type { InferResolvedValue, InferValue, NamedSchemaFields, SanityType, TupleOfLength, WithTypedValidation } from "../types";
import type { Faker } from "@faker-js/faker";
import type { PrepareViewOptions, PreviewConfig, PreviewValue, Schema, Rule as UntypedRule } from "@sanity/types";
import type { Merge } from "type-fest";
export declare type FieldOptions<Name extends string, Zod extends z.ZodTypeAny, ResolvedValue, Optional extends boolean> = Pick<Schema.FieldDefinition, "description" | "fieldset" | "group" | "title"> & {
    name: Name;
    optional?: Optional;
    type: SanityType<WithTypedValidation<Omit<Schema.FieldDefinition<any>, NamedSchemaFields>, z.input<Zod>>, z.input<Zod>, z.output<Zod>, ResolvedValue>;
};
declare type ZodOptional<T extends z.ZodTypeAny, Optional extends boolean> = Optional extends true ? z.ZodOptional<T> : T;
export declare type FieldsZodObject<FieldsArray extends TupleOfLength<FieldOptions<any, z.ZodTypeAny, any, any>, 1>> = {
    [Name in FieldsArray[number]["name"]]: ZodOptional<Extract<FieldsArray[number], {
        name: Name;
    }>["type"]["zod"], Extract<FieldsArray[number], {
        name: Name;
    }>["optional"]>;
};
export declare const fieldsZodObject: <FieldsArray extends [FieldOptions<any, z.ZodTypeAny, any, any>, ...FieldOptions<any, z.ZodTypeAny, any, any>[]]>(fields: FieldsArray) => FieldsZodObject<FieldsArray>;
export declare type FieldsZodResolvedObject<FieldsArray extends TupleOfLength<FieldOptions<any, z.ZodTypeAny, any, any>, 1>> = {
    [Name in FieldsArray[number]["name"]]: ZodOptional<z.ZodType<InferResolvedValue<Extract<FieldsArray[number], {
        name: Name;
    }>["type"]>, any, InferValue<Extract<FieldsArray[number], {
        name: Name;
    }>["type"]>>, Extract<FieldsArray[number], {
        name: Name;
    }>["optional"]>;
};
export declare const fieldsZodResolvedObject: <FieldsArray extends [FieldOptions<any, z.ZodTypeAny, any, any>, ...FieldOptions<any, z.ZodTypeAny, any, any>[]]>(fields: FieldsArray) => FieldsZodResolvedObject<FieldsArray>;
export declare const fieldsMock: <Names extends string, FieldsArray extends [FieldOptions<Names, z.ZodTypeAny, any, any>, ...FieldOptions<Names, z.ZodTypeAny, any, any>[]]>(fields: FieldsArray) => (faker: Faker, path?: string) => z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_1 ? { [k_1 in keyof T_1]: FieldsZodObject<FieldsArray>[k_1]["_input"]; } : never> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_1 ? { [k_1 in keyof T_1]: FieldsZodObject<FieldsArray>[k_1]["_input"]; } : never>[k]; } : never;
export declare type Preview<Value extends Record<string, unknown>, Select extends NonNullable<PreviewConfig["select"]>> = {
    select: PreviewValue;
} | {
    prepare: (object: Merge<Value, {
        [field in keyof Select]: unknown;
    }>, viewOptions?: PrepareViewOptions) => PreviewValue;
    select?: Select;
};
export declare const fieldsSchema: <Names extends string, FieldsArray extends [FieldOptions<Names, z.ZodTypeAny, any, any>, ...FieldOptions<Names, z.ZodTypeAny, any, any>[]], Value extends Record<string, unknown>, Select extends Record<string, any>>(fields: FieldsArray, previewDef?: Preview<Value, Select> | undefined) => {
    preview: PreviewConfig | undefined;
    fields: {
        name: Names;
        validation: (rule: UntypedRule) => import("../types").Rule<any>;
        description?: string | undefined;
        title?: string | undefined;
        fieldset?: string | undefined;
        group?: string | string[] | undefined;
        type: string;
    }[];
};
export {};
