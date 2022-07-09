import { z } from "zod";

import {
  fieldsMock,
  fieldsSchema,
  fieldsZodObject,
  fieldsZodResolvedObject,
} from "../field";
import { createType } from "../types";

import type {
  FieldOptions,
  FieldsZodObject,
  FieldsZodResolvedObject,
  Preview,
} from "../field";
import type { SanityNamedTypeDef } from "../types";
import type { Schema } from "@sanity/types";
import type { Merge } from "type-fest";

interface ExtraZodFields<ObjectNames extends string> {
  _type: z.ZodLiteral<ObjectNames>;
}

export const objectNamed = <
  ObjectNames extends string,
  Names extends string,
  Zods extends z.ZodTypeAny,
  ResolvedValues,
  Optionals extends boolean,
  FieldsArray extends readonly [
    FieldOptions<Names, Zods, ResolvedValues, Optionals>,
    ...Array<FieldOptions<Names, Zods, ResolvedValues, Optionals>>
  ],
  Zod extends z.ZodObject<
    Merge<FieldsZodObject<FieldsArray>, ExtraZodFields<ObjectNames>>
  >,
  ZodResolved extends z.ZodObject<
    Merge<FieldsZodResolvedObject<FieldsArray>, ExtraZodFields<ObjectNames>>
  >,
  ParsedValue = z.output<Zod>,
  ResolvedValue = z.output<ZodResolved>,
  // eslint-disable-next-line @typescript-eslint/ban-types -- All other values assume keys
  Select extends Record<string, string> = {}
>({
  name,
  fields,
  preview: previewDef,
  mock = (faker, path = "") =>
    ({
      ...fieldsMock(fields)(faker, `${path}.${name}`),
      _type: name,
    } as unknown as z.input<Zod>),
  zod: zodFn = (zod) =>
    zod as unknown as z.ZodType<ParsedValue, any, z.input<Zod>>,
  zodResolved = (zod) =>
    zod as unknown as z.ZodType<ResolvedValue, any, z.input<Zod>>,
  ...def
}: Merge<
  SanityNamedTypeDef<
    Schema.ObjectDefinition,
    z.input<Zod>,
    ParsedValue,
    ResolvedValue,
    z.output<Zod>,
    z.output<ZodResolved>
  >,
  {
    fields: FieldsArray;
    name: ObjectNames;
    preview?: Preview<z.input<Zod>, Select>;
  }
>) => {
  const typeDef = {
    mock,
    zod: zodFn(
      z.object({
        ...fieldsZodObject(fields),
        _type: z.literal(name),
      }) as unknown as Zod
    ),
    zodResolved: zodResolved(
      z.object({
        ...fieldsZodResolvedObject(fields),
        _type: z.literal(name),
      }) as unknown as z.ZodType<z.output<ZodResolved>, any, z.input<Zod>>
    ),
  };

  return {
    ...createType({
      ...typeDef,
      schema: () => ({
        ...def,
        ...fieldsSchema(fields, previewDef),
        name,
        type: "object",
      }),
    }),
    ref: () =>
      createType({
        ...typeDef,
        schema: () => ({ type: name }),
      }),
  };
};
