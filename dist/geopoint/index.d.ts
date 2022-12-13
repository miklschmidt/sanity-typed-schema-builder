/// <reference types="react" />
import { z } from "zod";
import type { SanityTypeDef } from "../types";
import type { Schema } from "@sanity/types";
export interface SanityGeopoint {
    _type: "geopoint";
    alt: number;
    lat: number;
    lng: number;
}
export declare const geopoint: <ParsedValue = SanityGeopoint, ResolvedValue = SanityGeopoint>({ mock, zod: zodFn, zodResolved, ...def }?: {
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<SanityGeopoint>) => import("../types").Rule<SanityGeopoint>) | undefined;
    initialValue?: SanityGeopoint | (() => import("type-fest").Promisable<SanityGeopoint>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => SanityGeopoint) | undefined;
    zod?: ((zod: z.ZodType<SanityGeopoint, any, SanityGeopoint>) => z.ZodType<ParsedValue, any, SanityGeopoint>) | undefined;
    zodResolved?: ((zod: z.ZodType<SanityGeopoint, any, SanityGeopoint>) => z.ZodType<ResolvedValue, any, SanityGeopoint>) | undefined;
}) => import("../types").SanityType<{
    type: string;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<SanityGeopoint>) => import("../types").Rule<SanityGeopoint>) | undefined;
    initialValue?: SanityGeopoint | (() => import("type-fest").Promisable<SanityGeopoint>) | undefined;
}, SanityGeopoint, ParsedValue, ResolvedValue>;
