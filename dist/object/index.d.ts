/// <reference types="react" />
import { z } from "zod";
import type { FieldOptions, FieldsZodObject, FieldsZodResolvedObject, Preview } from "../field";
import type { SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
import type { Merge } from "type-fest";
export declare const object: <Names extends string, Zods extends z.ZodTypeAny, ResolvedValues, Optionals extends boolean, FieldsArray extends [FieldOptions<Names, Zods, ResolvedValues, Optionals>, ...FieldOptions<Names, Zods, ResolvedValues, Optionals>[]], Zod extends z.ZodObject<FieldsZodObject<FieldsArray>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_1 ? { [k_1 in keyof T_1]: FieldsZodObject<FieldsArray>[k_1]["_output"]; } : never> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_1 ? { [k_1 in keyof T_1]: FieldsZodObject<FieldsArray>[k_1]["_output"]; } : never>[k]; } : never, z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_3 ? { [k_3 in keyof T_3]: FieldsZodObject<FieldsArray>[k_3]["_input"]; } : never> extends infer T_2 ? { [k_2 in keyof T_2]: z.objectUtil.addQuestionMarks<FieldsZodObject<FieldsArray> extends infer T_3 ? { [k_3 in keyof T_3]: FieldsZodObject<FieldsArray>[k_3]["_input"]; } : never>[k_2]; } : never>, ZodResolved extends z.ZodObject<FieldsZodResolvedObject<FieldsArray>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<FieldsZodResolvedObject<FieldsArray> extends infer T_5 ? { [k_5 in keyof T_5]: FieldsZodResolvedObject<FieldsArray>[k_5]["_output"]; } : never> extends infer T_4 ? { [k_4 in keyof T_4]: z.objectUtil.addQuestionMarks<FieldsZodResolvedObject<FieldsArray> extends infer T_5 ? { [k_5 in keyof T_5]: FieldsZodResolvedObject<FieldsArray>[k_5]["_output"]; } : never>[k_4]; } : never, z.objectUtil.addQuestionMarks<FieldsZodResolvedObject<FieldsArray> extends infer T_7 ? { [k_7 in keyof T_7]: FieldsZodResolvedObject<FieldsArray>[k_7]["_input"]; } : never> extends infer T_6 ? { [k_6 in keyof T_6]: z.objectUtil.addQuestionMarks<FieldsZodResolvedObject<FieldsArray> extends infer T_7 ? { [k_7 in keyof T_7]: FieldsZodResolvedObject<FieldsArray>[k_7]["_input"]; } : never>[k_6]; } : never>, ParsedValue = z.output<Zod>, ResolvedValue = z.output<ZodResolved>, Select extends Record<string, string> = {}>({ fields, preview: previewDef, mock, zod: zodFn, zodResolved, ...def }: {
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
    preview?: Preview<z.input<Zod>, Select> | undefined;
}) => import("../types").SanityType<{
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
}, z.input<Zod>, ParsedValue, ResolvedValue>;
