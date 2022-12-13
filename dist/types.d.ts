import { z } from "zod";
import type { Faker } from "@faker-js/faker";
import type { CustomValidator, Rule as RuleWithoutTypedCustom } from "@sanity/types";
import type { Merge, PartialDeep, Promisable, SetOptional } from "type-fest";
export declare type TupleOfLength<T, Min extends number = number, Max extends number = number, Result extends T[] = []> = Result["length"] extends Min ? number extends Max ? [...Result, ...T[]] : Result["length"] extends Max ? Result : Result | TupleOfLength<T, [
    T,
    ...Result
]["length"] & number, Max, [
    T,
    ...Result
]> : TupleOfLength<T, Min, Max, [T, ...Result]>;
export declare const zodUnion: <Zods extends z.ZodTypeAny>(zods: Zods[]) => Zods;
export declare const zodDiscriminatedUnion: <Zods extends z.ZodObject<any, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>>(zods: Zods[]) => Zods;
export interface SanityType<Definition, Value, ParsedValue, ResolvedValue> {
    mock: (faker: Faker, path?: string) => Value;
    parse: (data: unknown) => ParsedValue;
    resolve: (data: unknown) => ResolvedValue;
    schema: () => Definition;
    zod: z.ZodType<ParsedValue, any, Value>;
    zodResolved: z.ZodType<ResolvedValue, any, Value>;
}
export declare type InferValue<T extends SanityType<any, any, any, any>> = T extends SanityType<any, infer Value, any, any> ? Value : never;
export declare type InferParsedValue<T extends SanityType<any, any, any, any>> = T extends SanityType<any, any, infer ParsedValue, any> ? ParsedValue : never;
export declare type InferResolvedValue<T extends SanityType<any, any, any, any>> = T extends SanityType<any, any, any, infer ResolvedValue> ? ResolvedValue : never;
export declare const createType: <Definition, Value, ParsedValue, ResolvedValue>({ mock, zod, zodResolved, parse, resolve, ...def }: {
    schema: () => Definition;
    zod: z.ZodType<ParsedValue, any, Value>;
    parse?: ((data: unknown) => ParsedValue) | undefined;
    resolve?: ((data: unknown) => ResolvedValue) | undefined;
    zodResolved?: z.ZodType<ResolvedValue, any, Value> | undefined;
    mock: (faker: Faker, path: string) => Value;
}) => SanityType<Definition, Value, ParsedValue, ResolvedValue>;
export declare type Rule<Value> = Omit<{
    [Key in keyof RuleWithoutTypedCustom]: RuleWithoutTypedCustom[Key] extends (...args: infer Args) => RuleWithoutTypedCustom ? (...args: Args) => Rule<Value> : RuleWithoutTypedCustom[Key];
}, "custom"> & {
    custom: (fn: CustomValidator<PartialDeep<Value>>) => Rule<Value>;
};
export declare type WithTypedValidation<Definition, Value> = Merge<Definition, {
    validation?: (rule: Rule<Value>) => Rule<Value>;
}>;
export declare type NamedSchemaFields = "description" | "name" | "title";
export declare type SanityNamedTypeDef<Definition, Value, ParsedValue, ResolvedValue, PreParsedValue = Value, PreResolvedValue = Value> = Merge<WithTypedValidation<Omit<Definition, "type">, Value>, {
    initialValue?: Value | (() => Promisable<Value>);
    mock?: (faker: Faker, path: string) => Value;
    zod?: (zod: z.ZodType<PreParsedValue, any, Value>) => z.ZodType<ParsedValue, any, Value>;
    zodResolved?: (zod: z.ZodType<PreResolvedValue, any, Value>) => z.ZodType<ResolvedValue, any, Value>;
}>;
export declare type SanityTypeDef<Definition, Value, ParsedValue, ResolvedValue, PreParsedValue = Value, PreResolvedValue = Value> = SanityNamedTypeDef<Omit<Definition, NamedSchemaFields>, Value, ParsedValue, ResolvedValue, PreParsedValue, PreResolvedValue>;
