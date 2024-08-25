type ConvertBigInt<T> = T extends bigint
  ? string
  : T extends Array<infer U>
    ? Array<ConvertBigInt<U>>
    : T extends object
      ? { [K in keyof T]: ConvertBigInt<T[K]> }
      : T;

export default function format<T>(obj: T): ConvertBigInt<T> {
  if (typeof obj === "bigint") return obj.toString() as ConvertBigInt<T>;

  if (Array.isArray(obj))
    return obj.map((item) => format(item)) as ConvertBigInt<T>;

  if (obj !== null && typeof obj === "object") {
    const result: Partial<Record<string, any>> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = format((obj as any)[key]);
      }
    }
    return result as ConvertBigInt<T>;
  }

  return obj as ConvertBigInt<T>;
}
