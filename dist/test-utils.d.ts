import type { Rule } from "@sanity/types";
import type { Simplify } from "type-fest";
import type { IsEqual } from "type-fest/source/internal";
declare type ValidateError<Received, Expected> = Simplify<{
    expected: Expected;
    received: Received;
}>;
export declare type ValidateShape<Received, Expected extends Received> = IsEqual<Expected, Received> extends true ? Received : ValidateError<Received, Expected>;
export declare const mockRule: () => Rule;
export {};
