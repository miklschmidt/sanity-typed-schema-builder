import { z } from "zod";

import {
  fieldsMock,
  fieldsSchema,
  fieldsZodObject,
  fieldsZodResolvedObject,
} from "../field";
import { referenceZod } from "../reference";
import { createType } from "../types";

import type {
  FieldOptions,
  FieldsZodObject,
  FieldsZodResolvedObject,
} from "../field";
import type { SanityReference } from "../reference";
import type { SanityNamedTypeDef } from "../types";
import type { Faker } from "@faker-js/faker";
import type { ImageCrop, ImageHotspot, Schema } from "@sanity/types";
import type { Merge } from "type-fest";

export type SanityImage<Hotspot extends boolean> = Hotspot extends false
  ? {
      _type: "image";
      asset: SanityReference;
    }
  : {
      _type: "image";
      asset: SanityReference;
      crop: ImageCrop;
      hotspot: ImageHotspot;
    };

type ExtraZodFields<Hotspot extends boolean> = Hotspot extends false
  ? {
      _type: z.ZodLiteral<"image">;
      asset: typeof referenceZod;
    }
  : {
      _type: z.ZodLiteral<"image">;
      asset: typeof referenceZod;
      crop: z.ZodObject<{
        _type: z.ZodOptional<z.ZodLiteral<"sanity.imageCrop">>;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
        top: z.ZodNumber;
      }>;
      hotspot: z.ZodObject<{
        _type: z.ZodOptional<z.ZodLiteral<"sanity.imageHotspot">>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
      }>;
    };

const extraZodFields = <Hotspot extends boolean>(
  hotspot: Hotspot | undefined
) =>
  ({
    _type: z.literal("image"),
    asset: referenceZod,
    ...(!hotspot
      ? {}
      : {
          crop: z.object({
            _type: z.literal("sanity.imageCrop").optional(),
            bottom: z.number(),
            left: z.number(),
            right: z.number(),
            top: z.number(),
          }),
          hotspot: z.object({
            _type: z.literal("sanity.imageHotspot").optional(),
            height: z.number(),
            width: z.number(),
            x: z.number(),
            y: z.number(),
          }),
        }),
  } as unknown as ExtraZodFields<Hotspot>);

const zeroToOne = (faker: Faker) =>
  faker.datatype.number({
    min: 0,
    max: 1,
    precision: 1 / 10 ** 15,
  });

export const image = <
  Names extends string,
  Zods extends z.ZodTypeAny,
  ResolvedValues,
  Optionals extends boolean,
  Zod extends z.ZodObject<
    Merge<
      // eslint-disable-next-line no-use-before-define -- Zod can't be optional, but FieldsArray has to be
      FieldsZodObject<FieldsArray>,
      // eslint-disable-next-line no-use-before-define -- Zod can't be optional, but Hotspot has to be
      ExtraZodFields<Hotspot>
    >
  >,
  ZodResolved extends z.ZodObject<
    Merge<
      // eslint-disable-next-line no-use-before-define -- Zod can't be optional, but FieldsArray has to be
      FieldsZodResolvedObject<FieldsArray>,
      // eslint-disable-next-line no-use-before-define -- Zod can't be optional, but Hotspot has to be
      ExtraZodFields<Hotspot>
    >
  >,
  FieldsArray extends readonly [
    FieldOptions<Names, Zods, ResolvedValues, Optionals>,
    ...Array<FieldOptions<Names, Zods, ResolvedValues, Optionals>>
  ] = [never, ...never],
  Hotspot extends boolean = false,
  ParsedValue = z.output<Zod>,
  ResolvedValue = z.output<ZodResolved>
>({
  hotspot,
  fields,
  mock = (faker, path) =>
    ({
      ...(fields && fieldsMock(fields)(faker, path)),
      _type: "image",
      asset: {
        _type: "reference",
        _ref: `image-${faker.random.alphaNumeric(24)}-${faker.datatype.number({
          min: 900,
          max: 3000,
        })}x${faker.datatype.number({
          min: 900,
          max: 3000,
        })}-${faker.helpers.arrayElement([
          "bmp",
          "gif",
          "jpeg",
          "jpg",
          "png",
          "svg",
          "tif",
          "tiff",
        ])}`,
      },
      ...(!hotspot
        ? {}
        : {
            crop: {
              top: zeroToOne(faker),
              bottom: zeroToOne(faker),
              left: zeroToOne(faker),
              right: zeroToOne(faker),
            },
            hotspot: {
              x: zeroToOne(faker),
              y: zeroToOne(faker),
              height: zeroToOne(faker),
              width: zeroToOne(faker),
            },
          }),
    } as unknown as z.input<Zod>),
  zod: zodFn = (zod) =>
    zod as unknown as z.ZodType<ParsedValue, any, z.input<Zod>>,
  zodResolved = (zod) =>
    zod as unknown as z.ZodType<ResolvedValue, any, z.input<Zod>>,
  ...def
}: Merge<
  Omit<
    SanityNamedTypeDef<
      Schema.ImageDefinition,
      z.input<Zod>,
      ParsedValue,
      ResolvedValue,
      z.output<Zod>,
      z.output<ZodResolved>
    >,
    // "title" and "description" actually show up in the UI
    "name" | "preview"
  >,
  {
    fields?: FieldsArray;
    hotspot?: Hotspot;
  }
> = {}) =>
  createType({
    mock,
    schema: () => ({
      ...def,
      ...(fields && fieldsSchema(fields)),
      type: "image",
    }),
    zod: zodFn(
      z.object({
        ...(fields && fieldsZodObject(fields)),
        ...extraZodFields(hotspot),
      }) as unknown as Zod
    ),
    zodResolved: zodResolved(
      z.object({
        ...(fields && fieldsZodResolvedObject(fields)),
        ...extraZodFields(hotspot),
      }) as unknown as z.ZodType<z.output<ZodResolved>, any, z.input<Zod>>
    ),
  });
