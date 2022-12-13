/// <reference types="react" />
import { z } from "zod";
import type { DocumentType } from "../document";
import type { InferResolvedValue, SanityTypeDef } from "../types";
import type { Reference, Schema, WeakReference } from "@sanity/types";
import type { Merge } from "type-fest";
export declare type SanityReference<Weak extends boolean = false> = Omit<Weak extends false ? Omit<Reference, "_weak"> : WeakReference, "_type"> & {
    _type: "reference";
};
export declare const referenceZod: <Weak extends boolean>(weak: Weak | undefined) => z.ZodType<SanityReference<Weak>, any, SanityReference<Weak>>;
export declare const reference: <DocumentName extends string, ResolvedDocumentValue, DocumentTypes extends [DocumentType<DocumentName, any, any, ResolvedDocumentValue>, ...DocumentType<DocumentName, any, any, ResolvedDocumentValue>[]], Weak extends boolean = false, ParsedValue = SanityReference<Weak>, ResolvedValue = InferResolvedValue<DocumentTypes[number]> | (Weak extends false ? never : null)>({ weak, to: documents, zod: zodFn, zodResolved, ...defRaw }: {
    options?: import("@sanity/types").ReferenceOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<SanityReference<Weak>>) => import("../types").Rule<SanityReference<Weak>>) | undefined;
    initialValue?: SanityReference<Weak> | (() => import("type-fest").Promisable<SanityReference<Weak>>) | undefined;
    mock?: ((faker: import("@faker-js/faker").Faker, path: string) => SanityReference<Weak>) | undefined;
    zod?: ((zod: z.ZodType<SanityReference<Weak>, any, SanityReference<Weak>>) => z.ZodType<ParsedValue, any, SanityReference<Weak>>) | undefined;
    zodResolved?: ((zod: z.ZodType<SanityReference<Weak>, any, SanityReference<Weak>>) => z.ZodType<ResolvedValue, any, SanityReference<Weak>>) | undefined;
    to: DocumentTypes;
    weak?: Weak | undefined;
}) => import("../types").SanityType<{
    weak: Weak | undefined;
    type: string;
    to: {
        type: DocumentName;
    }[];
    options?: import("@sanity/types").ReferenceOptions | undefined;
    hidden?: import("@sanity/types").ConditionalProperty;
    readOnly?: import("@sanity/types").ConditionalProperty;
    icon?: import("react").ComponentType<{}> | import("react").ReactNode;
    components?: {
        field?: import("react").ComponentType<any> | undefined;
        item?: import("react").ComponentType<any> | undefined;
        input?: import("react").ComponentType<any> | undefined;
        preview?: import("react").ComponentType<any> | undefined;
    } | undefined;
    validation?: ((rule: import("../types").Rule<SanityReference<Weak>>) => import("../types").Rule<SanityReference<Weak>>) | undefined;
    initialValue?: SanityReference<Weak> | (() => import("type-fest").Promisable<SanityReference<Weak>>) | undefined;
}, SanityReference<Weak>, ParsedValue, ResolvedValue>;
