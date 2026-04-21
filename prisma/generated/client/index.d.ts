
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agent_memory
 * 
 */
export type agent_memory = $Result.DefaultSelection<Prisma.$agent_memoryPayload>
/**
 * Model audit_logs
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type audit_logs = $Result.DefaultSelection<Prisma.$audit_logsPayload>
/**
 * Model clinic_guidelines
 * 
 */
export type clinic_guidelines = $Result.DefaultSelection<Prisma.$clinic_guidelinesPayload>
/**
 * Model clinical_alerts
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type clinical_alerts = $Result.DefaultSelection<Prisma.$clinical_alertsPayload>
/**
 * Model patient_intake
 * 
 */
export type patient_intake = $Result.DefaultSelection<Prisma.$patient_intakePayload>
/**
 * Model tenants
 * 
 */
export type tenants = $Result.DefaultSelection<Prisma.$tenantsPayload>
/**
 * Model triage_sessions
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type triage_sessions = $Result.DefaultSelection<Prisma.$triage_sessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agent_memories
 * const agent_memories = await prisma.agent_memory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agent_memories
   * const agent_memories = await prisma.agent_memory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agent_memory`: Exposes CRUD operations for the **agent_memory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agent_memories
    * const agent_memories = await prisma.agent_memory.findMany()
    * ```
    */
  get agent_memory(): Prisma.agent_memoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_logs`: Exposes CRUD operations for the **audit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_logs.findMany()
    * ```
    */
  get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinic_guidelines`: Exposes CRUD operations for the **clinic_guidelines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinic_guidelines
    * const clinic_guidelines = await prisma.clinic_guidelines.findMany()
    * ```
    */
  get clinic_guidelines(): Prisma.clinic_guidelinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinical_alerts`: Exposes CRUD operations for the **clinical_alerts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinical_alerts
    * const clinical_alerts = await prisma.clinical_alerts.findMany()
    * ```
    */
  get clinical_alerts(): Prisma.clinical_alertsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient_intake`: Exposes CRUD operations for the **patient_intake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patient_intakes
    * const patient_intakes = await prisma.patient_intake.findMany()
    * ```
    */
  get patient_intake(): Prisma.patient_intakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenants`: Exposes CRUD operations for the **tenants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenants.findMany()
    * ```
    */
  get tenants(): Prisma.tenantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triage_sessions`: Exposes CRUD operations for the **triage_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triage_sessions
    * const triage_sessions = await prisma.triage_sessions.findMany()
    * ```
    */
  get triage_sessions(): Prisma.triage_sessionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    agent_memory: 'agent_memory',
    audit_logs: 'audit_logs',
    clinic_guidelines: 'clinic_guidelines',
    clinical_alerts: 'clinical_alerts',
    patient_intake: 'patient_intake',
    tenants: 'tenants',
    triage_sessions: 'triage_sessions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agent_memory" | "audit_logs" | "clinic_guidelines" | "clinical_alerts" | "patient_intake" | "tenants" | "triage_sessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agent_memory: {
        payload: Prisma.$agent_memoryPayload<ExtArgs>
        fields: Prisma.agent_memoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agent_memoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agent_memoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          findFirst: {
            args: Prisma.agent_memoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agent_memoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          findMany: {
            args: Prisma.agent_memoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>[]
          }
          create: {
            args: Prisma.agent_memoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          createMany: {
            args: Prisma.agent_memoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agent_memoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>[]
          }
          delete: {
            args: Prisma.agent_memoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          update: {
            args: Prisma.agent_memoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          deleteMany: {
            args: Prisma.agent_memoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agent_memoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agent_memoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>[]
          }
          upsert: {
            args: Prisma.agent_memoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agent_memoryPayload>
          }
          aggregate: {
            args: Prisma.Agent_memoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent_memory>
          }
          groupBy: {
            args: Prisma.agent_memoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agent_memoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.agent_memoryCountArgs<ExtArgs>
            result: $Utils.Optional<Agent_memoryCountAggregateOutputType> | number
          }
        }
      }
      audit_logs: {
        payload: Prisma.$audit_logsPayload<ExtArgs>
        fields: Prisma.audit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findFirst: {
            args: Prisma.audit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findMany: {
            args: Prisma.audit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          create: {
            args: Prisma.audit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          createMany: {
            args: Prisma.audit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          delete: {
            args: Prisma.audit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          update: {
            args: Prisma.audit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          deleteMany: {
            args: Prisma.audit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          upsert: {
            args: Prisma.audit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          aggregate: {
            args: Prisma.Audit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_logs>
          }
          groupBy: {
            args: Prisma.audit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsCountAggregateOutputType> | number
          }
        }
      }
      clinic_guidelines: {
        payload: Prisma.$clinic_guidelinesPayload<ExtArgs>
        fields: Prisma.clinic_guidelinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clinic_guidelinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clinic_guidelinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          findFirst: {
            args: Prisma.clinic_guidelinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clinic_guidelinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          findMany: {
            args: Prisma.clinic_guidelinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>[]
          }
          create: {
            args: Prisma.clinic_guidelinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          createMany: {
            args: Prisma.clinic_guidelinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clinic_guidelinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>[]
          }
          delete: {
            args: Prisma.clinic_guidelinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          update: {
            args: Prisma.clinic_guidelinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          deleteMany: {
            args: Prisma.clinic_guidelinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clinic_guidelinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clinic_guidelinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>[]
          }
          upsert: {
            args: Prisma.clinic_guidelinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinic_guidelinesPayload>
          }
          aggregate: {
            args: Prisma.Clinic_guidelinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic_guidelines>
          }
          groupBy: {
            args: Prisma.clinic_guidelinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Clinic_guidelinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clinic_guidelinesCountArgs<ExtArgs>
            result: $Utils.Optional<Clinic_guidelinesCountAggregateOutputType> | number
          }
        }
      }
      clinical_alerts: {
        payload: Prisma.$clinical_alertsPayload<ExtArgs>
        fields: Prisma.clinical_alertsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clinical_alertsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clinical_alertsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          findFirst: {
            args: Prisma.clinical_alertsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clinical_alertsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          findMany: {
            args: Prisma.clinical_alertsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>[]
          }
          create: {
            args: Prisma.clinical_alertsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          createMany: {
            args: Prisma.clinical_alertsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clinical_alertsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>[]
          }
          delete: {
            args: Prisma.clinical_alertsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          update: {
            args: Prisma.clinical_alertsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          deleteMany: {
            args: Prisma.clinical_alertsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clinical_alertsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clinical_alertsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>[]
          }
          upsert: {
            args: Prisma.clinical_alertsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinical_alertsPayload>
          }
          aggregate: {
            args: Prisma.Clinical_alertsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinical_alerts>
          }
          groupBy: {
            args: Prisma.clinical_alertsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Clinical_alertsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clinical_alertsCountArgs<ExtArgs>
            result: $Utils.Optional<Clinical_alertsCountAggregateOutputType> | number
          }
        }
      }
      patient_intake: {
        payload: Prisma.$patient_intakePayload<ExtArgs>
        fields: Prisma.patient_intakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patient_intakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patient_intakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          findFirst: {
            args: Prisma.patient_intakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patient_intakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          findMany: {
            args: Prisma.patient_intakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>[]
          }
          create: {
            args: Prisma.patient_intakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          createMany: {
            args: Prisma.patient_intakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patient_intakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>[]
          }
          delete: {
            args: Prisma.patient_intakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          update: {
            args: Prisma.patient_intakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          deleteMany: {
            args: Prisma.patient_intakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patient_intakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patient_intakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>[]
          }
          upsert: {
            args: Prisma.patient_intakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patient_intakePayload>
          }
          aggregate: {
            args: Prisma.Patient_intakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient_intake>
          }
          groupBy: {
            args: Prisma.patient_intakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Patient_intakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.patient_intakeCountArgs<ExtArgs>
            result: $Utils.Optional<Patient_intakeCountAggregateOutputType> | number
          }
        }
      }
      tenants: {
        payload: Prisma.$tenantsPayload<ExtArgs>
        fields: Prisma.tenantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findFirst: {
            args: Prisma.tenantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findMany: {
            args: Prisma.tenantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>[]
          }
          create: {
            args: Prisma.tenantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          createMany: {
            args: Prisma.tenantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tenantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>[]
          }
          delete: {
            args: Prisma.tenantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          update: {
            args: Prisma.tenantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          deleteMany: {
            args: Prisma.tenantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tenantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>[]
          }
          upsert: {
            args: Prisma.tenantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          aggregate: {
            args: Prisma.TenantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenants>
          }
          groupBy: {
            args: Prisma.tenantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenantsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantsCountAggregateOutputType> | number
          }
        }
      }
      triage_sessions: {
        payload: Prisma.$triage_sessionsPayload<ExtArgs>
        fields: Prisma.triage_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.triage_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.triage_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          findFirst: {
            args: Prisma.triage_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.triage_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          findMany: {
            args: Prisma.triage_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>[]
          }
          create: {
            args: Prisma.triage_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          createMany: {
            args: Prisma.triage_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.triage_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>[]
          }
          delete: {
            args: Prisma.triage_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          update: {
            args: Prisma.triage_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.triage_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.triage_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.triage_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.triage_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triage_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Triage_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriage_sessions>
          }
          groupBy: {
            args: Prisma.triage_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Triage_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.triage_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Triage_sessionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    agent_memory?: agent_memoryOmit
    audit_logs?: audit_logsOmit
    clinic_guidelines?: clinic_guidelinesOmit
    clinical_alerts?: clinical_alertsOmit
    patient_intake?: patient_intakeOmit
    tenants?: tenantsOmit
    triage_sessions?: triage_sessionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Clinical_alertsCountOutputType
   */

  export type Clinical_alertsCountOutputType = {
    audit_logs: number
  }

  export type Clinical_alertsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | Clinical_alertsCountOutputTypeCountAudit_logsArgs
  }

  // Custom InputTypes
  /**
   * Clinical_alertsCountOutputType without action
   */
  export type Clinical_alertsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinical_alertsCountOutputType
     */
    select?: Clinical_alertsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Clinical_alertsCountOutputType without action
   */
  export type Clinical_alertsCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }


  /**
   * Count Type TenantsCountOutputType
   */

  export type TenantsCountOutputType = {
    audit_logs: number
    clinical_alerts: number
    triage_sessions: number
  }

  export type TenantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | TenantsCountOutputTypeCountAudit_logsArgs
    clinical_alerts?: boolean | TenantsCountOutputTypeCountClinical_alertsArgs
    triage_sessions?: boolean | TenantsCountOutputTypeCountTriage_sessionsArgs
  }

  // Custom InputTypes
  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantsCountOutputType
     */
    select?: TenantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountClinical_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinical_alertsWhereInput
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountTriage_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: triage_sessionsWhereInput
  }


  /**
   * Count Type Triage_sessionsCountOutputType
   */

  export type Triage_sessionsCountOutputType = {
    audit_logs: number
    clinical_alerts: number
  }

  export type Triage_sessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | Triage_sessionsCountOutputTypeCountAudit_logsArgs
    clinical_alerts?: boolean | Triage_sessionsCountOutputTypeCountClinical_alertsArgs
  }

  // Custom InputTypes
  /**
   * Triage_sessionsCountOutputType without action
   */
  export type Triage_sessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage_sessionsCountOutputType
     */
    select?: Triage_sessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Triage_sessionsCountOutputType without action
   */
  export type Triage_sessionsCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }

  /**
   * Triage_sessionsCountOutputType without action
   */
  export type Triage_sessionsCountOutputTypeCountClinical_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinical_alertsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model agent_memory
   */

  export type AggregateAgent_memory = {
    _count: Agent_memoryCountAggregateOutputType | null
    _avg: Agent_memoryAvgAggregateOutputType | null
    _sum: Agent_memorySumAggregateOutputType | null
    _min: Agent_memoryMinAggregateOutputType | null
    _max: Agent_memoryMaxAggregateOutputType | null
  }

  export type Agent_memoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Agent_memorySumAggregateOutputType = {
    id: number | null
  }

  export type Agent_memoryMinAggregateOutputType = {
    id: number | null
    session_id: string | null
    tenant_id: string | null
  }

  export type Agent_memoryMaxAggregateOutputType = {
    id: number | null
    session_id: string | null
    tenant_id: string | null
  }

  export type Agent_memoryCountAggregateOutputType = {
    id: number
    session_id: number
    message: number
    tenant_id: number
    _all: number
  }


  export type Agent_memoryAvgAggregateInputType = {
    id?: true
  }

  export type Agent_memorySumAggregateInputType = {
    id?: true
  }

  export type Agent_memoryMinAggregateInputType = {
    id?: true
    session_id?: true
    tenant_id?: true
  }

  export type Agent_memoryMaxAggregateInputType = {
    id?: true
    session_id?: true
    tenant_id?: true
  }

  export type Agent_memoryCountAggregateInputType = {
    id?: true
    session_id?: true
    message?: true
    tenant_id?: true
    _all?: true
  }

  export type Agent_memoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_memory to aggregate.
     */
    where?: agent_memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agent_memories to fetch.
     */
    orderBy?: agent_memoryOrderByWithRelationInput | agent_memoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agent_memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agent_memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agent_memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agent_memories
    **/
    _count?: true | Agent_memoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agent_memoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agent_memorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agent_memoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agent_memoryMaxAggregateInputType
  }

  export type GetAgent_memoryAggregateType<T extends Agent_memoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent_memory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent_memory[P]>
      : GetScalarType<T[P], AggregateAgent_memory[P]>
  }




  export type agent_memoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agent_memoryWhereInput
    orderBy?: agent_memoryOrderByWithAggregationInput | agent_memoryOrderByWithAggregationInput[]
    by: Agent_memoryScalarFieldEnum[] | Agent_memoryScalarFieldEnum
    having?: agent_memoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agent_memoryCountAggregateInputType | true
    _avg?: Agent_memoryAvgAggregateInputType
    _sum?: Agent_memorySumAggregateInputType
    _min?: Agent_memoryMinAggregateInputType
    _max?: Agent_memoryMaxAggregateInputType
  }

  export type Agent_memoryGroupByOutputType = {
    id: number
    session_id: string
    message: JsonValue
    tenant_id: string | null
    _count: Agent_memoryCountAggregateOutputType | null
    _avg: Agent_memoryAvgAggregateOutputType | null
    _sum: Agent_memorySumAggregateOutputType | null
    _min: Agent_memoryMinAggregateOutputType | null
    _max: Agent_memoryMaxAggregateOutputType | null
  }

  type GetAgent_memoryGroupByPayload<T extends agent_memoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agent_memoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agent_memoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agent_memoryGroupByOutputType[P]>
            : GetScalarType<T[P], Agent_memoryGroupByOutputType[P]>
        }
      >
    >


  export type agent_memorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
    tenant_id?: boolean
  }, ExtArgs["result"]["agent_memory"]>

  export type agent_memorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
    tenant_id?: boolean
  }, ExtArgs["result"]["agent_memory"]>

  export type agent_memorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
    tenant_id?: boolean
  }, ExtArgs["result"]["agent_memory"]>

  export type agent_memorySelectScalar = {
    id?: boolean
    session_id?: boolean
    message?: boolean
    tenant_id?: boolean
  }

  export type agent_memoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "message" | "tenant_id", ExtArgs["result"]["agent_memory"]>

  export type $agent_memoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agent_memory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: string
      message: Prisma.JsonValue
      tenant_id: string | null
    }, ExtArgs["result"]["agent_memory"]>
    composites: {}
  }

  type agent_memoryGetPayload<S extends boolean | null | undefined | agent_memoryDefaultArgs> = $Result.GetResult<Prisma.$agent_memoryPayload, S>

  type agent_memoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agent_memoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agent_memoryCountAggregateInputType | true
    }

  export interface agent_memoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agent_memory'], meta: { name: 'agent_memory' } }
    /**
     * Find zero or one Agent_memory that matches the filter.
     * @param {agent_memoryFindUniqueArgs} args - Arguments to find a Agent_memory
     * @example
     * // Get one Agent_memory
     * const agent_memory = await prisma.agent_memory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agent_memoryFindUniqueArgs>(args: SelectSubset<T, agent_memoryFindUniqueArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent_memory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agent_memoryFindUniqueOrThrowArgs} args - Arguments to find a Agent_memory
     * @example
     * // Get one Agent_memory
     * const agent_memory = await prisma.agent_memory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agent_memoryFindUniqueOrThrowArgs>(args: SelectSubset<T, agent_memoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent_memory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryFindFirstArgs} args - Arguments to find a Agent_memory
     * @example
     * // Get one Agent_memory
     * const agent_memory = await prisma.agent_memory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agent_memoryFindFirstArgs>(args?: SelectSubset<T, agent_memoryFindFirstArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent_memory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryFindFirstOrThrowArgs} args - Arguments to find a Agent_memory
     * @example
     * // Get one Agent_memory
     * const agent_memory = await prisma.agent_memory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agent_memoryFindFirstOrThrowArgs>(args?: SelectSubset<T, agent_memoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agent_memories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agent_memories
     * const agent_memories = await prisma.agent_memory.findMany()
     * 
     * // Get first 10 Agent_memories
     * const agent_memories = await prisma.agent_memory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agent_memoryWithIdOnly = await prisma.agent_memory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agent_memoryFindManyArgs>(args?: SelectSubset<T, agent_memoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent_memory.
     * @param {agent_memoryCreateArgs} args - Arguments to create a Agent_memory.
     * @example
     * // Create one Agent_memory
     * const Agent_memory = await prisma.agent_memory.create({
     *   data: {
     *     // ... data to create a Agent_memory
     *   }
     * })
     * 
     */
    create<T extends agent_memoryCreateArgs>(args: SelectSubset<T, agent_memoryCreateArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agent_memories.
     * @param {agent_memoryCreateManyArgs} args - Arguments to create many Agent_memories.
     * @example
     * // Create many Agent_memories
     * const agent_memory = await prisma.agent_memory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agent_memoryCreateManyArgs>(args?: SelectSubset<T, agent_memoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agent_memories and returns the data saved in the database.
     * @param {agent_memoryCreateManyAndReturnArgs} args - Arguments to create many Agent_memories.
     * @example
     * // Create many Agent_memories
     * const agent_memory = await prisma.agent_memory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agent_memories and only return the `id`
     * const agent_memoryWithIdOnly = await prisma.agent_memory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agent_memoryCreateManyAndReturnArgs>(args?: SelectSubset<T, agent_memoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent_memory.
     * @param {agent_memoryDeleteArgs} args - Arguments to delete one Agent_memory.
     * @example
     * // Delete one Agent_memory
     * const Agent_memory = await prisma.agent_memory.delete({
     *   where: {
     *     // ... filter to delete one Agent_memory
     *   }
     * })
     * 
     */
    delete<T extends agent_memoryDeleteArgs>(args: SelectSubset<T, agent_memoryDeleteArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent_memory.
     * @param {agent_memoryUpdateArgs} args - Arguments to update one Agent_memory.
     * @example
     * // Update one Agent_memory
     * const agent_memory = await prisma.agent_memory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agent_memoryUpdateArgs>(args: SelectSubset<T, agent_memoryUpdateArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agent_memories.
     * @param {agent_memoryDeleteManyArgs} args - Arguments to filter Agent_memories to delete.
     * @example
     * // Delete a few Agent_memories
     * const { count } = await prisma.agent_memory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agent_memoryDeleteManyArgs>(args?: SelectSubset<T, agent_memoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agent_memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agent_memories
     * const agent_memory = await prisma.agent_memory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agent_memoryUpdateManyArgs>(args: SelectSubset<T, agent_memoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agent_memories and returns the data updated in the database.
     * @param {agent_memoryUpdateManyAndReturnArgs} args - Arguments to update many Agent_memories.
     * @example
     * // Update many Agent_memories
     * const agent_memory = await prisma.agent_memory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agent_memories and only return the `id`
     * const agent_memoryWithIdOnly = await prisma.agent_memory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agent_memoryUpdateManyAndReturnArgs>(args: SelectSubset<T, agent_memoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent_memory.
     * @param {agent_memoryUpsertArgs} args - Arguments to update or create a Agent_memory.
     * @example
     * // Update or create a Agent_memory
     * const agent_memory = await prisma.agent_memory.upsert({
     *   create: {
     *     // ... data to create a Agent_memory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent_memory we want to update
     *   }
     * })
     */
    upsert<T extends agent_memoryUpsertArgs>(args: SelectSubset<T, agent_memoryUpsertArgs<ExtArgs>>): Prisma__agent_memoryClient<$Result.GetResult<Prisma.$agent_memoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agent_memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryCountArgs} args - Arguments to filter Agent_memories to count.
     * @example
     * // Count the number of Agent_memories
     * const count = await prisma.agent_memory.count({
     *   where: {
     *     // ... the filter for the Agent_memories we want to count
     *   }
     * })
    **/
    count<T extends agent_memoryCountArgs>(
      args?: Subset<T, agent_memoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agent_memoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent_memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_memoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agent_memoryAggregateArgs>(args: Subset<T, Agent_memoryAggregateArgs>): Prisma.PrismaPromise<GetAgent_memoryAggregateType<T>>

    /**
     * Group by Agent_memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_memoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agent_memoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agent_memoryGroupByArgs['orderBy'] }
        : { orderBy?: agent_memoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agent_memoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgent_memoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agent_memory model
   */
  readonly fields: agent_memoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agent_memory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agent_memoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agent_memory model
   */
  interface agent_memoryFieldRefs {
    readonly id: FieldRef<"agent_memory", 'Int'>
    readonly session_id: FieldRef<"agent_memory", 'String'>
    readonly message: FieldRef<"agent_memory", 'Json'>
    readonly tenant_id: FieldRef<"agent_memory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agent_memory findUnique
   */
  export type agent_memoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter, which agent_memory to fetch.
     */
    where: agent_memoryWhereUniqueInput
  }

  /**
   * agent_memory findUniqueOrThrow
   */
  export type agent_memoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter, which agent_memory to fetch.
     */
    where: agent_memoryWhereUniqueInput
  }

  /**
   * agent_memory findFirst
   */
  export type agent_memoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter, which agent_memory to fetch.
     */
    where?: agent_memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agent_memories to fetch.
     */
    orderBy?: agent_memoryOrderByWithRelationInput | agent_memoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agent_memories.
     */
    cursor?: agent_memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agent_memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agent_memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agent_memories.
     */
    distinct?: Agent_memoryScalarFieldEnum | Agent_memoryScalarFieldEnum[]
  }

  /**
   * agent_memory findFirstOrThrow
   */
  export type agent_memoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter, which agent_memory to fetch.
     */
    where?: agent_memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agent_memories to fetch.
     */
    orderBy?: agent_memoryOrderByWithRelationInput | agent_memoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agent_memories.
     */
    cursor?: agent_memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agent_memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agent_memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agent_memories.
     */
    distinct?: Agent_memoryScalarFieldEnum | Agent_memoryScalarFieldEnum[]
  }

  /**
   * agent_memory findMany
   */
  export type agent_memoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter, which agent_memories to fetch.
     */
    where?: agent_memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agent_memories to fetch.
     */
    orderBy?: agent_memoryOrderByWithRelationInput | agent_memoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agent_memories.
     */
    cursor?: agent_memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agent_memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agent_memories.
     */
    skip?: number
    distinct?: Agent_memoryScalarFieldEnum | Agent_memoryScalarFieldEnum[]
  }

  /**
   * agent_memory create
   */
  export type agent_memoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * The data needed to create a agent_memory.
     */
    data: XOR<agent_memoryCreateInput, agent_memoryUncheckedCreateInput>
  }

  /**
   * agent_memory createMany
   */
  export type agent_memoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agent_memories.
     */
    data: agent_memoryCreateManyInput | agent_memoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agent_memory createManyAndReturn
   */
  export type agent_memoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * The data used to create many agent_memories.
     */
    data: agent_memoryCreateManyInput | agent_memoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agent_memory update
   */
  export type agent_memoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * The data needed to update a agent_memory.
     */
    data: XOR<agent_memoryUpdateInput, agent_memoryUncheckedUpdateInput>
    /**
     * Choose, which agent_memory to update.
     */
    where: agent_memoryWhereUniqueInput
  }

  /**
   * agent_memory updateMany
   */
  export type agent_memoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agent_memories.
     */
    data: XOR<agent_memoryUpdateManyMutationInput, agent_memoryUncheckedUpdateManyInput>
    /**
     * Filter which agent_memories to update
     */
    where?: agent_memoryWhereInput
    /**
     * Limit how many agent_memories to update.
     */
    limit?: number
  }

  /**
   * agent_memory updateManyAndReturn
   */
  export type agent_memoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * The data used to update agent_memories.
     */
    data: XOR<agent_memoryUpdateManyMutationInput, agent_memoryUncheckedUpdateManyInput>
    /**
     * Filter which agent_memories to update
     */
    where?: agent_memoryWhereInput
    /**
     * Limit how many agent_memories to update.
     */
    limit?: number
  }

  /**
   * agent_memory upsert
   */
  export type agent_memoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * The filter to search for the agent_memory to update in case it exists.
     */
    where: agent_memoryWhereUniqueInput
    /**
     * In case the agent_memory found by the `where` argument doesn't exist, create a new agent_memory with this data.
     */
    create: XOR<agent_memoryCreateInput, agent_memoryUncheckedCreateInput>
    /**
     * In case the agent_memory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agent_memoryUpdateInput, agent_memoryUncheckedUpdateInput>
  }

  /**
   * agent_memory delete
   */
  export type agent_memoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
    /**
     * Filter which agent_memory to delete.
     */
    where: agent_memoryWhereUniqueInput
  }

  /**
   * agent_memory deleteMany
   */
  export type agent_memoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_memories to delete
     */
    where?: agent_memoryWhereInput
    /**
     * Limit how many agent_memories to delete.
     */
    limit?: number
  }

  /**
   * agent_memory without action
   */
  export type agent_memoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_memory
     */
    select?: agent_memorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the agent_memory
     */
    omit?: agent_memoryOmit<ExtArgs> | null
  }


  /**
   * Model audit_logs
   */

  export type AggregateAudit_logs = {
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  export type Audit_logsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    session_id: string | null
    alert_id: string | null
    physician_id: string | null
    action_taken: string | null
    override_justification: string | null
    ip_address: string | null
    timestamp: Date | null
  }

  export type Audit_logsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    session_id: string | null
    alert_id: string | null
    physician_id: string | null
    action_taken: string | null
    override_justification: string | null
    ip_address: string | null
    timestamp: Date | null
  }

  export type Audit_logsCountAggregateOutputType = {
    id: number
    tenant_id: number
    session_id: number
    alert_id: number
    physician_id: number
    action_taken: number
    override_justification: number
    ip_address: number
    timestamp: number
    _all: number
  }


  export type Audit_logsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    session_id?: true
    alert_id?: true
    physician_id?: true
    action_taken?: true
    override_justification?: true
    ip_address?: true
    timestamp?: true
  }

  export type Audit_logsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    session_id?: true
    alert_id?: true
    physician_id?: true
    action_taken?: true
    override_justification?: true
    ip_address?: true
    timestamp?: true
  }

  export type Audit_logsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    session_id?: true
    alert_id?: true
    physician_id?: true
    action_taken?: true
    override_justification?: true
    ip_address?: true
    timestamp?: true
    _all?: true
  }

  export type Audit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to aggregate.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logsMaxAggregateInputType
  }

  export type GetAudit_logsAggregateType<T extends Audit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_logs[P]>
      : GetScalarType<T[P], AggregateAudit_logs[P]>
  }




  export type audit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithAggregationInput | audit_logsOrderByWithAggregationInput[]
    by: Audit_logsScalarFieldEnum[] | Audit_logsScalarFieldEnum
    having?: audit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logsCountAggregateInputType | true
    _min?: Audit_logsMinAggregateInputType
    _max?: Audit_logsMaxAggregateInputType
  }

  export type Audit_logsGroupByOutputType = {
    id: string
    tenant_id: string
    session_id: string
    alert_id: string | null
    physician_id: string
    action_taken: string
    override_justification: string | null
    ip_address: string | null
    timestamp: Date | null
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  type GetAudit_logsGroupByPayload<T extends audit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
        }
      >
    >


  export type audit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    session_id?: boolean
    alert_id?: boolean
    physician_id?: boolean
    action_taken?: boolean
    override_justification?: boolean
    ip_address?: boolean
    timestamp?: boolean
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    session_id?: boolean
    alert_id?: boolean
    physician_id?: boolean
    action_taken?: boolean
    override_justification?: boolean
    ip_address?: boolean
    timestamp?: boolean
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    session_id?: boolean
    alert_id?: boolean
    physician_id?: boolean
    action_taken?: boolean
    override_justification?: boolean
    ip_address?: boolean
    timestamp?: boolean
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    session_id?: boolean
    alert_id?: boolean
    physician_id?: boolean
    action_taken?: boolean
    override_justification?: boolean
    ip_address?: boolean
    timestamp?: boolean
  }

  export type audit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "session_id" | "alert_id" | "physician_id" | "action_taken" | "override_justification" | "ip_address" | "timestamp", ExtArgs["result"]["audit_logs"]>
  export type audit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }
  export type audit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }
  export type audit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinical_alerts?: boolean | audit_logs$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }

  export type $audit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_logs"
    objects: {
      clinical_alerts: Prisma.$clinical_alertsPayload<ExtArgs> | null
      triage_sessions: Prisma.$triage_sessionsPayload<ExtArgs>
      tenants: Prisma.$tenantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      session_id: string
      alert_id: string | null
      physician_id: string
      action_taken: string
      override_justification: string | null
      ip_address: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["audit_logs"]>
    composites: {}
  }

  type audit_logsGetPayload<S extends boolean | null | undefined | audit_logsDefaultArgs> = $Result.GetResult<Prisma.$audit_logsPayload, S>

  type audit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logsCountAggregateInputType | true
    }

  export interface audit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_logs'], meta: { name: 'audit_logs' } }
    /**
     * Find zero or one Audit_logs that matches the filter.
     * @param {audit_logsFindUniqueArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logsFindUniqueArgs>(args: SelectSubset<T, audit_logsFindUniqueArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logsFindUniqueOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logsFindFirstArgs>(args?: SelectSubset<T, audit_logsFindFirstArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_logsFindManyArgs>(args?: SelectSubset<T, audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_logs.
     * @param {audit_logsCreateArgs} args - Arguments to create a Audit_logs.
     * @example
     * // Create one Audit_logs
     * const Audit_logs = await prisma.audit_logs.create({
     *   data: {
     *     // ... data to create a Audit_logs
     *   }
     * })
     * 
     */
    create<T extends audit_logsCreateArgs>(args: SelectSubset<T, audit_logsCreateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logsCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logsCreateManyArgs>(args?: SelectSubset<T, audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logsCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_logs.
     * @param {audit_logsDeleteArgs} args - Arguments to delete one Audit_logs.
     * @example
     * // Delete one Audit_logs
     * const Audit_logs = await prisma.audit_logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_logs
     *   }
     * })
     * 
     */
    delete<T extends audit_logsDeleteArgs>(args: SelectSubset<T, audit_logsDeleteArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_logs.
     * @param {audit_logsUpdateArgs} args - Arguments to update one Audit_logs.
     * @example
     * // Update one Audit_logs
     * const audit_logs = await prisma.audit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logsUpdateArgs>(args: SelectSubset<T, audit_logsUpdateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logsDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logsDeleteManyArgs>(args?: SelectSubset<T, audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logsUpdateManyArgs>(args: SelectSubset<T, audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logsUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_logs.
     * @param {audit_logsUpsertArgs} args - Arguments to update or create a Audit_logs.
     * @example
     * // Update or create a Audit_logs
     * const audit_logs = await prisma.audit_logs.upsert({
     *   create: {
     *     // ... data to create a Audit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_logs we want to update
     *   }
     * })
     */
    upsert<T extends audit_logsUpsertArgs>(args: SelectSubset<T, audit_logsUpsertArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_logs.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logsCountArgs>(
      args?: Subset<T, audit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_logsAggregateArgs>(args: Subset<T, Audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_logsAggregateType<T>>

    /**
     * Group by Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logsGroupByArgs['orderBy'] }
        : { orderBy?: audit_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_logs model
   */
  readonly fields: audit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinical_alerts<T extends audit_logs$clinical_alertsArgs<ExtArgs> = {}>(args?: Subset<T, audit_logs$clinical_alertsArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    triage_sessions<T extends triage_sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, triage_sessionsDefaultArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenants<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_logs model
   */
  interface audit_logsFieldRefs {
    readonly id: FieldRef<"audit_logs", 'String'>
    readonly tenant_id: FieldRef<"audit_logs", 'String'>
    readonly session_id: FieldRef<"audit_logs", 'String'>
    readonly alert_id: FieldRef<"audit_logs", 'String'>
    readonly physician_id: FieldRef<"audit_logs", 'String'>
    readonly action_taken: FieldRef<"audit_logs", 'String'>
    readonly override_justification: FieldRef<"audit_logs", 'String'>
    readonly ip_address: FieldRef<"audit_logs", 'String'>
    readonly timestamp: FieldRef<"audit_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_logs findUnique
   */
  export type audit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findUniqueOrThrow
   */
  export type audit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findFirst
   */
  export type audit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findFirstOrThrow
   */
  export type audit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findMany
   */
  export type audit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs create
   */
  export type audit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_logs.
     */
    data: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
  }

  /**
   * audit_logs createMany
   */
  export type audit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_logs createManyAndReturn
   */
  export type audit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs update
   */
  export type audit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_logs.
     */
    data: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
    /**
     * Choose, which audit_logs to update.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs updateMany
   */
  export type audit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_logs updateManyAndReturn
   */
  export type audit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs upsert
   */
  export type audit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_logs to update in case it exists.
     */
    where: audit_logsWhereUniqueInput
    /**
     * In case the audit_logs found by the `where` argument doesn't exist, create a new audit_logs with this data.
     */
    create: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
    /**
     * In case the audit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
  }

  /**
   * audit_logs delete
   */
  export type audit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter which audit_logs to delete.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs deleteMany
   */
  export type audit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_logs.clinical_alerts
   */
  export type audit_logs$clinical_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    where?: clinical_alertsWhereInput
  }

  /**
   * audit_logs without action
   */
  export type audit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
  }


  /**
   * Model clinic_guidelines
   */

  export type AggregateClinic_guidelines = {
    _count: Clinic_guidelinesCountAggregateOutputType | null
    _min: Clinic_guidelinesMinAggregateOutputType | null
    _max: Clinic_guidelinesMaxAggregateOutputType | null
  }

  export type Clinic_guidelinesMinAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type Clinic_guidelinesMaxAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type Clinic_guidelinesCountAggregateOutputType = {
    id: number
    text: number
    metadata: number
    _all: number
  }


  export type Clinic_guidelinesMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type Clinic_guidelinesMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type Clinic_guidelinesCountAggregateInputType = {
    id?: true
    text?: true
    metadata?: true
    _all?: true
  }

  export type Clinic_guidelinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic_guidelines to aggregate.
     */
    where?: clinic_guidelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinic_guidelines to fetch.
     */
    orderBy?: clinic_guidelinesOrderByWithRelationInput | clinic_guidelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clinic_guidelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinic_guidelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinic_guidelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clinic_guidelines
    **/
    _count?: true | Clinic_guidelinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clinic_guidelinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clinic_guidelinesMaxAggregateInputType
  }

  export type GetClinic_guidelinesAggregateType<T extends Clinic_guidelinesAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic_guidelines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic_guidelines[P]>
      : GetScalarType<T[P], AggregateClinic_guidelines[P]>
  }




  export type clinic_guidelinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinic_guidelinesWhereInput
    orderBy?: clinic_guidelinesOrderByWithAggregationInput | clinic_guidelinesOrderByWithAggregationInput[]
    by: Clinic_guidelinesScalarFieldEnum[] | Clinic_guidelinesScalarFieldEnum
    having?: clinic_guidelinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clinic_guidelinesCountAggregateInputType | true
    _min?: Clinic_guidelinesMinAggregateInputType
    _max?: Clinic_guidelinesMaxAggregateInputType
  }

  export type Clinic_guidelinesGroupByOutputType = {
    id: string
    text: string | null
    metadata: JsonValue | null
    _count: Clinic_guidelinesCountAggregateOutputType | null
    _min: Clinic_guidelinesMinAggregateOutputType | null
    _max: Clinic_guidelinesMaxAggregateOutputType | null
  }

  type GetClinic_guidelinesGroupByPayload<T extends clinic_guidelinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clinic_guidelinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clinic_guidelinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clinic_guidelinesGroupByOutputType[P]>
            : GetScalarType<T[P], Clinic_guidelinesGroupByOutputType[P]>
        }
      >
    >


  export type clinic_guidelinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["clinic_guidelines"]>

  export type clinic_guidelinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["clinic_guidelines"]>

  export type clinic_guidelinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["clinic_guidelines"]>

  export type clinic_guidelinesSelectScalar = {
    id?: boolean
    text?: boolean
    metadata?: boolean
  }

  export type clinic_guidelinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "metadata", ExtArgs["result"]["clinic_guidelines"]>

  export type $clinic_guidelinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clinic_guidelines"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["clinic_guidelines"]>
    composites: {}
  }

  type clinic_guidelinesGetPayload<S extends boolean | null | undefined | clinic_guidelinesDefaultArgs> = $Result.GetResult<Prisma.$clinic_guidelinesPayload, S>

  type clinic_guidelinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clinic_guidelinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Clinic_guidelinesCountAggregateInputType | true
    }

  export interface clinic_guidelinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic_guidelines'], meta: { name: 'clinic_guidelines' } }
    /**
     * Find zero or one Clinic_guidelines that matches the filter.
     * @param {clinic_guidelinesFindUniqueArgs} args - Arguments to find a Clinic_guidelines
     * @example
     * // Get one Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clinic_guidelinesFindUniqueArgs>(args: SelectSubset<T, clinic_guidelinesFindUniqueArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinic_guidelines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clinic_guidelinesFindUniqueOrThrowArgs} args - Arguments to find a Clinic_guidelines
     * @example
     * // Get one Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clinic_guidelinesFindUniqueOrThrowArgs>(args: SelectSubset<T, clinic_guidelinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic_guidelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesFindFirstArgs} args - Arguments to find a Clinic_guidelines
     * @example
     * // Get one Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clinic_guidelinesFindFirstArgs>(args?: SelectSubset<T, clinic_guidelinesFindFirstArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic_guidelines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesFindFirstOrThrowArgs} args - Arguments to find a Clinic_guidelines
     * @example
     * // Get one Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clinic_guidelinesFindFirstOrThrowArgs>(args?: SelectSubset<T, clinic_guidelinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinic_guidelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findMany()
     * 
     * // Get first 10 Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinic_guidelinesWithIdOnly = await prisma.clinic_guidelines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clinic_guidelinesFindManyArgs>(args?: SelectSubset<T, clinic_guidelinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinic_guidelines.
     * @param {clinic_guidelinesCreateArgs} args - Arguments to create a Clinic_guidelines.
     * @example
     * // Create one Clinic_guidelines
     * const Clinic_guidelines = await prisma.clinic_guidelines.create({
     *   data: {
     *     // ... data to create a Clinic_guidelines
     *   }
     * })
     * 
     */
    create<T extends clinic_guidelinesCreateArgs>(args: SelectSubset<T, clinic_guidelinesCreateArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinic_guidelines.
     * @param {clinic_guidelinesCreateManyArgs} args - Arguments to create many Clinic_guidelines.
     * @example
     * // Create many Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clinic_guidelinesCreateManyArgs>(args?: SelectSubset<T, clinic_guidelinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinic_guidelines and returns the data saved in the database.
     * @param {clinic_guidelinesCreateManyAndReturnArgs} args - Arguments to create many Clinic_guidelines.
     * @example
     * // Create many Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinic_guidelines and only return the `id`
     * const clinic_guidelinesWithIdOnly = await prisma.clinic_guidelines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clinic_guidelinesCreateManyAndReturnArgs>(args?: SelectSubset<T, clinic_guidelinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinic_guidelines.
     * @param {clinic_guidelinesDeleteArgs} args - Arguments to delete one Clinic_guidelines.
     * @example
     * // Delete one Clinic_guidelines
     * const Clinic_guidelines = await prisma.clinic_guidelines.delete({
     *   where: {
     *     // ... filter to delete one Clinic_guidelines
     *   }
     * })
     * 
     */
    delete<T extends clinic_guidelinesDeleteArgs>(args: SelectSubset<T, clinic_guidelinesDeleteArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinic_guidelines.
     * @param {clinic_guidelinesUpdateArgs} args - Arguments to update one Clinic_guidelines.
     * @example
     * // Update one Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clinic_guidelinesUpdateArgs>(args: SelectSubset<T, clinic_guidelinesUpdateArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinic_guidelines.
     * @param {clinic_guidelinesDeleteManyArgs} args - Arguments to filter Clinic_guidelines to delete.
     * @example
     * // Delete a few Clinic_guidelines
     * const { count } = await prisma.clinic_guidelines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clinic_guidelinesDeleteManyArgs>(args?: SelectSubset<T, clinic_guidelinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinic_guidelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clinic_guidelinesUpdateManyArgs>(args: SelectSubset<T, clinic_guidelinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinic_guidelines and returns the data updated in the database.
     * @param {clinic_guidelinesUpdateManyAndReturnArgs} args - Arguments to update many Clinic_guidelines.
     * @example
     * // Update many Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinic_guidelines and only return the `id`
     * const clinic_guidelinesWithIdOnly = await prisma.clinic_guidelines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clinic_guidelinesUpdateManyAndReturnArgs>(args: SelectSubset<T, clinic_guidelinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinic_guidelines.
     * @param {clinic_guidelinesUpsertArgs} args - Arguments to update or create a Clinic_guidelines.
     * @example
     * // Update or create a Clinic_guidelines
     * const clinic_guidelines = await prisma.clinic_guidelines.upsert({
     *   create: {
     *     // ... data to create a Clinic_guidelines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic_guidelines we want to update
     *   }
     * })
     */
    upsert<T extends clinic_guidelinesUpsertArgs>(args: SelectSubset<T, clinic_guidelinesUpsertArgs<ExtArgs>>): Prisma__clinic_guidelinesClient<$Result.GetResult<Prisma.$clinic_guidelinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinic_guidelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesCountArgs} args - Arguments to filter Clinic_guidelines to count.
     * @example
     * // Count the number of Clinic_guidelines
     * const count = await prisma.clinic_guidelines.count({
     *   where: {
     *     // ... the filter for the Clinic_guidelines we want to count
     *   }
     * })
    **/
    count<T extends clinic_guidelinesCountArgs>(
      args?: Subset<T, clinic_guidelinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clinic_guidelinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic_guidelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clinic_guidelinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Clinic_guidelinesAggregateArgs>(args: Subset<T, Clinic_guidelinesAggregateArgs>): Prisma.PrismaPromise<GetClinic_guidelinesAggregateType<T>>

    /**
     * Group by Clinic_guidelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinic_guidelinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clinic_guidelinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinic_guidelinesGroupByArgs['orderBy'] }
        : { orderBy?: clinic_guidelinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clinic_guidelinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinic_guidelinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clinic_guidelines model
   */
  readonly fields: clinic_guidelinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic_guidelines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinic_guidelinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clinic_guidelines model
   */
  interface clinic_guidelinesFieldRefs {
    readonly id: FieldRef<"clinic_guidelines", 'String'>
    readonly text: FieldRef<"clinic_guidelines", 'String'>
    readonly metadata: FieldRef<"clinic_guidelines", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * clinic_guidelines findUnique
   */
  export type clinic_guidelinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter, which clinic_guidelines to fetch.
     */
    where: clinic_guidelinesWhereUniqueInput
  }

  /**
   * clinic_guidelines findUniqueOrThrow
   */
  export type clinic_guidelinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter, which clinic_guidelines to fetch.
     */
    where: clinic_guidelinesWhereUniqueInput
  }

  /**
   * clinic_guidelines findFirst
   */
  export type clinic_guidelinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter, which clinic_guidelines to fetch.
     */
    where?: clinic_guidelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinic_guidelines to fetch.
     */
    orderBy?: clinic_guidelinesOrderByWithRelationInput | clinic_guidelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinic_guidelines.
     */
    cursor?: clinic_guidelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinic_guidelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinic_guidelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinic_guidelines.
     */
    distinct?: Clinic_guidelinesScalarFieldEnum | Clinic_guidelinesScalarFieldEnum[]
  }

  /**
   * clinic_guidelines findFirstOrThrow
   */
  export type clinic_guidelinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter, which clinic_guidelines to fetch.
     */
    where?: clinic_guidelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinic_guidelines to fetch.
     */
    orderBy?: clinic_guidelinesOrderByWithRelationInput | clinic_guidelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinic_guidelines.
     */
    cursor?: clinic_guidelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinic_guidelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinic_guidelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinic_guidelines.
     */
    distinct?: Clinic_guidelinesScalarFieldEnum | Clinic_guidelinesScalarFieldEnum[]
  }

  /**
   * clinic_guidelines findMany
   */
  export type clinic_guidelinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter, which clinic_guidelines to fetch.
     */
    where?: clinic_guidelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinic_guidelines to fetch.
     */
    orderBy?: clinic_guidelinesOrderByWithRelationInput | clinic_guidelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clinic_guidelines.
     */
    cursor?: clinic_guidelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinic_guidelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinic_guidelines.
     */
    skip?: number
    distinct?: Clinic_guidelinesScalarFieldEnum | Clinic_guidelinesScalarFieldEnum[]
  }

  /**
   * clinic_guidelines create
   */
  export type clinic_guidelinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * The data needed to create a clinic_guidelines.
     */
    data?: XOR<clinic_guidelinesCreateInput, clinic_guidelinesUncheckedCreateInput>
  }

  /**
   * clinic_guidelines createMany
   */
  export type clinic_guidelinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinic_guidelines.
     */
    data: clinic_guidelinesCreateManyInput | clinic_guidelinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clinic_guidelines createManyAndReturn
   */
  export type clinic_guidelinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * The data used to create many clinic_guidelines.
     */
    data: clinic_guidelinesCreateManyInput | clinic_guidelinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clinic_guidelines update
   */
  export type clinic_guidelinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * The data needed to update a clinic_guidelines.
     */
    data: XOR<clinic_guidelinesUpdateInput, clinic_guidelinesUncheckedUpdateInput>
    /**
     * Choose, which clinic_guidelines to update.
     */
    where: clinic_guidelinesWhereUniqueInput
  }

  /**
   * clinic_guidelines updateMany
   */
  export type clinic_guidelinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinic_guidelines.
     */
    data: XOR<clinic_guidelinesUpdateManyMutationInput, clinic_guidelinesUncheckedUpdateManyInput>
    /**
     * Filter which clinic_guidelines to update
     */
    where?: clinic_guidelinesWhereInput
    /**
     * Limit how many clinic_guidelines to update.
     */
    limit?: number
  }

  /**
   * clinic_guidelines updateManyAndReturn
   */
  export type clinic_guidelinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * The data used to update clinic_guidelines.
     */
    data: XOR<clinic_guidelinesUpdateManyMutationInput, clinic_guidelinesUncheckedUpdateManyInput>
    /**
     * Filter which clinic_guidelines to update
     */
    where?: clinic_guidelinesWhereInput
    /**
     * Limit how many clinic_guidelines to update.
     */
    limit?: number
  }

  /**
   * clinic_guidelines upsert
   */
  export type clinic_guidelinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * The filter to search for the clinic_guidelines to update in case it exists.
     */
    where: clinic_guidelinesWhereUniqueInput
    /**
     * In case the clinic_guidelines found by the `where` argument doesn't exist, create a new clinic_guidelines with this data.
     */
    create: XOR<clinic_guidelinesCreateInput, clinic_guidelinesUncheckedCreateInput>
    /**
     * In case the clinic_guidelines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinic_guidelinesUpdateInput, clinic_guidelinesUncheckedUpdateInput>
  }

  /**
   * clinic_guidelines delete
   */
  export type clinic_guidelinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
    /**
     * Filter which clinic_guidelines to delete.
     */
    where: clinic_guidelinesWhereUniqueInput
  }

  /**
   * clinic_guidelines deleteMany
   */
  export type clinic_guidelinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic_guidelines to delete
     */
    where?: clinic_guidelinesWhereInput
    /**
     * Limit how many clinic_guidelines to delete.
     */
    limit?: number
  }

  /**
   * clinic_guidelines without action
   */
  export type clinic_guidelinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic_guidelines
     */
    select?: clinic_guidelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic_guidelines
     */
    omit?: clinic_guidelinesOmit<ExtArgs> | null
  }


  /**
   * Model clinical_alerts
   */

  export type AggregateClinical_alerts = {
    _count: Clinical_alertsCountAggregateOutputType | null
    _min: Clinical_alertsMinAggregateOutputType | null
    _max: Clinical_alertsMaxAggregateOutputType | null
  }

  export type Clinical_alertsMinAggregateOutputType = {
    id: string | null
    session_id: string | null
    tenant_id: string | null
    alert_type: string | null
    severity: string | null
    description: string | null
    recommendation: string | null
    status: string | null
    created_at: Date | null
  }

  export type Clinical_alertsMaxAggregateOutputType = {
    id: string | null
    session_id: string | null
    tenant_id: string | null
    alert_type: string | null
    severity: string | null
    description: string | null
    recommendation: string | null
    status: string | null
    created_at: Date | null
  }

  export type Clinical_alertsCountAggregateOutputType = {
    id: number
    session_id: number
    tenant_id: number
    alert_type: number
    severity: number
    description: number
    recommendation: number
    status: number
    created_at: number
    _all: number
  }


  export type Clinical_alertsMinAggregateInputType = {
    id?: true
    session_id?: true
    tenant_id?: true
    alert_type?: true
    severity?: true
    description?: true
    recommendation?: true
    status?: true
    created_at?: true
  }

  export type Clinical_alertsMaxAggregateInputType = {
    id?: true
    session_id?: true
    tenant_id?: true
    alert_type?: true
    severity?: true
    description?: true
    recommendation?: true
    status?: true
    created_at?: true
  }

  export type Clinical_alertsCountAggregateInputType = {
    id?: true
    session_id?: true
    tenant_id?: true
    alert_type?: true
    severity?: true
    description?: true
    recommendation?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Clinical_alertsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinical_alerts to aggregate.
     */
    where?: clinical_alertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinical_alerts to fetch.
     */
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clinical_alertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinical_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinical_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clinical_alerts
    **/
    _count?: true | Clinical_alertsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clinical_alertsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clinical_alertsMaxAggregateInputType
  }

  export type GetClinical_alertsAggregateType<T extends Clinical_alertsAggregateArgs> = {
        [P in keyof T & keyof AggregateClinical_alerts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinical_alerts[P]>
      : GetScalarType<T[P], AggregateClinical_alerts[P]>
  }




  export type clinical_alertsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinical_alertsWhereInput
    orderBy?: clinical_alertsOrderByWithAggregationInput | clinical_alertsOrderByWithAggregationInput[]
    by: Clinical_alertsScalarFieldEnum[] | Clinical_alertsScalarFieldEnum
    having?: clinical_alertsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clinical_alertsCountAggregateInputType | true
    _min?: Clinical_alertsMinAggregateInputType
    _max?: Clinical_alertsMaxAggregateInputType
  }

  export type Clinical_alertsGroupByOutputType = {
    id: string
    session_id: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status: string | null
    created_at: Date | null
    _count: Clinical_alertsCountAggregateOutputType | null
    _min: Clinical_alertsMinAggregateOutputType | null
    _max: Clinical_alertsMaxAggregateOutputType | null
  }

  type GetClinical_alertsGroupByPayload<T extends clinical_alertsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clinical_alertsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clinical_alertsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clinical_alertsGroupByOutputType[P]>
            : GetScalarType<T[P], Clinical_alertsGroupByOutputType[P]>
        }
      >
    >


  export type clinical_alertsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    tenant_id?: boolean
    alert_type?: boolean
    severity?: boolean
    description?: boolean
    recommendation?: boolean
    status?: boolean
    created_at?: boolean
    audit_logs?: boolean | clinical_alerts$audit_logsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
    _count?: boolean | Clinical_alertsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinical_alerts"]>

  export type clinical_alertsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    tenant_id?: boolean
    alert_type?: boolean
    severity?: boolean
    description?: boolean
    recommendation?: boolean
    status?: boolean
    created_at?: boolean
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinical_alerts"]>

  export type clinical_alertsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    tenant_id?: boolean
    alert_type?: boolean
    severity?: boolean
    description?: boolean
    recommendation?: boolean
    status?: boolean
    created_at?: boolean
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinical_alerts"]>

  export type clinical_alertsSelectScalar = {
    id?: boolean
    session_id?: boolean
    tenant_id?: boolean
    alert_type?: boolean
    severity?: boolean
    description?: boolean
    recommendation?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type clinical_alertsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "tenant_id" | "alert_type" | "severity" | "description" | "recommendation" | "status" | "created_at", ExtArgs["result"]["clinical_alerts"]>
  export type clinical_alertsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | clinical_alerts$audit_logsArgs<ExtArgs>
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
    _count?: boolean | Clinical_alertsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clinical_alertsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }
  export type clinical_alertsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triage_sessions?: boolean | triage_sessionsDefaultArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }

  export type $clinical_alertsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clinical_alerts"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      triage_sessions: Prisma.$triage_sessionsPayload<ExtArgs>
      tenants: Prisma.$tenantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session_id: string
      tenant_id: string
      alert_type: string
      severity: string
      description: string
      recommendation: string
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["clinical_alerts"]>
    composites: {}
  }

  type clinical_alertsGetPayload<S extends boolean | null | undefined | clinical_alertsDefaultArgs> = $Result.GetResult<Prisma.$clinical_alertsPayload, S>

  type clinical_alertsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clinical_alertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Clinical_alertsCountAggregateInputType | true
    }

  export interface clinical_alertsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinical_alerts'], meta: { name: 'clinical_alerts' } }
    /**
     * Find zero or one Clinical_alerts that matches the filter.
     * @param {clinical_alertsFindUniqueArgs} args - Arguments to find a Clinical_alerts
     * @example
     * // Get one Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clinical_alertsFindUniqueArgs>(args: SelectSubset<T, clinical_alertsFindUniqueArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinical_alerts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clinical_alertsFindUniqueOrThrowArgs} args - Arguments to find a Clinical_alerts
     * @example
     * // Get one Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clinical_alertsFindUniqueOrThrowArgs>(args: SelectSubset<T, clinical_alertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinical_alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsFindFirstArgs} args - Arguments to find a Clinical_alerts
     * @example
     * // Get one Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clinical_alertsFindFirstArgs>(args?: SelectSubset<T, clinical_alertsFindFirstArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinical_alerts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsFindFirstOrThrowArgs} args - Arguments to find a Clinical_alerts
     * @example
     * // Get one Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clinical_alertsFindFirstOrThrowArgs>(args?: SelectSubset<T, clinical_alertsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinical_alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findMany()
     * 
     * // Get first 10 Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinical_alertsWithIdOnly = await prisma.clinical_alerts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clinical_alertsFindManyArgs>(args?: SelectSubset<T, clinical_alertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinical_alerts.
     * @param {clinical_alertsCreateArgs} args - Arguments to create a Clinical_alerts.
     * @example
     * // Create one Clinical_alerts
     * const Clinical_alerts = await prisma.clinical_alerts.create({
     *   data: {
     *     // ... data to create a Clinical_alerts
     *   }
     * })
     * 
     */
    create<T extends clinical_alertsCreateArgs>(args: SelectSubset<T, clinical_alertsCreateArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinical_alerts.
     * @param {clinical_alertsCreateManyArgs} args - Arguments to create many Clinical_alerts.
     * @example
     * // Create many Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clinical_alertsCreateManyArgs>(args?: SelectSubset<T, clinical_alertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinical_alerts and returns the data saved in the database.
     * @param {clinical_alertsCreateManyAndReturnArgs} args - Arguments to create many Clinical_alerts.
     * @example
     * // Create many Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinical_alerts and only return the `id`
     * const clinical_alertsWithIdOnly = await prisma.clinical_alerts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clinical_alertsCreateManyAndReturnArgs>(args?: SelectSubset<T, clinical_alertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinical_alerts.
     * @param {clinical_alertsDeleteArgs} args - Arguments to delete one Clinical_alerts.
     * @example
     * // Delete one Clinical_alerts
     * const Clinical_alerts = await prisma.clinical_alerts.delete({
     *   where: {
     *     // ... filter to delete one Clinical_alerts
     *   }
     * })
     * 
     */
    delete<T extends clinical_alertsDeleteArgs>(args: SelectSubset<T, clinical_alertsDeleteArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinical_alerts.
     * @param {clinical_alertsUpdateArgs} args - Arguments to update one Clinical_alerts.
     * @example
     * // Update one Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clinical_alertsUpdateArgs>(args: SelectSubset<T, clinical_alertsUpdateArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinical_alerts.
     * @param {clinical_alertsDeleteManyArgs} args - Arguments to filter Clinical_alerts to delete.
     * @example
     * // Delete a few Clinical_alerts
     * const { count } = await prisma.clinical_alerts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clinical_alertsDeleteManyArgs>(args?: SelectSubset<T, clinical_alertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinical_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clinical_alertsUpdateManyArgs>(args: SelectSubset<T, clinical_alertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinical_alerts and returns the data updated in the database.
     * @param {clinical_alertsUpdateManyAndReturnArgs} args - Arguments to update many Clinical_alerts.
     * @example
     * // Update many Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinical_alerts and only return the `id`
     * const clinical_alertsWithIdOnly = await prisma.clinical_alerts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clinical_alertsUpdateManyAndReturnArgs>(args: SelectSubset<T, clinical_alertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinical_alerts.
     * @param {clinical_alertsUpsertArgs} args - Arguments to update or create a Clinical_alerts.
     * @example
     * // Update or create a Clinical_alerts
     * const clinical_alerts = await prisma.clinical_alerts.upsert({
     *   create: {
     *     // ... data to create a Clinical_alerts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinical_alerts we want to update
     *   }
     * })
     */
    upsert<T extends clinical_alertsUpsertArgs>(args: SelectSubset<T, clinical_alertsUpsertArgs<ExtArgs>>): Prisma__clinical_alertsClient<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinical_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsCountArgs} args - Arguments to filter Clinical_alerts to count.
     * @example
     * // Count the number of Clinical_alerts
     * const count = await prisma.clinical_alerts.count({
     *   where: {
     *     // ... the filter for the Clinical_alerts we want to count
     *   }
     * })
    **/
    count<T extends clinical_alertsCountArgs>(
      args?: Subset<T, clinical_alertsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clinical_alertsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinical_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clinical_alertsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Clinical_alertsAggregateArgs>(args: Subset<T, Clinical_alertsAggregateArgs>): Prisma.PrismaPromise<GetClinical_alertsAggregateType<T>>

    /**
     * Group by Clinical_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinical_alertsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clinical_alertsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinical_alertsGroupByArgs['orderBy'] }
        : { orderBy?: clinical_alertsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clinical_alertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinical_alertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clinical_alerts model
   */
  readonly fields: clinical_alertsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinical_alerts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinical_alertsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends clinical_alerts$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, clinical_alerts$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triage_sessions<T extends triage_sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, triage_sessionsDefaultArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenants<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clinical_alerts model
   */
  interface clinical_alertsFieldRefs {
    readonly id: FieldRef<"clinical_alerts", 'String'>
    readonly session_id: FieldRef<"clinical_alerts", 'String'>
    readonly tenant_id: FieldRef<"clinical_alerts", 'String'>
    readonly alert_type: FieldRef<"clinical_alerts", 'String'>
    readonly severity: FieldRef<"clinical_alerts", 'String'>
    readonly description: FieldRef<"clinical_alerts", 'String'>
    readonly recommendation: FieldRef<"clinical_alerts", 'String'>
    readonly status: FieldRef<"clinical_alerts", 'String'>
    readonly created_at: FieldRef<"clinical_alerts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clinical_alerts findUnique
   */
  export type clinical_alertsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter, which clinical_alerts to fetch.
     */
    where: clinical_alertsWhereUniqueInput
  }

  /**
   * clinical_alerts findUniqueOrThrow
   */
  export type clinical_alertsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter, which clinical_alerts to fetch.
     */
    where: clinical_alertsWhereUniqueInput
  }

  /**
   * clinical_alerts findFirst
   */
  export type clinical_alertsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter, which clinical_alerts to fetch.
     */
    where?: clinical_alertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinical_alerts to fetch.
     */
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinical_alerts.
     */
    cursor?: clinical_alertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinical_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinical_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinical_alerts.
     */
    distinct?: Clinical_alertsScalarFieldEnum | Clinical_alertsScalarFieldEnum[]
  }

  /**
   * clinical_alerts findFirstOrThrow
   */
  export type clinical_alertsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter, which clinical_alerts to fetch.
     */
    where?: clinical_alertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinical_alerts to fetch.
     */
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinical_alerts.
     */
    cursor?: clinical_alertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinical_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinical_alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinical_alerts.
     */
    distinct?: Clinical_alertsScalarFieldEnum | Clinical_alertsScalarFieldEnum[]
  }

  /**
   * clinical_alerts findMany
   */
  export type clinical_alertsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter, which clinical_alerts to fetch.
     */
    where?: clinical_alertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinical_alerts to fetch.
     */
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clinical_alerts.
     */
    cursor?: clinical_alertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinical_alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinical_alerts.
     */
    skip?: number
    distinct?: Clinical_alertsScalarFieldEnum | Clinical_alertsScalarFieldEnum[]
  }

  /**
   * clinical_alerts create
   */
  export type clinical_alertsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * The data needed to create a clinical_alerts.
     */
    data: XOR<clinical_alertsCreateInput, clinical_alertsUncheckedCreateInput>
  }

  /**
   * clinical_alerts createMany
   */
  export type clinical_alertsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinical_alerts.
     */
    data: clinical_alertsCreateManyInput | clinical_alertsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clinical_alerts createManyAndReturn
   */
  export type clinical_alertsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * The data used to create many clinical_alerts.
     */
    data: clinical_alertsCreateManyInput | clinical_alertsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * clinical_alerts update
   */
  export type clinical_alertsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * The data needed to update a clinical_alerts.
     */
    data: XOR<clinical_alertsUpdateInput, clinical_alertsUncheckedUpdateInput>
    /**
     * Choose, which clinical_alerts to update.
     */
    where: clinical_alertsWhereUniqueInput
  }

  /**
   * clinical_alerts updateMany
   */
  export type clinical_alertsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinical_alerts.
     */
    data: XOR<clinical_alertsUpdateManyMutationInput, clinical_alertsUncheckedUpdateManyInput>
    /**
     * Filter which clinical_alerts to update
     */
    where?: clinical_alertsWhereInput
    /**
     * Limit how many clinical_alerts to update.
     */
    limit?: number
  }

  /**
   * clinical_alerts updateManyAndReturn
   */
  export type clinical_alertsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * The data used to update clinical_alerts.
     */
    data: XOR<clinical_alertsUpdateManyMutationInput, clinical_alertsUncheckedUpdateManyInput>
    /**
     * Filter which clinical_alerts to update
     */
    where?: clinical_alertsWhereInput
    /**
     * Limit how many clinical_alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * clinical_alerts upsert
   */
  export type clinical_alertsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * The filter to search for the clinical_alerts to update in case it exists.
     */
    where: clinical_alertsWhereUniqueInput
    /**
     * In case the clinical_alerts found by the `where` argument doesn't exist, create a new clinical_alerts with this data.
     */
    create: XOR<clinical_alertsCreateInput, clinical_alertsUncheckedCreateInput>
    /**
     * In case the clinical_alerts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinical_alertsUpdateInput, clinical_alertsUncheckedUpdateInput>
  }

  /**
   * clinical_alerts delete
   */
  export type clinical_alertsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    /**
     * Filter which clinical_alerts to delete.
     */
    where: clinical_alertsWhereUniqueInput
  }

  /**
   * clinical_alerts deleteMany
   */
  export type clinical_alertsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinical_alerts to delete
     */
    where?: clinical_alertsWhereInput
    /**
     * Limit how many clinical_alerts to delete.
     */
    limit?: number
  }

  /**
   * clinical_alerts.audit_logs
   */
  export type clinical_alerts$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * clinical_alerts without action
   */
  export type clinical_alertsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
  }


  /**
   * Model patient_intake
   */

  export type AggregatePatient_intake = {
    _count: Patient_intakeCountAggregateOutputType | null
    _avg: Patient_intakeAvgAggregateOutputType | null
    _sum: Patient_intakeSumAggregateOutputType | null
    _min: Patient_intakeMinAggregateOutputType | null
    _max: Patient_intakeMaxAggregateOutputType | null
  }

  export type Patient_intakeAvgAggregateOutputType = {
    id: number | null
  }

  export type Patient_intakeSumAggregateOutputType = {
    id: number | null
  }

  export type Patient_intakeMinAggregateOutputType = {
    id: number | null
    patient_status: string | null
    created_at: Date | null
  }

  export type Patient_intakeMaxAggregateOutputType = {
    id: number | null
    patient_status: string | null
    created_at: Date | null
  }

  export type Patient_intakeCountAggregateOutputType = {
    id: number
    patient_status: number
    primary_concerns: number
    medications_noted: number
    created_at: number
    _all: number
  }


  export type Patient_intakeAvgAggregateInputType = {
    id?: true
  }

  export type Patient_intakeSumAggregateInputType = {
    id?: true
  }

  export type Patient_intakeMinAggregateInputType = {
    id?: true
    patient_status?: true
    created_at?: true
  }

  export type Patient_intakeMaxAggregateInputType = {
    id?: true
    patient_status?: true
    created_at?: true
  }

  export type Patient_intakeCountAggregateInputType = {
    id?: true
    patient_status?: true
    primary_concerns?: true
    medications_noted?: true
    created_at?: true
    _all?: true
  }

  export type Patient_intakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient_intake to aggregate.
     */
    where?: patient_intakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patient_intakes to fetch.
     */
    orderBy?: patient_intakeOrderByWithRelationInput | patient_intakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patient_intakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patient_intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patient_intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patient_intakes
    **/
    _count?: true | Patient_intakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Patient_intakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Patient_intakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Patient_intakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Patient_intakeMaxAggregateInputType
  }

  export type GetPatient_intakeAggregateType<T extends Patient_intakeAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient_intake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient_intake[P]>
      : GetScalarType<T[P], AggregatePatient_intake[P]>
  }




  export type patient_intakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patient_intakeWhereInput
    orderBy?: patient_intakeOrderByWithAggregationInput | patient_intakeOrderByWithAggregationInput[]
    by: Patient_intakeScalarFieldEnum[] | Patient_intakeScalarFieldEnum
    having?: patient_intakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Patient_intakeCountAggregateInputType | true
    _avg?: Patient_intakeAvgAggregateInputType
    _sum?: Patient_intakeSumAggregateInputType
    _min?: Patient_intakeMinAggregateInputType
    _max?: Patient_intakeMaxAggregateInputType
  }

  export type Patient_intakeGroupByOutputType = {
    id: number
    patient_status: string | null
    primary_concerns: JsonValue | null
    medications_noted: JsonValue | null
    created_at: Date | null
    _count: Patient_intakeCountAggregateOutputType | null
    _avg: Patient_intakeAvgAggregateOutputType | null
    _sum: Patient_intakeSumAggregateOutputType | null
    _min: Patient_intakeMinAggregateOutputType | null
    _max: Patient_intakeMaxAggregateOutputType | null
  }

  type GetPatient_intakeGroupByPayload<T extends patient_intakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Patient_intakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Patient_intakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Patient_intakeGroupByOutputType[P]>
            : GetScalarType<T[P], Patient_intakeGroupByOutputType[P]>
        }
      >
    >


  export type patient_intakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_status?: boolean
    primary_concerns?: boolean
    medications_noted?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["patient_intake"]>

  export type patient_intakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_status?: boolean
    primary_concerns?: boolean
    medications_noted?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["patient_intake"]>

  export type patient_intakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_status?: boolean
    primary_concerns?: boolean
    medications_noted?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["patient_intake"]>

  export type patient_intakeSelectScalar = {
    id?: boolean
    patient_status?: boolean
    primary_concerns?: boolean
    medications_noted?: boolean
    created_at?: boolean
  }

  export type patient_intakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_status" | "primary_concerns" | "medications_noted" | "created_at", ExtArgs["result"]["patient_intake"]>

  export type $patient_intakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient_intake"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patient_status: string | null
      primary_concerns: Prisma.JsonValue | null
      medications_noted: Prisma.JsonValue | null
      created_at: Date | null
    }, ExtArgs["result"]["patient_intake"]>
    composites: {}
  }

  type patient_intakeGetPayload<S extends boolean | null | undefined | patient_intakeDefaultArgs> = $Result.GetResult<Prisma.$patient_intakePayload, S>

  type patient_intakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patient_intakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Patient_intakeCountAggregateInputType | true
    }

  export interface patient_intakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient_intake'], meta: { name: 'patient_intake' } }
    /**
     * Find zero or one Patient_intake that matches the filter.
     * @param {patient_intakeFindUniqueArgs} args - Arguments to find a Patient_intake
     * @example
     * // Get one Patient_intake
     * const patient_intake = await prisma.patient_intake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patient_intakeFindUniqueArgs>(args: SelectSubset<T, patient_intakeFindUniqueArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient_intake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patient_intakeFindUniqueOrThrowArgs} args - Arguments to find a Patient_intake
     * @example
     * // Get one Patient_intake
     * const patient_intake = await prisma.patient_intake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patient_intakeFindUniqueOrThrowArgs>(args: SelectSubset<T, patient_intakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient_intake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeFindFirstArgs} args - Arguments to find a Patient_intake
     * @example
     * // Get one Patient_intake
     * const patient_intake = await prisma.patient_intake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patient_intakeFindFirstArgs>(args?: SelectSubset<T, patient_intakeFindFirstArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient_intake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeFindFirstOrThrowArgs} args - Arguments to find a Patient_intake
     * @example
     * // Get one Patient_intake
     * const patient_intake = await prisma.patient_intake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patient_intakeFindFirstOrThrowArgs>(args?: SelectSubset<T, patient_intakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patient_intakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patient_intakes
     * const patient_intakes = await prisma.patient_intake.findMany()
     * 
     * // Get first 10 Patient_intakes
     * const patient_intakes = await prisma.patient_intake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patient_intakeWithIdOnly = await prisma.patient_intake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patient_intakeFindManyArgs>(args?: SelectSubset<T, patient_intakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient_intake.
     * @param {patient_intakeCreateArgs} args - Arguments to create a Patient_intake.
     * @example
     * // Create one Patient_intake
     * const Patient_intake = await prisma.patient_intake.create({
     *   data: {
     *     // ... data to create a Patient_intake
     *   }
     * })
     * 
     */
    create<T extends patient_intakeCreateArgs>(args: SelectSubset<T, patient_intakeCreateArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patient_intakes.
     * @param {patient_intakeCreateManyArgs} args - Arguments to create many Patient_intakes.
     * @example
     * // Create many Patient_intakes
     * const patient_intake = await prisma.patient_intake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patient_intakeCreateManyArgs>(args?: SelectSubset<T, patient_intakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patient_intakes and returns the data saved in the database.
     * @param {patient_intakeCreateManyAndReturnArgs} args - Arguments to create many Patient_intakes.
     * @example
     * // Create many Patient_intakes
     * const patient_intake = await prisma.patient_intake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patient_intakes and only return the `id`
     * const patient_intakeWithIdOnly = await prisma.patient_intake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patient_intakeCreateManyAndReturnArgs>(args?: SelectSubset<T, patient_intakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient_intake.
     * @param {patient_intakeDeleteArgs} args - Arguments to delete one Patient_intake.
     * @example
     * // Delete one Patient_intake
     * const Patient_intake = await prisma.patient_intake.delete({
     *   where: {
     *     // ... filter to delete one Patient_intake
     *   }
     * })
     * 
     */
    delete<T extends patient_intakeDeleteArgs>(args: SelectSubset<T, patient_intakeDeleteArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient_intake.
     * @param {patient_intakeUpdateArgs} args - Arguments to update one Patient_intake.
     * @example
     * // Update one Patient_intake
     * const patient_intake = await prisma.patient_intake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patient_intakeUpdateArgs>(args: SelectSubset<T, patient_intakeUpdateArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patient_intakes.
     * @param {patient_intakeDeleteManyArgs} args - Arguments to filter Patient_intakes to delete.
     * @example
     * // Delete a few Patient_intakes
     * const { count } = await prisma.patient_intake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patient_intakeDeleteManyArgs>(args?: SelectSubset<T, patient_intakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patient_intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patient_intakes
     * const patient_intake = await prisma.patient_intake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patient_intakeUpdateManyArgs>(args: SelectSubset<T, patient_intakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patient_intakes and returns the data updated in the database.
     * @param {patient_intakeUpdateManyAndReturnArgs} args - Arguments to update many Patient_intakes.
     * @example
     * // Update many Patient_intakes
     * const patient_intake = await prisma.patient_intake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patient_intakes and only return the `id`
     * const patient_intakeWithIdOnly = await prisma.patient_intake.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patient_intakeUpdateManyAndReturnArgs>(args: SelectSubset<T, patient_intakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient_intake.
     * @param {patient_intakeUpsertArgs} args - Arguments to update or create a Patient_intake.
     * @example
     * // Update or create a Patient_intake
     * const patient_intake = await prisma.patient_intake.upsert({
     *   create: {
     *     // ... data to create a Patient_intake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient_intake we want to update
     *   }
     * })
     */
    upsert<T extends patient_intakeUpsertArgs>(args: SelectSubset<T, patient_intakeUpsertArgs<ExtArgs>>): Prisma__patient_intakeClient<$Result.GetResult<Prisma.$patient_intakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patient_intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeCountArgs} args - Arguments to filter Patient_intakes to count.
     * @example
     * // Count the number of Patient_intakes
     * const count = await prisma.patient_intake.count({
     *   where: {
     *     // ... the filter for the Patient_intakes we want to count
     *   }
     * })
    **/
    count<T extends patient_intakeCountArgs>(
      args?: Subset<T, patient_intakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Patient_intakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient_intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Patient_intakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Patient_intakeAggregateArgs>(args: Subset<T, Patient_intakeAggregateArgs>): Prisma.PrismaPromise<GetPatient_intakeAggregateType<T>>

    /**
     * Group by Patient_intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patient_intakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patient_intakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patient_intakeGroupByArgs['orderBy'] }
        : { orderBy?: patient_intakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patient_intakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatient_intakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient_intake model
   */
  readonly fields: patient_intakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient_intake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patient_intakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patient_intake model
   */
  interface patient_intakeFieldRefs {
    readonly id: FieldRef<"patient_intake", 'Int'>
    readonly patient_status: FieldRef<"patient_intake", 'String'>
    readonly primary_concerns: FieldRef<"patient_intake", 'Json'>
    readonly medications_noted: FieldRef<"patient_intake", 'Json'>
    readonly created_at: FieldRef<"patient_intake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patient_intake findUnique
   */
  export type patient_intakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter, which patient_intake to fetch.
     */
    where: patient_intakeWhereUniqueInput
  }

  /**
   * patient_intake findUniqueOrThrow
   */
  export type patient_intakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter, which patient_intake to fetch.
     */
    where: patient_intakeWhereUniqueInput
  }

  /**
   * patient_intake findFirst
   */
  export type patient_intakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter, which patient_intake to fetch.
     */
    where?: patient_intakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patient_intakes to fetch.
     */
    orderBy?: patient_intakeOrderByWithRelationInput | patient_intakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patient_intakes.
     */
    cursor?: patient_intakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patient_intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patient_intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patient_intakes.
     */
    distinct?: Patient_intakeScalarFieldEnum | Patient_intakeScalarFieldEnum[]
  }

  /**
   * patient_intake findFirstOrThrow
   */
  export type patient_intakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter, which patient_intake to fetch.
     */
    where?: patient_intakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patient_intakes to fetch.
     */
    orderBy?: patient_intakeOrderByWithRelationInput | patient_intakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patient_intakes.
     */
    cursor?: patient_intakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patient_intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patient_intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patient_intakes.
     */
    distinct?: Patient_intakeScalarFieldEnum | Patient_intakeScalarFieldEnum[]
  }

  /**
   * patient_intake findMany
   */
  export type patient_intakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter, which patient_intakes to fetch.
     */
    where?: patient_intakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patient_intakes to fetch.
     */
    orderBy?: patient_intakeOrderByWithRelationInput | patient_intakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patient_intakes.
     */
    cursor?: patient_intakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patient_intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patient_intakes.
     */
    skip?: number
    distinct?: Patient_intakeScalarFieldEnum | Patient_intakeScalarFieldEnum[]
  }

  /**
   * patient_intake create
   */
  export type patient_intakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * The data needed to create a patient_intake.
     */
    data?: XOR<patient_intakeCreateInput, patient_intakeUncheckedCreateInput>
  }

  /**
   * patient_intake createMany
   */
  export type patient_intakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patient_intakes.
     */
    data: patient_intakeCreateManyInput | patient_intakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient_intake createManyAndReturn
   */
  export type patient_intakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * The data used to create many patient_intakes.
     */
    data: patient_intakeCreateManyInput | patient_intakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient_intake update
   */
  export type patient_intakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * The data needed to update a patient_intake.
     */
    data: XOR<patient_intakeUpdateInput, patient_intakeUncheckedUpdateInput>
    /**
     * Choose, which patient_intake to update.
     */
    where: patient_intakeWhereUniqueInput
  }

  /**
   * patient_intake updateMany
   */
  export type patient_intakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patient_intakes.
     */
    data: XOR<patient_intakeUpdateManyMutationInput, patient_intakeUncheckedUpdateManyInput>
    /**
     * Filter which patient_intakes to update
     */
    where?: patient_intakeWhereInput
    /**
     * Limit how many patient_intakes to update.
     */
    limit?: number
  }

  /**
   * patient_intake updateManyAndReturn
   */
  export type patient_intakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * The data used to update patient_intakes.
     */
    data: XOR<patient_intakeUpdateManyMutationInput, patient_intakeUncheckedUpdateManyInput>
    /**
     * Filter which patient_intakes to update
     */
    where?: patient_intakeWhereInput
    /**
     * Limit how many patient_intakes to update.
     */
    limit?: number
  }

  /**
   * patient_intake upsert
   */
  export type patient_intakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * The filter to search for the patient_intake to update in case it exists.
     */
    where: patient_intakeWhereUniqueInput
    /**
     * In case the patient_intake found by the `where` argument doesn't exist, create a new patient_intake with this data.
     */
    create: XOR<patient_intakeCreateInput, patient_intakeUncheckedCreateInput>
    /**
     * In case the patient_intake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patient_intakeUpdateInput, patient_intakeUncheckedUpdateInput>
  }

  /**
   * patient_intake delete
   */
  export type patient_intakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
    /**
     * Filter which patient_intake to delete.
     */
    where: patient_intakeWhereUniqueInput
  }

  /**
   * patient_intake deleteMany
   */
  export type patient_intakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient_intakes to delete
     */
    where?: patient_intakeWhereInput
    /**
     * Limit how many patient_intakes to delete.
     */
    limit?: number
  }

  /**
   * patient_intake without action
   */
  export type patient_intakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient_intake
     */
    select?: patient_intakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient_intake
     */
    omit?: patient_intakeOmit<ExtArgs> | null
  }


  /**
   * Model tenants
   */

  export type AggregateTenants = {
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  export type TenantsMinAggregateOutputType = {
    id: string | null
    clinic_name: string | null
    created_at: Date | null
  }

  export type TenantsMaxAggregateOutputType = {
    id: string | null
    clinic_name: string | null
    created_at: Date | null
  }

  export type TenantsCountAggregateOutputType = {
    id: number
    clinic_name: number
    created_at: number
    _all: number
  }


  export type TenantsMinAggregateInputType = {
    id?: true
    clinic_name?: true
    created_at?: true
  }

  export type TenantsMaxAggregateInputType = {
    id?: true
    clinic_name?: true
    created_at?: true
  }

  export type TenantsCountAggregateInputType = {
    id?: true
    clinic_name?: true
    created_at?: true
    _all?: true
  }

  export type TenantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to aggregate.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenants
    **/
    _count?: true | TenantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantsMaxAggregateInputType
  }

  export type GetTenantsAggregateType<T extends TenantsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenants[P]>
      : GetScalarType<T[P], AggregateTenants[P]>
  }




  export type tenantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenantsWhereInput
    orderBy?: tenantsOrderByWithAggregationInput | tenantsOrderByWithAggregationInput[]
    by: TenantsScalarFieldEnum[] | TenantsScalarFieldEnum
    having?: tenantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantsCountAggregateInputType | true
    _min?: TenantsMinAggregateInputType
    _max?: TenantsMaxAggregateInputType
  }

  export type TenantsGroupByOutputType = {
    id: string
    clinic_name: string
    created_at: Date | null
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  type GetTenantsGroupByPayload<T extends tenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantsGroupByOutputType[P]>
        }
      >
    >


  export type tenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_name?: boolean
    created_at?: boolean
    audit_logs?: boolean | tenants$audit_logsArgs<ExtArgs>
    clinical_alerts?: boolean | tenants$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | tenants$triage_sessionsArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenants"]>

  export type tenantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tenants"]>

  export type tenantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tenants"]>

  export type tenantsSelectScalar = {
    id?: boolean
    clinic_name?: boolean
    created_at?: boolean
  }

  export type tenantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinic_name" | "created_at", ExtArgs["result"]["tenants"]>
  export type tenantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | tenants$audit_logsArgs<ExtArgs>
    clinical_alerts?: boolean | tenants$clinical_alertsArgs<ExtArgs>
    triage_sessions?: boolean | tenants$triage_sessionsArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tenantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tenantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tenantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenants"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      clinical_alerts: Prisma.$clinical_alertsPayload<ExtArgs>[]
      triage_sessions: Prisma.$triage_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinic_name: string
      created_at: Date | null
    }, ExtArgs["result"]["tenants"]>
    composites: {}
  }

  type tenantsGetPayload<S extends boolean | null | undefined | tenantsDefaultArgs> = $Result.GetResult<Prisma.$tenantsPayload, S>

  type tenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tenantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantsCountAggregateInputType | true
    }

  export interface tenantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenants'], meta: { name: 'tenants' } }
    /**
     * Find zero or one Tenants that matches the filter.
     * @param {tenantsFindUniqueArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenantsFindUniqueArgs>(args: SelectSubset<T, tenantsFindUniqueArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tenantsFindUniqueOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenantsFindUniqueOrThrowArgs>(args: SelectSubset<T, tenantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenantsFindFirstArgs>(args?: SelectSubset<T, tenantsFindFirstArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenantsFindFirstOrThrowArgs>(args?: SelectSubset<T, tenantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenants.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantsWithIdOnly = await prisma.tenants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tenantsFindManyArgs>(args?: SelectSubset<T, tenantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenants.
     * @param {tenantsCreateArgs} args - Arguments to create a Tenants.
     * @example
     * // Create one Tenants
     * const Tenants = await prisma.tenants.create({
     *   data: {
     *     // ... data to create a Tenants
     *   }
     * })
     * 
     */
    create<T extends tenantsCreateArgs>(args: SelectSubset<T, tenantsCreateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {tenantsCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenantsCreateManyArgs>(args?: SelectSubset<T, tenantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {tenantsCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantsWithIdOnly = await prisma.tenants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tenantsCreateManyAndReturnArgs>(args?: SelectSubset<T, tenantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenants.
     * @param {tenantsDeleteArgs} args - Arguments to delete one Tenants.
     * @example
     * // Delete one Tenants
     * const Tenants = await prisma.tenants.delete({
     *   where: {
     *     // ... filter to delete one Tenants
     *   }
     * })
     * 
     */
    delete<T extends tenantsDeleteArgs>(args: SelectSubset<T, tenantsDeleteArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenants.
     * @param {tenantsUpdateArgs} args - Arguments to update one Tenants.
     * @example
     * // Update one Tenants
     * const tenants = await prisma.tenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenantsUpdateArgs>(args: SelectSubset<T, tenantsUpdateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {tenantsDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenantsDeleteManyArgs>(args?: SelectSubset<T, tenantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenantsUpdateManyArgs>(args: SelectSubset<T, tenantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {tenantsUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantsWithIdOnly = await prisma.tenants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tenantsUpdateManyAndReturnArgs>(args: SelectSubset<T, tenantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenants.
     * @param {tenantsUpsertArgs} args - Arguments to update or create a Tenants.
     * @example
     * // Update or create a Tenants
     * const tenants = await prisma.tenants.upsert({
     *   create: {
     *     // ... data to create a Tenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenants we want to update
     *   }
     * })
     */
    upsert<T extends tenantsUpsertArgs>(args: SelectSubset<T, tenantsUpsertArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenants.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends tenantsCountArgs>(
      args?: Subset<T, tenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantsAggregateArgs>(args: Subset<T, TenantsAggregateArgs>): Prisma.PrismaPromise<GetTenantsAggregateType<T>>

    /**
     * Group by Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tenantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenantsGroupByArgs['orderBy'] }
        : { orderBy?: tenantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tenantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenants model
   */
  readonly fields: tenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends tenants$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, tenants$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clinical_alerts<T extends tenants$clinical_alertsArgs<ExtArgs> = {}>(args?: Subset<T, tenants$clinical_alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triage_sessions<T extends tenants$triage_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, tenants$triage_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tenants model
   */
  interface tenantsFieldRefs {
    readonly id: FieldRef<"tenants", 'String'>
    readonly clinic_name: FieldRef<"tenants", 'String'>
    readonly created_at: FieldRef<"tenants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tenants findUnique
   */
  export type tenantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findUniqueOrThrow
   */
  export type tenantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findFirst
   */
  export type tenantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findFirstOrThrow
   */
  export type tenantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findMany
   */
  export type tenantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants create
   */
  export type tenantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to create a tenants.
     */
    data: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
  }

  /**
   * tenants createMany
   */
  export type tenantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenants.
     */
    data: tenantsCreateManyInput | tenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenants createManyAndReturn
   */
  export type tenantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * The data used to create many tenants.
     */
    data: tenantsCreateManyInput | tenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenants update
   */
  export type tenantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to update a tenants.
     */
    data: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
    /**
     * Choose, which tenants to update.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants updateMany
   */
  export type tenantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenants.
     */
    data: XOR<tenantsUpdateManyMutationInput, tenantsUncheckedUpdateManyInput>
    /**
     * Filter which tenants to update
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to update.
     */
    limit?: number
  }

  /**
   * tenants updateManyAndReturn
   */
  export type tenantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * The data used to update tenants.
     */
    data: XOR<tenantsUpdateManyMutationInput, tenantsUncheckedUpdateManyInput>
    /**
     * Filter which tenants to update
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to update.
     */
    limit?: number
  }

  /**
   * tenants upsert
   */
  export type tenantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The filter to search for the tenants to update in case it exists.
     */
    where: tenantsWhereUniqueInput
    /**
     * In case the tenants found by the `where` argument doesn't exist, create a new tenants with this data.
     */
    create: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
    /**
     * In case the tenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
  }

  /**
   * tenants delete
   */
  export type tenantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter which tenants to delete.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants deleteMany
   */
  export type tenantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to delete
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to delete.
     */
    limit?: number
  }

  /**
   * tenants.audit_logs
   */
  export type tenants$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * tenants.clinical_alerts
   */
  export type tenants$clinical_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    where?: clinical_alertsWhereInput
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    cursor?: clinical_alertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Clinical_alertsScalarFieldEnum | Clinical_alertsScalarFieldEnum[]
  }

  /**
   * tenants.triage_sessions
   */
  export type tenants$triage_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    where?: triage_sessionsWhereInput
    orderBy?: triage_sessionsOrderByWithRelationInput | triage_sessionsOrderByWithRelationInput[]
    cursor?: triage_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Triage_sessionsScalarFieldEnum | Triage_sessionsScalarFieldEnum[]
  }

  /**
   * tenants without action
   */
  export type tenantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
  }


  /**
   * Model triage_sessions
   */

  export type AggregateTriage_sessions = {
    _count: Triage_sessionsCountAggregateOutputType | null
    _min: Triage_sessionsMinAggregateOutputType | null
    _max: Triage_sessionsMaxAggregateOutputType | null
  }

  export type Triage_sessionsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    patient_name: string | null
    intake_notes: string | null
    known_medications: string | null
    status: string | null
    resume_url: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Triage_sessionsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    patient_name: string | null
    intake_notes: string | null
    known_medications: string | null
    status: string | null
    resume_url: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Triage_sessionsCountAggregateOutputType = {
    id: number
    tenant_id: number
    patient_name: number
    intake_notes: number
    known_medications: number
    status: number
    resume_url: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Triage_sessionsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    patient_name?: true
    intake_notes?: true
    known_medications?: true
    status?: true
    resume_url?: true
    expires_at?: true
    created_at?: true
  }

  export type Triage_sessionsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    patient_name?: true
    intake_notes?: true
    known_medications?: true
    status?: true
    resume_url?: true
    expires_at?: true
    created_at?: true
  }

  export type Triage_sessionsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    patient_name?: true
    intake_notes?: true
    known_medications?: true
    status?: true
    resume_url?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Triage_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which triage_sessions to aggregate.
     */
    where?: triage_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triage_sessions to fetch.
     */
    orderBy?: triage_sessionsOrderByWithRelationInput | triage_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: triage_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triage_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triage_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned triage_sessions
    **/
    _count?: true | Triage_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Triage_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Triage_sessionsMaxAggregateInputType
  }

  export type GetTriage_sessionsAggregateType<T extends Triage_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTriage_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriage_sessions[P]>
      : GetScalarType<T[P], AggregateTriage_sessions[P]>
  }




  export type triage_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: triage_sessionsWhereInput
    orderBy?: triage_sessionsOrderByWithAggregationInput | triage_sessionsOrderByWithAggregationInput[]
    by: Triage_sessionsScalarFieldEnum[] | Triage_sessionsScalarFieldEnum
    having?: triage_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Triage_sessionsCountAggregateInputType | true
    _min?: Triage_sessionsMinAggregateInputType
    _max?: Triage_sessionsMaxAggregateInputType
  }

  export type Triage_sessionsGroupByOutputType = {
    id: string
    tenant_id: string
    patient_name: string
    intake_notes: string | null
    known_medications: string | null
    status: string | null
    resume_url: string | null
    expires_at: Date
    created_at: Date | null
    _count: Triage_sessionsCountAggregateOutputType | null
    _min: Triage_sessionsMinAggregateOutputType | null
    _max: Triage_sessionsMaxAggregateOutputType | null
  }

  type GetTriage_sessionsGroupByPayload<T extends triage_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Triage_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Triage_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Triage_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Triage_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type triage_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    patient_name?: boolean
    intake_notes?: boolean
    known_medications?: boolean
    status?: boolean
    resume_url?: boolean
    expires_at?: boolean
    created_at?: boolean
    audit_logs?: boolean | triage_sessions$audit_logsArgs<ExtArgs>
    clinical_alerts?: boolean | triage_sessions$clinical_alertsArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
    _count?: boolean | Triage_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage_sessions"]>

  export type triage_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    patient_name?: boolean
    intake_notes?: boolean
    known_medications?: boolean
    status?: boolean
    resume_url?: boolean
    expires_at?: boolean
    created_at?: boolean
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage_sessions"]>

  export type triage_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    patient_name?: boolean
    intake_notes?: boolean
    known_medications?: boolean
    status?: boolean
    resume_url?: boolean
    expires_at?: boolean
    created_at?: boolean
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage_sessions"]>

  export type triage_sessionsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    patient_name?: boolean
    intake_notes?: boolean
    known_medications?: boolean
    status?: boolean
    resume_url?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type triage_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "patient_name" | "intake_notes" | "known_medications" | "status" | "resume_url" | "expires_at" | "created_at", ExtArgs["result"]["triage_sessions"]>
  export type triage_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | triage_sessions$audit_logsArgs<ExtArgs>
    clinical_alerts?: boolean | triage_sessions$clinical_alertsArgs<ExtArgs>
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
    _count?: boolean | Triage_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type triage_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }
  export type triage_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | tenantsDefaultArgs<ExtArgs>
  }

  export type $triage_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "triage_sessions"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      clinical_alerts: Prisma.$clinical_alertsPayload<ExtArgs>[]
      tenants: Prisma.$tenantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      patient_name: string
      intake_notes: string | null
      known_medications: string | null
      status: string | null
      resume_url: string | null
      expires_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["triage_sessions"]>
    composites: {}
  }

  type triage_sessionsGetPayload<S extends boolean | null | undefined | triage_sessionsDefaultArgs> = $Result.GetResult<Prisma.$triage_sessionsPayload, S>

  type triage_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<triage_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Triage_sessionsCountAggregateInputType | true
    }

  export interface triage_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['triage_sessions'], meta: { name: 'triage_sessions' } }
    /**
     * Find zero or one Triage_sessions that matches the filter.
     * @param {triage_sessionsFindUniqueArgs} args - Arguments to find a Triage_sessions
     * @example
     * // Get one Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends triage_sessionsFindUniqueArgs>(args: SelectSubset<T, triage_sessionsFindUniqueArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Triage_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {triage_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Triage_sessions
     * @example
     * // Get one Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends triage_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, triage_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Triage_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsFindFirstArgs} args - Arguments to find a Triage_sessions
     * @example
     * // Get one Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends triage_sessionsFindFirstArgs>(args?: SelectSubset<T, triage_sessionsFindFirstArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Triage_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsFindFirstOrThrowArgs} args - Arguments to find a Triage_sessions
     * @example
     * // Get one Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends triage_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, triage_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triage_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findMany()
     * 
     * // Get first 10 Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triage_sessionsWithIdOnly = await prisma.triage_sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends triage_sessionsFindManyArgs>(args?: SelectSubset<T, triage_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Triage_sessions.
     * @param {triage_sessionsCreateArgs} args - Arguments to create a Triage_sessions.
     * @example
     * // Create one Triage_sessions
     * const Triage_sessions = await prisma.triage_sessions.create({
     *   data: {
     *     // ... data to create a Triage_sessions
     *   }
     * })
     * 
     */
    create<T extends triage_sessionsCreateArgs>(args: SelectSubset<T, triage_sessionsCreateArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triage_sessions.
     * @param {triage_sessionsCreateManyArgs} args - Arguments to create many Triage_sessions.
     * @example
     * // Create many Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends triage_sessionsCreateManyArgs>(args?: SelectSubset<T, triage_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triage_sessions and returns the data saved in the database.
     * @param {triage_sessionsCreateManyAndReturnArgs} args - Arguments to create many Triage_sessions.
     * @example
     * // Create many Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triage_sessions and only return the `id`
     * const triage_sessionsWithIdOnly = await prisma.triage_sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends triage_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, triage_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Triage_sessions.
     * @param {triage_sessionsDeleteArgs} args - Arguments to delete one Triage_sessions.
     * @example
     * // Delete one Triage_sessions
     * const Triage_sessions = await prisma.triage_sessions.delete({
     *   where: {
     *     // ... filter to delete one Triage_sessions
     *   }
     * })
     * 
     */
    delete<T extends triage_sessionsDeleteArgs>(args: SelectSubset<T, triage_sessionsDeleteArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Triage_sessions.
     * @param {triage_sessionsUpdateArgs} args - Arguments to update one Triage_sessions.
     * @example
     * // Update one Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends triage_sessionsUpdateArgs>(args: SelectSubset<T, triage_sessionsUpdateArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triage_sessions.
     * @param {triage_sessionsDeleteManyArgs} args - Arguments to filter Triage_sessions to delete.
     * @example
     * // Delete a few Triage_sessions
     * const { count } = await prisma.triage_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends triage_sessionsDeleteManyArgs>(args?: SelectSubset<T, triage_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triage_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends triage_sessionsUpdateManyArgs>(args: SelectSubset<T, triage_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triage_sessions and returns the data updated in the database.
     * @param {triage_sessionsUpdateManyAndReturnArgs} args - Arguments to update many Triage_sessions.
     * @example
     * // Update many Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triage_sessions and only return the `id`
     * const triage_sessionsWithIdOnly = await prisma.triage_sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends triage_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, triage_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Triage_sessions.
     * @param {triage_sessionsUpsertArgs} args - Arguments to update or create a Triage_sessions.
     * @example
     * // Update or create a Triage_sessions
     * const triage_sessions = await prisma.triage_sessions.upsert({
     *   create: {
     *     // ... data to create a Triage_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Triage_sessions we want to update
     *   }
     * })
     */
    upsert<T extends triage_sessionsUpsertArgs>(args: SelectSubset<T, triage_sessionsUpsertArgs<ExtArgs>>): Prisma__triage_sessionsClient<$Result.GetResult<Prisma.$triage_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triage_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsCountArgs} args - Arguments to filter Triage_sessions to count.
     * @example
     * // Count the number of Triage_sessions
     * const count = await prisma.triage_sessions.count({
     *   where: {
     *     // ... the filter for the Triage_sessions we want to count
     *   }
     * })
    **/
    count<T extends triage_sessionsCountArgs>(
      args?: Subset<T, triage_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Triage_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Triage_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Triage_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Triage_sessionsAggregateArgs>(args: Subset<T, Triage_sessionsAggregateArgs>): Prisma.PrismaPromise<GetTriage_sessionsAggregateType<T>>

    /**
     * Group by Triage_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triage_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends triage_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: triage_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: triage_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, triage_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriage_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the triage_sessions model
   */
  readonly fields: triage_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for triage_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__triage_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends triage_sessions$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, triage_sessions$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clinical_alerts<T extends triage_sessions$clinical_alertsArgs<ExtArgs> = {}>(args?: Subset<T, triage_sessions$clinical_alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinical_alertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenants<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the triage_sessions model
   */
  interface triage_sessionsFieldRefs {
    readonly id: FieldRef<"triage_sessions", 'String'>
    readonly tenant_id: FieldRef<"triage_sessions", 'String'>
    readonly patient_name: FieldRef<"triage_sessions", 'String'>
    readonly intake_notes: FieldRef<"triage_sessions", 'String'>
    readonly known_medications: FieldRef<"triage_sessions", 'String'>
    readonly status: FieldRef<"triage_sessions", 'String'>
    readonly resume_url: FieldRef<"triage_sessions", 'String'>
    readonly expires_at: FieldRef<"triage_sessions", 'DateTime'>
    readonly created_at: FieldRef<"triage_sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * triage_sessions findUnique
   */
  export type triage_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which triage_sessions to fetch.
     */
    where: triage_sessionsWhereUniqueInput
  }

  /**
   * triage_sessions findUniqueOrThrow
   */
  export type triage_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which triage_sessions to fetch.
     */
    where: triage_sessionsWhereUniqueInput
  }

  /**
   * triage_sessions findFirst
   */
  export type triage_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which triage_sessions to fetch.
     */
    where?: triage_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triage_sessions to fetch.
     */
    orderBy?: triage_sessionsOrderByWithRelationInput | triage_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for triage_sessions.
     */
    cursor?: triage_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triage_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triage_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of triage_sessions.
     */
    distinct?: Triage_sessionsScalarFieldEnum | Triage_sessionsScalarFieldEnum[]
  }

  /**
   * triage_sessions findFirstOrThrow
   */
  export type triage_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which triage_sessions to fetch.
     */
    where?: triage_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triage_sessions to fetch.
     */
    orderBy?: triage_sessionsOrderByWithRelationInput | triage_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for triage_sessions.
     */
    cursor?: triage_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triage_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triage_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of triage_sessions.
     */
    distinct?: Triage_sessionsScalarFieldEnum | Triage_sessionsScalarFieldEnum[]
  }

  /**
   * triage_sessions findMany
   */
  export type triage_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which triage_sessions to fetch.
     */
    where?: triage_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triage_sessions to fetch.
     */
    orderBy?: triage_sessionsOrderByWithRelationInput | triage_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing triage_sessions.
     */
    cursor?: triage_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triage_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triage_sessions.
     */
    skip?: number
    distinct?: Triage_sessionsScalarFieldEnum | Triage_sessionsScalarFieldEnum[]
  }

  /**
   * triage_sessions create
   */
  export type triage_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a triage_sessions.
     */
    data: XOR<triage_sessionsCreateInput, triage_sessionsUncheckedCreateInput>
  }

  /**
   * triage_sessions createMany
   */
  export type triage_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many triage_sessions.
     */
    data: triage_sessionsCreateManyInput | triage_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * triage_sessions createManyAndReturn
   */
  export type triage_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many triage_sessions.
     */
    data: triage_sessionsCreateManyInput | triage_sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * triage_sessions update
   */
  export type triage_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a triage_sessions.
     */
    data: XOR<triage_sessionsUpdateInput, triage_sessionsUncheckedUpdateInput>
    /**
     * Choose, which triage_sessions to update.
     */
    where: triage_sessionsWhereUniqueInput
  }

  /**
   * triage_sessions updateMany
   */
  export type triage_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update triage_sessions.
     */
    data: XOR<triage_sessionsUpdateManyMutationInput, triage_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which triage_sessions to update
     */
    where?: triage_sessionsWhereInput
    /**
     * Limit how many triage_sessions to update.
     */
    limit?: number
  }

  /**
   * triage_sessions updateManyAndReturn
   */
  export type triage_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update triage_sessions.
     */
    data: XOR<triage_sessionsUpdateManyMutationInput, triage_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which triage_sessions to update
     */
    where?: triage_sessionsWhereInput
    /**
     * Limit how many triage_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * triage_sessions upsert
   */
  export type triage_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the triage_sessions to update in case it exists.
     */
    where: triage_sessionsWhereUniqueInput
    /**
     * In case the triage_sessions found by the `where` argument doesn't exist, create a new triage_sessions with this data.
     */
    create: XOR<triage_sessionsCreateInput, triage_sessionsUncheckedCreateInput>
    /**
     * In case the triage_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<triage_sessionsUpdateInput, triage_sessionsUncheckedUpdateInput>
  }

  /**
   * triage_sessions delete
   */
  export type triage_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
    /**
     * Filter which triage_sessions to delete.
     */
    where: triage_sessionsWhereUniqueInput
  }

  /**
   * triage_sessions deleteMany
   */
  export type triage_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which triage_sessions to delete
     */
    where?: triage_sessionsWhereInput
    /**
     * Limit how many triage_sessions to delete.
     */
    limit?: number
  }

  /**
   * triage_sessions.audit_logs
   */
  export type triage_sessions$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * triage_sessions.clinical_alerts
   */
  export type triage_sessions$clinical_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinical_alerts
     */
    select?: clinical_alertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinical_alerts
     */
    omit?: clinical_alertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinical_alertsInclude<ExtArgs> | null
    where?: clinical_alertsWhereInput
    orderBy?: clinical_alertsOrderByWithRelationInput | clinical_alertsOrderByWithRelationInput[]
    cursor?: clinical_alertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Clinical_alertsScalarFieldEnum | Clinical_alertsScalarFieldEnum[]
  }

  /**
   * triage_sessions without action
   */
  export type triage_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage_sessions
     */
    select?: triage_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the triage_sessions
     */
    omit?: triage_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: triage_sessionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Agent_memoryScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    message: 'message',
    tenant_id: 'tenant_id'
  };

  export type Agent_memoryScalarFieldEnum = (typeof Agent_memoryScalarFieldEnum)[keyof typeof Agent_memoryScalarFieldEnum]


  export const Audit_logsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    session_id: 'session_id',
    alert_id: 'alert_id',
    physician_id: 'physician_id',
    action_taken: 'action_taken',
    override_justification: 'override_justification',
    ip_address: 'ip_address',
    timestamp: 'timestamp'
  };

  export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum]


  export const Clinic_guidelinesScalarFieldEnum: {
    id: 'id',
    text: 'text',
    metadata: 'metadata'
  };

  export type Clinic_guidelinesScalarFieldEnum = (typeof Clinic_guidelinesScalarFieldEnum)[keyof typeof Clinic_guidelinesScalarFieldEnum]


  export const Clinical_alertsScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    tenant_id: 'tenant_id',
    alert_type: 'alert_type',
    severity: 'severity',
    description: 'description',
    recommendation: 'recommendation',
    status: 'status',
    created_at: 'created_at'
  };

  export type Clinical_alertsScalarFieldEnum = (typeof Clinical_alertsScalarFieldEnum)[keyof typeof Clinical_alertsScalarFieldEnum]


  export const Patient_intakeScalarFieldEnum: {
    id: 'id',
    patient_status: 'patient_status',
    primary_concerns: 'primary_concerns',
    medications_noted: 'medications_noted',
    created_at: 'created_at'
  };

  export type Patient_intakeScalarFieldEnum = (typeof Patient_intakeScalarFieldEnum)[keyof typeof Patient_intakeScalarFieldEnum]


  export const TenantsScalarFieldEnum: {
    id: 'id',
    clinic_name: 'clinic_name',
    created_at: 'created_at'
  };

  export type TenantsScalarFieldEnum = (typeof TenantsScalarFieldEnum)[keyof typeof TenantsScalarFieldEnum]


  export const Triage_sessionsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    patient_name: 'patient_name',
    intake_notes: 'intake_notes',
    known_medications: 'known_medications',
    status: 'status',
    resume_url: 'resume_url',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Triage_sessionsScalarFieldEnum = (typeof Triage_sessionsScalarFieldEnum)[keyof typeof Triage_sessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type agent_memoryWhereInput = {
    AND?: agent_memoryWhereInput | agent_memoryWhereInput[]
    OR?: agent_memoryWhereInput[]
    NOT?: agent_memoryWhereInput | agent_memoryWhereInput[]
    id?: IntFilter<"agent_memory"> | number
    session_id?: StringFilter<"agent_memory"> | string
    message?: JsonFilter<"agent_memory">
    tenant_id?: StringNullableFilter<"agent_memory"> | string | null
  }

  export type agent_memoryOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
  }

  export type agent_memoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: agent_memoryWhereInput | agent_memoryWhereInput[]
    OR?: agent_memoryWhereInput[]
    NOT?: agent_memoryWhereInput | agent_memoryWhereInput[]
    session_id?: StringFilter<"agent_memory"> | string
    message?: JsonFilter<"agent_memory">
    tenant_id?: StringNullableFilter<"agent_memory"> | string | null
  }, "id">

  export type agent_memoryOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    _count?: agent_memoryCountOrderByAggregateInput
    _avg?: agent_memoryAvgOrderByAggregateInput
    _max?: agent_memoryMaxOrderByAggregateInput
    _min?: agent_memoryMinOrderByAggregateInput
    _sum?: agent_memorySumOrderByAggregateInput
  }

  export type agent_memoryScalarWhereWithAggregatesInput = {
    AND?: agent_memoryScalarWhereWithAggregatesInput | agent_memoryScalarWhereWithAggregatesInput[]
    OR?: agent_memoryScalarWhereWithAggregatesInput[]
    NOT?: agent_memoryScalarWhereWithAggregatesInput | agent_memoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"agent_memory"> | number
    session_id?: StringWithAggregatesFilter<"agent_memory"> | string
    message?: JsonWithAggregatesFilter<"agent_memory">
    tenant_id?: StringNullableWithAggregatesFilter<"agent_memory"> | string | null
  }

  export type audit_logsWhereInput = {
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    id?: UuidFilter<"audit_logs"> | string
    tenant_id?: UuidFilter<"audit_logs"> | string
    session_id?: UuidFilter<"audit_logs"> | string
    alert_id?: UuidNullableFilter<"audit_logs"> | string | null
    physician_id?: StringFilter<"audit_logs"> | string
    action_taken?: StringFilter<"audit_logs"> | string
    override_justification?: StringNullableFilter<"audit_logs"> | string | null
    ip_address?: StringNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    clinical_alerts?: XOR<Clinical_alertsNullableScalarRelationFilter, clinical_alertsWhereInput> | null
    triage_sessions?: XOR<Triage_sessionsScalarRelationFilter, triage_sessionsWhereInput>
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }

  export type audit_logsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    session_id?: SortOrder
    alert_id?: SortOrderInput | SortOrder
    physician_id?: SortOrder
    action_taken?: SortOrder
    override_justification?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    clinical_alerts?: clinical_alertsOrderByWithRelationInput
    triage_sessions?: triage_sessionsOrderByWithRelationInput
    tenants?: tenantsOrderByWithRelationInput
  }

  export type audit_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    tenant_id?: UuidFilter<"audit_logs"> | string
    session_id?: UuidFilter<"audit_logs"> | string
    alert_id?: UuidNullableFilter<"audit_logs"> | string | null
    physician_id?: StringFilter<"audit_logs"> | string
    action_taken?: StringFilter<"audit_logs"> | string
    override_justification?: StringNullableFilter<"audit_logs"> | string | null
    ip_address?: StringNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    clinical_alerts?: XOR<Clinical_alertsNullableScalarRelationFilter, clinical_alertsWhereInput> | null
    triage_sessions?: XOR<Triage_sessionsScalarRelationFilter, triage_sessionsWhereInput>
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }, "id">

  export type audit_logsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    session_id?: SortOrder
    alert_id?: SortOrderInput | SortOrder
    physician_id?: SortOrder
    action_taken?: SortOrder
    override_justification?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: audit_logsCountOrderByAggregateInput
    _max?: audit_logsMaxOrderByAggregateInput
    _min?: audit_logsMinOrderByAggregateInput
  }

  export type audit_logsScalarWhereWithAggregatesInput = {
    AND?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    OR?: audit_logsScalarWhereWithAggregatesInput[]
    NOT?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"audit_logs"> | string
    tenant_id?: UuidWithAggregatesFilter<"audit_logs"> | string
    session_id?: UuidWithAggregatesFilter<"audit_logs"> | string
    alert_id?: UuidNullableWithAggregatesFilter<"audit_logs"> | string | null
    physician_id?: StringWithAggregatesFilter<"audit_logs"> | string
    action_taken?: StringWithAggregatesFilter<"audit_logs"> | string
    override_justification?: StringNullableWithAggregatesFilter<"audit_logs"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"audit_logs"> | Date | string | null
  }

  export type clinic_guidelinesWhereInput = {
    AND?: clinic_guidelinesWhereInput | clinic_guidelinesWhereInput[]
    OR?: clinic_guidelinesWhereInput[]
    NOT?: clinic_guidelinesWhereInput | clinic_guidelinesWhereInput[]
    id?: UuidFilter<"clinic_guidelines"> | string
    text?: StringNullableFilter<"clinic_guidelines"> | string | null
    metadata?: JsonNullableFilter<"clinic_guidelines">
  }

  export type clinic_guidelinesOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
  }

  export type clinic_guidelinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: clinic_guidelinesWhereInput | clinic_guidelinesWhereInput[]
    OR?: clinic_guidelinesWhereInput[]
    NOT?: clinic_guidelinesWhereInput | clinic_guidelinesWhereInput[]
    text?: StringNullableFilter<"clinic_guidelines"> | string | null
    metadata?: JsonNullableFilter<"clinic_guidelines">
  }, "id">

  export type clinic_guidelinesOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: clinic_guidelinesCountOrderByAggregateInput
    _max?: clinic_guidelinesMaxOrderByAggregateInput
    _min?: clinic_guidelinesMinOrderByAggregateInput
  }

  export type clinic_guidelinesScalarWhereWithAggregatesInput = {
    AND?: clinic_guidelinesScalarWhereWithAggregatesInput | clinic_guidelinesScalarWhereWithAggregatesInput[]
    OR?: clinic_guidelinesScalarWhereWithAggregatesInput[]
    NOT?: clinic_guidelinesScalarWhereWithAggregatesInput | clinic_guidelinesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"clinic_guidelines"> | string
    text?: StringNullableWithAggregatesFilter<"clinic_guidelines"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"clinic_guidelines">
  }

  export type clinical_alertsWhereInput = {
    AND?: clinical_alertsWhereInput | clinical_alertsWhereInput[]
    OR?: clinical_alertsWhereInput[]
    NOT?: clinical_alertsWhereInput | clinical_alertsWhereInput[]
    id?: UuidFilter<"clinical_alerts"> | string
    session_id?: UuidFilter<"clinical_alerts"> | string
    tenant_id?: UuidFilter<"clinical_alerts"> | string
    alert_type?: StringFilter<"clinical_alerts"> | string
    severity?: StringFilter<"clinical_alerts"> | string
    description?: StringFilter<"clinical_alerts"> | string
    recommendation?: StringFilter<"clinical_alerts"> | string
    status?: StringNullableFilter<"clinical_alerts"> | string | null
    created_at?: DateTimeNullableFilter<"clinical_alerts"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    triage_sessions?: XOR<Triage_sessionsScalarRelationFilter, triage_sessionsWhereInput>
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }

  export type clinical_alertsOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
    alert_type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    triage_sessions?: triage_sessionsOrderByWithRelationInput
    tenants?: tenantsOrderByWithRelationInput
  }

  export type clinical_alertsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: clinical_alertsWhereInput | clinical_alertsWhereInput[]
    OR?: clinical_alertsWhereInput[]
    NOT?: clinical_alertsWhereInput | clinical_alertsWhereInput[]
    session_id?: UuidFilter<"clinical_alerts"> | string
    tenant_id?: UuidFilter<"clinical_alerts"> | string
    alert_type?: StringFilter<"clinical_alerts"> | string
    severity?: StringFilter<"clinical_alerts"> | string
    description?: StringFilter<"clinical_alerts"> | string
    recommendation?: StringFilter<"clinical_alerts"> | string
    status?: StringNullableFilter<"clinical_alerts"> | string | null
    created_at?: DateTimeNullableFilter<"clinical_alerts"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    triage_sessions?: XOR<Triage_sessionsScalarRelationFilter, triage_sessionsWhereInput>
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }, "id">

  export type clinical_alertsOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
    alert_type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: clinical_alertsCountOrderByAggregateInput
    _max?: clinical_alertsMaxOrderByAggregateInput
    _min?: clinical_alertsMinOrderByAggregateInput
  }

  export type clinical_alertsScalarWhereWithAggregatesInput = {
    AND?: clinical_alertsScalarWhereWithAggregatesInput | clinical_alertsScalarWhereWithAggregatesInput[]
    OR?: clinical_alertsScalarWhereWithAggregatesInput[]
    NOT?: clinical_alertsScalarWhereWithAggregatesInput | clinical_alertsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"clinical_alerts"> | string
    session_id?: UuidWithAggregatesFilter<"clinical_alerts"> | string
    tenant_id?: UuidWithAggregatesFilter<"clinical_alerts"> | string
    alert_type?: StringWithAggregatesFilter<"clinical_alerts"> | string
    severity?: StringWithAggregatesFilter<"clinical_alerts"> | string
    description?: StringWithAggregatesFilter<"clinical_alerts"> | string
    recommendation?: StringWithAggregatesFilter<"clinical_alerts"> | string
    status?: StringNullableWithAggregatesFilter<"clinical_alerts"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"clinical_alerts"> | Date | string | null
  }

  export type patient_intakeWhereInput = {
    AND?: patient_intakeWhereInput | patient_intakeWhereInput[]
    OR?: patient_intakeWhereInput[]
    NOT?: patient_intakeWhereInput | patient_intakeWhereInput[]
    id?: IntFilter<"patient_intake"> | number
    patient_status?: StringNullableFilter<"patient_intake"> | string | null
    primary_concerns?: JsonNullableFilter<"patient_intake">
    medications_noted?: JsonNullableFilter<"patient_intake">
    created_at?: DateTimeNullableFilter<"patient_intake"> | Date | string | null
  }

  export type patient_intakeOrderByWithRelationInput = {
    id?: SortOrder
    patient_status?: SortOrderInput | SortOrder
    primary_concerns?: SortOrderInput | SortOrder
    medications_noted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type patient_intakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: patient_intakeWhereInput | patient_intakeWhereInput[]
    OR?: patient_intakeWhereInput[]
    NOT?: patient_intakeWhereInput | patient_intakeWhereInput[]
    patient_status?: StringNullableFilter<"patient_intake"> | string | null
    primary_concerns?: JsonNullableFilter<"patient_intake">
    medications_noted?: JsonNullableFilter<"patient_intake">
    created_at?: DateTimeNullableFilter<"patient_intake"> | Date | string | null
  }, "id">

  export type patient_intakeOrderByWithAggregationInput = {
    id?: SortOrder
    patient_status?: SortOrderInput | SortOrder
    primary_concerns?: SortOrderInput | SortOrder
    medications_noted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: patient_intakeCountOrderByAggregateInput
    _avg?: patient_intakeAvgOrderByAggregateInput
    _max?: patient_intakeMaxOrderByAggregateInput
    _min?: patient_intakeMinOrderByAggregateInput
    _sum?: patient_intakeSumOrderByAggregateInput
  }

  export type patient_intakeScalarWhereWithAggregatesInput = {
    AND?: patient_intakeScalarWhereWithAggregatesInput | patient_intakeScalarWhereWithAggregatesInput[]
    OR?: patient_intakeScalarWhereWithAggregatesInput[]
    NOT?: patient_intakeScalarWhereWithAggregatesInput | patient_intakeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patient_intake"> | number
    patient_status?: StringNullableWithAggregatesFilter<"patient_intake"> | string | null
    primary_concerns?: JsonNullableWithAggregatesFilter<"patient_intake">
    medications_noted?: JsonNullableWithAggregatesFilter<"patient_intake">
    created_at?: DateTimeNullableWithAggregatesFilter<"patient_intake"> | Date | string | null
  }

  export type tenantsWhereInput = {
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    id?: UuidFilter<"tenants"> | string
    clinic_name?: StringFilter<"tenants"> | string
    created_at?: DateTimeNullableFilter<"tenants"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    clinical_alerts?: Clinical_alertsListRelationFilter
    triage_sessions?: Triage_sessionsListRelationFilter
  }

  export type tenantsOrderByWithRelationInput = {
    id?: SortOrder
    clinic_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    clinical_alerts?: clinical_alertsOrderByRelationAggregateInput
    triage_sessions?: triage_sessionsOrderByRelationAggregateInput
  }

  export type tenantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    clinic_name?: StringFilter<"tenants"> | string
    created_at?: DateTimeNullableFilter<"tenants"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    clinical_alerts?: Clinical_alertsListRelationFilter
    triage_sessions?: Triage_sessionsListRelationFilter
  }, "id">

  export type tenantsOrderByWithAggregationInput = {
    id?: SortOrder
    clinic_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tenantsCountOrderByAggregateInput
    _max?: tenantsMaxOrderByAggregateInput
    _min?: tenantsMinOrderByAggregateInput
  }

  export type tenantsScalarWhereWithAggregatesInput = {
    AND?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    OR?: tenantsScalarWhereWithAggregatesInput[]
    NOT?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tenants"> | string
    clinic_name?: StringWithAggregatesFilter<"tenants"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"tenants"> | Date | string | null
  }

  export type triage_sessionsWhereInput = {
    AND?: triage_sessionsWhereInput | triage_sessionsWhereInput[]
    OR?: triage_sessionsWhereInput[]
    NOT?: triage_sessionsWhereInput | triage_sessionsWhereInput[]
    id?: UuidFilter<"triage_sessions"> | string
    tenant_id?: UuidFilter<"triage_sessions"> | string
    patient_name?: StringFilter<"triage_sessions"> | string
    intake_notes?: StringNullableFilter<"triage_sessions"> | string | null
    known_medications?: StringNullableFilter<"triage_sessions"> | string | null
    status?: StringNullableFilter<"triage_sessions"> | string | null
    resume_url?: StringNullableFilter<"triage_sessions"> | string | null
    expires_at?: DateTimeFilter<"triage_sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"triage_sessions"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    clinical_alerts?: Clinical_alertsListRelationFilter
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }

  export type triage_sessionsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    patient_name?: SortOrder
    intake_notes?: SortOrderInput | SortOrder
    known_medications?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    clinical_alerts?: clinical_alertsOrderByRelationAggregateInput
    tenants?: tenantsOrderByWithRelationInput
  }

  export type triage_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: triage_sessionsWhereInput | triage_sessionsWhereInput[]
    OR?: triage_sessionsWhereInput[]
    NOT?: triage_sessionsWhereInput | triage_sessionsWhereInput[]
    tenant_id?: UuidFilter<"triage_sessions"> | string
    patient_name?: StringFilter<"triage_sessions"> | string
    intake_notes?: StringNullableFilter<"triage_sessions"> | string | null
    known_medications?: StringNullableFilter<"triage_sessions"> | string | null
    status?: StringNullableFilter<"triage_sessions"> | string | null
    resume_url?: StringNullableFilter<"triage_sessions"> | string | null
    expires_at?: DateTimeFilter<"triage_sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"triage_sessions"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    clinical_alerts?: Clinical_alertsListRelationFilter
    tenants?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }, "id">

  export type triage_sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    patient_name?: SortOrder
    intake_notes?: SortOrderInput | SortOrder
    known_medications?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: triage_sessionsCountOrderByAggregateInput
    _max?: triage_sessionsMaxOrderByAggregateInput
    _min?: triage_sessionsMinOrderByAggregateInput
  }

  export type triage_sessionsScalarWhereWithAggregatesInput = {
    AND?: triage_sessionsScalarWhereWithAggregatesInput | triage_sessionsScalarWhereWithAggregatesInput[]
    OR?: triage_sessionsScalarWhereWithAggregatesInput[]
    NOT?: triage_sessionsScalarWhereWithAggregatesInput | triage_sessionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"triage_sessions"> | string
    tenant_id?: UuidWithAggregatesFilter<"triage_sessions"> | string
    patient_name?: StringWithAggregatesFilter<"triage_sessions"> | string
    intake_notes?: StringNullableWithAggregatesFilter<"triage_sessions"> | string | null
    known_medications?: StringNullableWithAggregatesFilter<"triage_sessions"> | string | null
    status?: StringNullableWithAggregatesFilter<"triage_sessions"> | string | null
    resume_url?: StringNullableWithAggregatesFilter<"triage_sessions"> | string | null
    expires_at?: DateTimeWithAggregatesFilter<"triage_sessions"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"triage_sessions"> | Date | string | null
  }

  export type agent_memoryCreateInput = {
    session_id: string
    message: JsonNullValueInput | InputJsonValue
    tenant_id?: string | null
  }

  export type agent_memoryUncheckedCreateInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
    tenant_id?: string | null
  }

  export type agent_memoryUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agent_memoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agent_memoryCreateManyInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
    tenant_id?: string | null
  }

  export type agent_memoryUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agent_memoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_logsCreateInput = {
    id?: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
    clinical_alerts?: clinical_alertsCreateNestedOneWithoutAudit_logsInput
    triage_sessions: triage_sessionsCreateNestedOneWithoutAudit_logsInput
    tenants: tenantsCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    session_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUpdateOneWithoutAudit_logsNestedInput
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutAudit_logsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsCreateManyInput = {
    id?: string
    tenant_id: string
    session_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clinic_guidelinesCreateInput = {
    id?: string
    text?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesUncheckedCreateInput = {
    id?: string
    text?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesCreateManyInput = {
    id?: string
    text?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinic_guidelinesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type clinical_alertsCreateInput = {
    id?: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutClinical_alertsInput
    triage_sessions: triage_sessionsCreateNestedOneWithoutClinical_alertsInput
    tenants: tenantsCreateNestedOneWithoutClinical_alertsInput
  }

  export type clinical_alertsUncheckedCreateInput = {
    id?: string
    session_id: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutClinical_alertsInput
  }

  export type clinical_alertsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutClinical_alertsNestedInput
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutClinical_alertsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsCreateManyInput = {
    id?: string
    session_id: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
  }

  export type clinical_alertsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clinical_alertsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patient_intakeCreateInput = {
    patient_status?: string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type patient_intakeUncheckedCreateInput = {
    id?: number
    patient_status?: string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type patient_intakeUpdateInput = {
    patient_status?: NullableStringFieldUpdateOperationsInput | string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patient_intakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_status?: NullableStringFieldUpdateOperationsInput | string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patient_intakeCreateManyInput = {
    id?: number
    patient_status?: string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type patient_intakeUpdateManyMutationInput = {
    patient_status?: NullableStringFieldUpdateOperationsInput | string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patient_intakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_status?: NullableStringFieldUpdateOperationsInput | string | null
    primary_concerns?: NullableJsonNullValueInput | InputJsonValue
    medications_noted?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tenantsCreateInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTenantsInput
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsCreateNestedManyWithoutTenantsInput
  }

  export type tenantsUncheckedCreateInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTenantsInput
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type tenantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTenantsNestedInput
    clinical_alerts?: clinical_alertsUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUpdateManyWithoutTenantsNestedInput
  }

  export type tenantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTenantsNestedInput
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type tenantsCreateManyInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
  }

  export type tenantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tenantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type triage_sessionsCreateInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTriage_sessionsInput
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTriage_sessionsInput
    tenants: tenantsCreateNestedOneWithoutTriage_sessionsInput
  }

  export type triage_sessionsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTriage_sessionsInput
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTriage_sessionsInput
  }

  export type triage_sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTriage_sessionsNestedInput
    clinical_alerts?: clinical_alertsUpdateManyWithoutTriage_sessionsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsCreateManyInput = {
    id?: string
    tenant_id: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type triage_sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type triage_sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agent_memoryCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
    tenant_id?: SortOrder
  }

  export type agent_memoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type agent_memoryMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
  }

  export type agent_memoryMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
  }

  export type agent_memorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Clinical_alertsNullableScalarRelationFilter = {
    is?: clinical_alertsWhereInput | null
    isNot?: clinical_alertsWhereInput | null
  }

  export type Triage_sessionsScalarRelationFilter = {
    is?: triage_sessionsWhereInput
    isNot?: triage_sessionsWhereInput
  }

  export type TenantsScalarRelationFilter = {
    is?: tenantsWhereInput
    isNot?: tenantsWhereInput
  }

  export type audit_logsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    session_id?: SortOrder
    alert_id?: SortOrder
    physician_id?: SortOrder
    action_taken?: SortOrder
    override_justification?: SortOrder
    ip_address?: SortOrder
    timestamp?: SortOrder
  }

  export type audit_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    session_id?: SortOrder
    alert_id?: SortOrder
    physician_id?: SortOrder
    action_taken?: SortOrder
    override_justification?: SortOrder
    ip_address?: SortOrder
    timestamp?: SortOrder
  }

  export type audit_logsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    session_id?: SortOrder
    alert_id?: SortOrder
    physician_id?: SortOrder
    action_taken?: SortOrder
    override_justification?: SortOrder
    ip_address?: SortOrder
    timestamp?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type clinic_guidelinesCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
  }

  export type clinic_guidelinesMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type clinic_guidelinesMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Audit_logsListRelationFilter = {
    every?: audit_logsWhereInput
    some?: audit_logsWhereInput
    none?: audit_logsWhereInput
  }

  export type audit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clinical_alertsCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
    alert_type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type clinical_alertsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
    alert_type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type clinical_alertsMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    tenant_id?: SortOrder
    alert_type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type patient_intakeCountOrderByAggregateInput = {
    id?: SortOrder
    patient_status?: SortOrder
    primary_concerns?: SortOrder
    medications_noted?: SortOrder
    created_at?: SortOrder
  }

  export type patient_intakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type patient_intakeMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_status?: SortOrder
    created_at?: SortOrder
  }

  export type patient_intakeMinOrderByAggregateInput = {
    id?: SortOrder
    patient_status?: SortOrder
    created_at?: SortOrder
  }

  export type patient_intakeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Clinical_alertsListRelationFilter = {
    every?: clinical_alertsWhereInput
    some?: clinical_alertsWhereInput
    none?: clinical_alertsWhereInput
  }

  export type Triage_sessionsListRelationFilter = {
    every?: triage_sessionsWhereInput
    some?: triage_sessionsWhereInput
    none?: triage_sessionsWhereInput
  }

  export type clinical_alertsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type triage_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tenantsCountOrderByAggregateInput = {
    id?: SortOrder
    clinic_name?: SortOrder
    created_at?: SortOrder
  }

  export type tenantsMaxOrderByAggregateInput = {
    id?: SortOrder
    clinic_name?: SortOrder
    created_at?: SortOrder
  }

  export type tenantsMinOrderByAggregateInput = {
    id?: SortOrder
    clinic_name?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type triage_sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    patient_name?: SortOrder
    intake_notes?: SortOrder
    known_medications?: SortOrder
    status?: SortOrder
    resume_url?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type triage_sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    patient_name?: SortOrder
    intake_notes?: SortOrder
    known_medications?: SortOrder
    status?: SortOrder
    resume_url?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type triage_sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    patient_name?: SortOrder
    intake_notes?: SortOrder
    known_medications?: SortOrder
    status?: SortOrder
    resume_url?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clinical_alertsCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<clinical_alertsCreateWithoutAudit_logsInput, clinical_alertsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutAudit_logsInput
    connect?: clinical_alertsWhereUniqueInput
  }

  export type triage_sessionsCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<triage_sessionsCreateWithoutAudit_logsInput, triage_sessionsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutAudit_logsInput
    connect?: triage_sessionsWhereUniqueInput
  }

  export type tenantsCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<tenantsCreateWithoutAudit_logsInput, tenantsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutAudit_logsInput
    connect?: tenantsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clinical_alertsUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<clinical_alertsCreateWithoutAudit_logsInput, clinical_alertsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutAudit_logsInput
    upsert?: clinical_alertsUpsertWithoutAudit_logsInput
    disconnect?: clinical_alertsWhereInput | boolean
    delete?: clinical_alertsWhereInput | boolean
    connect?: clinical_alertsWhereUniqueInput
    update?: XOR<XOR<clinical_alertsUpdateToOneWithWhereWithoutAudit_logsInput, clinical_alertsUpdateWithoutAudit_logsInput>, clinical_alertsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type triage_sessionsUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<triage_sessionsCreateWithoutAudit_logsInput, triage_sessionsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutAudit_logsInput
    upsert?: triage_sessionsUpsertWithoutAudit_logsInput
    connect?: triage_sessionsWhereUniqueInput
    update?: XOR<XOR<triage_sessionsUpdateToOneWithWhereWithoutAudit_logsInput, triage_sessionsUpdateWithoutAudit_logsInput>, triage_sessionsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type tenantsUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<tenantsCreateWithoutAudit_logsInput, tenantsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutAudit_logsInput
    upsert?: tenantsUpsertWithoutAudit_logsInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutAudit_logsInput, tenantsUpdateWithoutAudit_logsInput>, tenantsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type audit_logsCreateNestedManyWithoutClinical_alertsInput = {
    create?: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput> | audit_logsCreateWithoutClinical_alertsInput[] | audit_logsUncheckedCreateWithoutClinical_alertsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutClinical_alertsInput | audit_logsCreateOrConnectWithoutClinical_alertsInput[]
    createMany?: audit_logsCreateManyClinical_alertsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type triage_sessionsCreateNestedOneWithoutClinical_alertsInput = {
    create?: XOR<triage_sessionsCreateWithoutClinical_alertsInput, triage_sessionsUncheckedCreateWithoutClinical_alertsInput>
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutClinical_alertsInput
    connect?: triage_sessionsWhereUniqueInput
  }

  export type tenantsCreateNestedOneWithoutClinical_alertsInput = {
    create?: XOR<tenantsCreateWithoutClinical_alertsInput, tenantsUncheckedCreateWithoutClinical_alertsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutClinical_alertsInput
    connect?: tenantsWhereUniqueInput
  }

  export type audit_logsUncheckedCreateNestedManyWithoutClinical_alertsInput = {
    create?: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput> | audit_logsCreateWithoutClinical_alertsInput[] | audit_logsUncheckedCreateWithoutClinical_alertsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutClinical_alertsInput | audit_logsCreateOrConnectWithoutClinical_alertsInput[]
    createMany?: audit_logsCreateManyClinical_alertsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type audit_logsUpdateManyWithoutClinical_alertsNestedInput = {
    create?: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput> | audit_logsCreateWithoutClinical_alertsInput[] | audit_logsUncheckedCreateWithoutClinical_alertsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutClinical_alertsInput | audit_logsCreateOrConnectWithoutClinical_alertsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutClinical_alertsInput | audit_logsUpsertWithWhereUniqueWithoutClinical_alertsInput[]
    createMany?: audit_logsCreateManyClinical_alertsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutClinical_alertsInput | audit_logsUpdateWithWhereUniqueWithoutClinical_alertsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutClinical_alertsInput | audit_logsUpdateManyWithWhereWithoutClinical_alertsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type triage_sessionsUpdateOneRequiredWithoutClinical_alertsNestedInput = {
    create?: XOR<triage_sessionsCreateWithoutClinical_alertsInput, triage_sessionsUncheckedCreateWithoutClinical_alertsInput>
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutClinical_alertsInput
    upsert?: triage_sessionsUpsertWithoutClinical_alertsInput
    connect?: triage_sessionsWhereUniqueInput
    update?: XOR<XOR<triage_sessionsUpdateToOneWithWhereWithoutClinical_alertsInput, triage_sessionsUpdateWithoutClinical_alertsInput>, triage_sessionsUncheckedUpdateWithoutClinical_alertsInput>
  }

  export type tenantsUpdateOneRequiredWithoutClinical_alertsNestedInput = {
    create?: XOR<tenantsCreateWithoutClinical_alertsInput, tenantsUncheckedCreateWithoutClinical_alertsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutClinical_alertsInput
    upsert?: tenantsUpsertWithoutClinical_alertsInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutClinical_alertsInput, tenantsUpdateWithoutClinical_alertsInput>, tenantsUncheckedUpdateWithoutClinical_alertsInput>
  }

  export type audit_logsUncheckedUpdateManyWithoutClinical_alertsNestedInput = {
    create?: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput> | audit_logsCreateWithoutClinical_alertsInput[] | audit_logsUncheckedCreateWithoutClinical_alertsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutClinical_alertsInput | audit_logsCreateOrConnectWithoutClinical_alertsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutClinical_alertsInput | audit_logsUpsertWithWhereUniqueWithoutClinical_alertsInput[]
    createMany?: audit_logsCreateManyClinical_alertsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutClinical_alertsInput | audit_logsUpdateWithWhereUniqueWithoutClinical_alertsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutClinical_alertsInput | audit_logsUpdateManyWithWhereWithoutClinical_alertsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type audit_logsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput> | audit_logsCreateWithoutTenantsInput[] | audit_logsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTenantsInput | audit_logsCreateOrConnectWithoutTenantsInput[]
    createMany?: audit_logsCreateManyTenantsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type clinical_alertsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput> | clinical_alertsCreateWithoutTenantsInput[] | clinical_alertsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTenantsInput | clinical_alertsCreateOrConnectWithoutTenantsInput[]
    createMany?: clinical_alertsCreateManyTenantsInputEnvelope
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
  }

  export type triage_sessionsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput> | triage_sessionsCreateWithoutTenantsInput[] | triage_sessionsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutTenantsInput | triage_sessionsCreateOrConnectWithoutTenantsInput[]
    createMany?: triage_sessionsCreateManyTenantsInputEnvelope
    connect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
  }

  export type audit_logsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput> | audit_logsCreateWithoutTenantsInput[] | audit_logsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTenantsInput | audit_logsCreateOrConnectWithoutTenantsInput[]
    createMany?: audit_logsCreateManyTenantsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type clinical_alertsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput> | clinical_alertsCreateWithoutTenantsInput[] | clinical_alertsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTenantsInput | clinical_alertsCreateOrConnectWithoutTenantsInput[]
    createMany?: clinical_alertsCreateManyTenantsInputEnvelope
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
  }

  export type triage_sessionsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput> | triage_sessionsCreateWithoutTenantsInput[] | triage_sessionsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutTenantsInput | triage_sessionsCreateOrConnectWithoutTenantsInput[]
    createMany?: triage_sessionsCreateManyTenantsInputEnvelope
    connect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
  }

  export type audit_logsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput> | audit_logsCreateWithoutTenantsInput[] | audit_logsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTenantsInput | audit_logsCreateOrConnectWithoutTenantsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutTenantsInput | audit_logsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: audit_logsCreateManyTenantsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutTenantsInput | audit_logsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutTenantsInput | audit_logsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type clinical_alertsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput> | clinical_alertsCreateWithoutTenantsInput[] | clinical_alertsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTenantsInput | clinical_alertsCreateOrConnectWithoutTenantsInput[]
    upsert?: clinical_alertsUpsertWithWhereUniqueWithoutTenantsInput | clinical_alertsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: clinical_alertsCreateManyTenantsInputEnvelope
    set?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    disconnect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    delete?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    update?: clinical_alertsUpdateWithWhereUniqueWithoutTenantsInput | clinical_alertsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: clinical_alertsUpdateManyWithWhereWithoutTenantsInput | clinical_alertsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
  }

  export type triage_sessionsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput> | triage_sessionsCreateWithoutTenantsInput[] | triage_sessionsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutTenantsInput | triage_sessionsCreateOrConnectWithoutTenantsInput[]
    upsert?: triage_sessionsUpsertWithWhereUniqueWithoutTenantsInput | triage_sessionsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: triage_sessionsCreateManyTenantsInputEnvelope
    set?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    disconnect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    delete?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    connect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    update?: triage_sessionsUpdateWithWhereUniqueWithoutTenantsInput | triage_sessionsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: triage_sessionsUpdateManyWithWhereWithoutTenantsInput | triage_sessionsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: triage_sessionsScalarWhereInput | triage_sessionsScalarWhereInput[]
  }

  export type audit_logsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput> | audit_logsCreateWithoutTenantsInput[] | audit_logsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTenantsInput | audit_logsCreateOrConnectWithoutTenantsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutTenantsInput | audit_logsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: audit_logsCreateManyTenantsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutTenantsInput | audit_logsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutTenantsInput | audit_logsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type clinical_alertsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput> | clinical_alertsCreateWithoutTenantsInput[] | clinical_alertsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTenantsInput | clinical_alertsCreateOrConnectWithoutTenantsInput[]
    upsert?: clinical_alertsUpsertWithWhereUniqueWithoutTenantsInput | clinical_alertsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: clinical_alertsCreateManyTenantsInputEnvelope
    set?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    disconnect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    delete?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    update?: clinical_alertsUpdateWithWhereUniqueWithoutTenantsInput | clinical_alertsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: clinical_alertsUpdateManyWithWhereWithoutTenantsInput | clinical_alertsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
  }

  export type triage_sessionsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput> | triage_sessionsCreateWithoutTenantsInput[] | triage_sessionsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: triage_sessionsCreateOrConnectWithoutTenantsInput | triage_sessionsCreateOrConnectWithoutTenantsInput[]
    upsert?: triage_sessionsUpsertWithWhereUniqueWithoutTenantsInput | triage_sessionsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: triage_sessionsCreateManyTenantsInputEnvelope
    set?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    disconnect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    delete?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    connect?: triage_sessionsWhereUniqueInput | triage_sessionsWhereUniqueInput[]
    update?: triage_sessionsUpdateWithWhereUniqueWithoutTenantsInput | triage_sessionsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: triage_sessionsUpdateManyWithWhereWithoutTenantsInput | triage_sessionsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: triage_sessionsScalarWhereInput | triage_sessionsScalarWhereInput[]
  }

  export type audit_logsCreateNestedManyWithoutTriage_sessionsInput = {
    create?: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput> | audit_logsCreateWithoutTriage_sessionsInput[] | audit_logsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTriage_sessionsInput | audit_logsCreateOrConnectWithoutTriage_sessionsInput[]
    createMany?: audit_logsCreateManyTriage_sessionsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type clinical_alertsCreateNestedManyWithoutTriage_sessionsInput = {
    create?: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput> | clinical_alertsCreateWithoutTriage_sessionsInput[] | clinical_alertsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTriage_sessionsInput | clinical_alertsCreateOrConnectWithoutTriage_sessionsInput[]
    createMany?: clinical_alertsCreateManyTriage_sessionsInputEnvelope
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
  }

  export type tenantsCreateNestedOneWithoutTriage_sessionsInput = {
    create?: XOR<tenantsCreateWithoutTriage_sessionsInput, tenantsUncheckedCreateWithoutTriage_sessionsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutTriage_sessionsInput
    connect?: tenantsWhereUniqueInput
  }

  export type audit_logsUncheckedCreateNestedManyWithoutTriage_sessionsInput = {
    create?: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput> | audit_logsCreateWithoutTriage_sessionsInput[] | audit_logsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTriage_sessionsInput | audit_logsCreateOrConnectWithoutTriage_sessionsInput[]
    createMany?: audit_logsCreateManyTriage_sessionsInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type clinical_alertsUncheckedCreateNestedManyWithoutTriage_sessionsInput = {
    create?: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput> | clinical_alertsCreateWithoutTriage_sessionsInput[] | clinical_alertsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTriage_sessionsInput | clinical_alertsCreateOrConnectWithoutTriage_sessionsInput[]
    createMany?: clinical_alertsCreateManyTriage_sessionsInputEnvelope
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type audit_logsUpdateManyWithoutTriage_sessionsNestedInput = {
    create?: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput> | audit_logsCreateWithoutTriage_sessionsInput[] | audit_logsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTriage_sessionsInput | audit_logsCreateOrConnectWithoutTriage_sessionsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutTriage_sessionsInput | audit_logsUpsertWithWhereUniqueWithoutTriage_sessionsInput[]
    createMany?: audit_logsCreateManyTriage_sessionsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutTriage_sessionsInput | audit_logsUpdateWithWhereUniqueWithoutTriage_sessionsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutTriage_sessionsInput | audit_logsUpdateManyWithWhereWithoutTriage_sessionsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type clinical_alertsUpdateManyWithoutTriage_sessionsNestedInput = {
    create?: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput> | clinical_alertsCreateWithoutTriage_sessionsInput[] | clinical_alertsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTriage_sessionsInput | clinical_alertsCreateOrConnectWithoutTriage_sessionsInput[]
    upsert?: clinical_alertsUpsertWithWhereUniqueWithoutTriage_sessionsInput | clinical_alertsUpsertWithWhereUniqueWithoutTriage_sessionsInput[]
    createMany?: clinical_alertsCreateManyTriage_sessionsInputEnvelope
    set?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    disconnect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    delete?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    update?: clinical_alertsUpdateWithWhereUniqueWithoutTriage_sessionsInput | clinical_alertsUpdateWithWhereUniqueWithoutTriage_sessionsInput[]
    updateMany?: clinical_alertsUpdateManyWithWhereWithoutTriage_sessionsInput | clinical_alertsUpdateManyWithWhereWithoutTriage_sessionsInput[]
    deleteMany?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
  }

  export type tenantsUpdateOneRequiredWithoutTriage_sessionsNestedInput = {
    create?: XOR<tenantsCreateWithoutTriage_sessionsInput, tenantsUncheckedCreateWithoutTriage_sessionsInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutTriage_sessionsInput
    upsert?: tenantsUpsertWithoutTriage_sessionsInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutTriage_sessionsInput, tenantsUpdateWithoutTriage_sessionsInput>, tenantsUncheckedUpdateWithoutTriage_sessionsInput>
  }

  export type audit_logsUncheckedUpdateManyWithoutTriage_sessionsNestedInput = {
    create?: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput> | audit_logsCreateWithoutTriage_sessionsInput[] | audit_logsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutTriage_sessionsInput | audit_logsCreateOrConnectWithoutTriage_sessionsInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutTriage_sessionsInput | audit_logsUpsertWithWhereUniqueWithoutTriage_sessionsInput[]
    createMany?: audit_logsCreateManyTriage_sessionsInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutTriage_sessionsInput | audit_logsUpdateWithWhereUniqueWithoutTriage_sessionsInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutTriage_sessionsInput | audit_logsUpdateManyWithWhereWithoutTriage_sessionsInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsNestedInput = {
    create?: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput> | clinical_alertsCreateWithoutTriage_sessionsInput[] | clinical_alertsUncheckedCreateWithoutTriage_sessionsInput[]
    connectOrCreate?: clinical_alertsCreateOrConnectWithoutTriage_sessionsInput | clinical_alertsCreateOrConnectWithoutTriage_sessionsInput[]
    upsert?: clinical_alertsUpsertWithWhereUniqueWithoutTriage_sessionsInput | clinical_alertsUpsertWithWhereUniqueWithoutTriage_sessionsInput[]
    createMany?: clinical_alertsCreateManyTriage_sessionsInputEnvelope
    set?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    disconnect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    delete?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    connect?: clinical_alertsWhereUniqueInput | clinical_alertsWhereUniqueInput[]
    update?: clinical_alertsUpdateWithWhereUniqueWithoutTriage_sessionsInput | clinical_alertsUpdateWithWhereUniqueWithoutTriage_sessionsInput[]
    updateMany?: clinical_alertsUpdateManyWithWhereWithoutTriage_sessionsInput | clinical_alertsUpdateManyWithWhereWithoutTriage_sessionsInput[]
    deleteMany?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type clinical_alertsCreateWithoutAudit_logsInput = {
    id?: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    triage_sessions: triage_sessionsCreateNestedOneWithoutClinical_alertsInput
    tenants: tenantsCreateNestedOneWithoutClinical_alertsInput
  }

  export type clinical_alertsUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    session_id: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
  }

  export type clinical_alertsCreateOrConnectWithoutAudit_logsInput = {
    where: clinical_alertsWhereUniqueInput
    create: XOR<clinical_alertsCreateWithoutAudit_logsInput, clinical_alertsUncheckedCreateWithoutAudit_logsInput>
  }

  export type triage_sessionsCreateWithoutAudit_logsInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTriage_sessionsInput
    tenants: tenantsCreateNestedOneWithoutTriage_sessionsInput
  }

  export type triage_sessionsUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    tenant_id: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTriage_sessionsInput
  }

  export type triage_sessionsCreateOrConnectWithoutAudit_logsInput = {
    where: triage_sessionsWhereUniqueInput
    create: XOR<triage_sessionsCreateWithoutAudit_logsInput, triage_sessionsUncheckedCreateWithoutAudit_logsInput>
  }

  export type tenantsCreateWithoutAudit_logsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsCreateNestedManyWithoutTenantsInput
  }

  export type tenantsUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type tenantsCreateOrConnectWithoutAudit_logsInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutAudit_logsInput, tenantsUncheckedCreateWithoutAudit_logsInput>
  }

  export type clinical_alertsUpsertWithoutAudit_logsInput = {
    update: XOR<clinical_alertsUpdateWithoutAudit_logsInput, clinical_alertsUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<clinical_alertsCreateWithoutAudit_logsInput, clinical_alertsUncheckedCreateWithoutAudit_logsInput>
    where?: clinical_alertsWhereInput
  }

  export type clinical_alertsUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: clinical_alertsWhereInput
    data: XOR<clinical_alertsUpdateWithoutAudit_logsInput, clinical_alertsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type clinical_alertsUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutClinical_alertsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type triage_sessionsUpsertWithoutAudit_logsInput = {
    update: XOR<triage_sessionsUpdateWithoutAudit_logsInput, triage_sessionsUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<triage_sessionsCreateWithoutAudit_logsInput, triage_sessionsUncheckedCreateWithoutAudit_logsInput>
    where?: triage_sessionsWhereInput
  }

  export type triage_sessionsUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: triage_sessionsWhereInput
    data: XOR<triage_sessionsUpdateWithoutAudit_logsInput, triage_sessionsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type triage_sessionsUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUpdateManyWithoutTriage_sessionsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
  }

  export type tenantsUpsertWithoutAudit_logsInput = {
    update: XOR<tenantsUpdateWithoutAudit_logsInput, tenantsUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<tenantsCreateWithoutAudit_logsInput, tenantsUncheckedCreateWithoutAudit_logsInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutAudit_logsInput, tenantsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type tenantsUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUpdateManyWithoutTenantsNestedInput
  }

  export type tenantsUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type audit_logsCreateWithoutClinical_alertsInput = {
    id?: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
    triage_sessions: triage_sessionsCreateNestedOneWithoutAudit_logsInput
    tenants: tenantsCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateWithoutClinical_alertsInput = {
    id?: string
    tenant_id: string
    session_id: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsCreateOrConnectWithoutClinical_alertsInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput>
  }

  export type audit_logsCreateManyClinical_alertsInputEnvelope = {
    data: audit_logsCreateManyClinical_alertsInput | audit_logsCreateManyClinical_alertsInput[]
    skipDuplicates?: boolean
  }

  export type triage_sessionsCreateWithoutClinical_alertsInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTriage_sessionsInput
    tenants: tenantsCreateNestedOneWithoutTriage_sessionsInput
  }

  export type triage_sessionsUncheckedCreateWithoutClinical_alertsInput = {
    id?: string
    tenant_id: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTriage_sessionsInput
  }

  export type triage_sessionsCreateOrConnectWithoutClinical_alertsInput = {
    where: triage_sessionsWhereUniqueInput
    create: XOR<triage_sessionsCreateWithoutClinical_alertsInput, triage_sessionsUncheckedCreateWithoutClinical_alertsInput>
  }

  export type tenantsCreateWithoutClinical_alertsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsCreateNestedManyWithoutTenantsInput
  }

  export type tenantsUncheckedCreateWithoutClinical_alertsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTenantsInput
    triage_sessions?: triage_sessionsUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type tenantsCreateOrConnectWithoutClinical_alertsInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutClinical_alertsInput, tenantsUncheckedCreateWithoutClinical_alertsInput>
  }

  export type audit_logsUpsertWithWhereUniqueWithoutClinical_alertsInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutClinical_alertsInput, audit_logsUncheckedUpdateWithoutClinical_alertsInput>
    create: XOR<audit_logsCreateWithoutClinical_alertsInput, audit_logsUncheckedCreateWithoutClinical_alertsInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutClinical_alertsInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutClinical_alertsInput, audit_logsUncheckedUpdateWithoutClinical_alertsInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutClinical_alertsInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutClinical_alertsInput>
  }

  export type audit_logsScalarWhereInput = {
    AND?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    OR?: audit_logsScalarWhereInput[]
    NOT?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    id?: UuidFilter<"audit_logs"> | string
    tenant_id?: UuidFilter<"audit_logs"> | string
    session_id?: UuidFilter<"audit_logs"> | string
    alert_id?: UuidNullableFilter<"audit_logs"> | string | null
    physician_id?: StringFilter<"audit_logs"> | string
    action_taken?: StringFilter<"audit_logs"> | string
    override_justification?: StringNullableFilter<"audit_logs"> | string | null
    ip_address?: StringNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
  }

  export type triage_sessionsUpsertWithoutClinical_alertsInput = {
    update: XOR<triage_sessionsUpdateWithoutClinical_alertsInput, triage_sessionsUncheckedUpdateWithoutClinical_alertsInput>
    create: XOR<triage_sessionsCreateWithoutClinical_alertsInput, triage_sessionsUncheckedCreateWithoutClinical_alertsInput>
    where?: triage_sessionsWhereInput
  }

  export type triage_sessionsUpdateToOneWithWhereWithoutClinical_alertsInput = {
    where?: triage_sessionsWhereInput
    data: XOR<triage_sessionsUpdateWithoutClinical_alertsInput, triage_sessionsUncheckedUpdateWithoutClinical_alertsInput>
  }

  export type triage_sessionsUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTriage_sessionsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsUncheckedUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
  }

  export type tenantsUpsertWithoutClinical_alertsInput = {
    update: XOR<tenantsUpdateWithoutClinical_alertsInput, tenantsUncheckedUpdateWithoutClinical_alertsInput>
    create: XOR<tenantsCreateWithoutClinical_alertsInput, tenantsUncheckedCreateWithoutClinical_alertsInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutClinical_alertsInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutClinical_alertsInput, tenantsUncheckedUpdateWithoutClinical_alertsInput>
  }

  export type tenantsUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUpdateManyWithoutTenantsNestedInput
  }

  export type tenantsUncheckedUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTenantsNestedInput
    triage_sessions?: triage_sessionsUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type audit_logsCreateWithoutTenantsInput = {
    id?: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
    clinical_alerts?: clinical_alertsCreateNestedOneWithoutAudit_logsInput
    triage_sessions: triage_sessionsCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateWithoutTenantsInput = {
    id?: string
    session_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsCreateOrConnectWithoutTenantsInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput>
  }

  export type audit_logsCreateManyTenantsInputEnvelope = {
    data: audit_logsCreateManyTenantsInput | audit_logsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type clinical_alertsCreateWithoutTenantsInput = {
    id?: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutClinical_alertsInput
    triage_sessions: triage_sessionsCreateNestedOneWithoutClinical_alertsInput
  }

  export type clinical_alertsUncheckedCreateWithoutTenantsInput = {
    id?: string
    session_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutClinical_alertsInput
  }

  export type clinical_alertsCreateOrConnectWithoutTenantsInput = {
    where: clinical_alertsWhereUniqueInput
    create: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput>
  }

  export type clinical_alertsCreateManyTenantsInputEnvelope = {
    data: clinical_alertsCreateManyTenantsInput | clinical_alertsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type triage_sessionsCreateWithoutTenantsInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTriage_sessionsInput
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTriage_sessionsInput
  }

  export type triage_sessionsUncheckedCreateWithoutTenantsInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTriage_sessionsInput
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTriage_sessionsInput
  }

  export type triage_sessionsCreateOrConnectWithoutTenantsInput = {
    where: triage_sessionsWhereUniqueInput
    create: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput>
  }

  export type triage_sessionsCreateManyTenantsInputEnvelope = {
    data: triage_sessionsCreateManyTenantsInput | triage_sessionsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type audit_logsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutTenantsInput, audit_logsUncheckedUpdateWithoutTenantsInput>
    create: XOR<audit_logsCreateWithoutTenantsInput, audit_logsUncheckedCreateWithoutTenantsInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutTenantsInput, audit_logsUncheckedUpdateWithoutTenantsInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutTenantsInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type clinical_alertsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: clinical_alertsWhereUniqueInput
    update: XOR<clinical_alertsUpdateWithoutTenantsInput, clinical_alertsUncheckedUpdateWithoutTenantsInput>
    create: XOR<clinical_alertsCreateWithoutTenantsInput, clinical_alertsUncheckedCreateWithoutTenantsInput>
  }

  export type clinical_alertsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: clinical_alertsWhereUniqueInput
    data: XOR<clinical_alertsUpdateWithoutTenantsInput, clinical_alertsUncheckedUpdateWithoutTenantsInput>
  }

  export type clinical_alertsUpdateManyWithWhereWithoutTenantsInput = {
    where: clinical_alertsScalarWhereInput
    data: XOR<clinical_alertsUpdateManyMutationInput, clinical_alertsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type clinical_alertsScalarWhereInput = {
    AND?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
    OR?: clinical_alertsScalarWhereInput[]
    NOT?: clinical_alertsScalarWhereInput | clinical_alertsScalarWhereInput[]
    id?: UuidFilter<"clinical_alerts"> | string
    session_id?: UuidFilter<"clinical_alerts"> | string
    tenant_id?: UuidFilter<"clinical_alerts"> | string
    alert_type?: StringFilter<"clinical_alerts"> | string
    severity?: StringFilter<"clinical_alerts"> | string
    description?: StringFilter<"clinical_alerts"> | string
    recommendation?: StringFilter<"clinical_alerts"> | string
    status?: StringNullableFilter<"clinical_alerts"> | string | null
    created_at?: DateTimeNullableFilter<"clinical_alerts"> | Date | string | null
  }

  export type triage_sessionsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: triage_sessionsWhereUniqueInput
    update: XOR<triage_sessionsUpdateWithoutTenantsInput, triage_sessionsUncheckedUpdateWithoutTenantsInput>
    create: XOR<triage_sessionsCreateWithoutTenantsInput, triage_sessionsUncheckedCreateWithoutTenantsInput>
  }

  export type triage_sessionsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: triage_sessionsWhereUniqueInput
    data: XOR<triage_sessionsUpdateWithoutTenantsInput, triage_sessionsUncheckedUpdateWithoutTenantsInput>
  }

  export type triage_sessionsUpdateManyWithWhereWithoutTenantsInput = {
    where: triage_sessionsScalarWhereInput
    data: XOR<triage_sessionsUpdateManyMutationInput, triage_sessionsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type triage_sessionsScalarWhereInput = {
    AND?: triage_sessionsScalarWhereInput | triage_sessionsScalarWhereInput[]
    OR?: triage_sessionsScalarWhereInput[]
    NOT?: triage_sessionsScalarWhereInput | triage_sessionsScalarWhereInput[]
    id?: UuidFilter<"triage_sessions"> | string
    tenant_id?: UuidFilter<"triage_sessions"> | string
    patient_name?: StringFilter<"triage_sessions"> | string
    intake_notes?: StringNullableFilter<"triage_sessions"> | string | null
    known_medications?: StringNullableFilter<"triage_sessions"> | string | null
    status?: StringNullableFilter<"triage_sessions"> | string | null
    resume_url?: StringNullableFilter<"triage_sessions"> | string | null
    expires_at?: DateTimeFilter<"triage_sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"triage_sessions"> | Date | string | null
  }

  export type audit_logsCreateWithoutTriage_sessionsInput = {
    id?: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
    clinical_alerts?: clinical_alertsCreateNestedOneWithoutAudit_logsInput
    tenants: tenantsCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateWithoutTriage_sessionsInput = {
    id?: string
    tenant_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsCreateOrConnectWithoutTriage_sessionsInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput>
  }

  export type audit_logsCreateManyTriage_sessionsInputEnvelope = {
    data: audit_logsCreateManyTriage_sessionsInput | audit_logsCreateManyTriage_sessionsInput[]
    skipDuplicates?: boolean
  }

  export type clinical_alertsCreateWithoutTriage_sessionsInput = {
    id?: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutClinical_alertsInput
    tenants: tenantsCreateNestedOneWithoutClinical_alertsInput
  }

  export type clinical_alertsUncheckedCreateWithoutTriage_sessionsInput = {
    id?: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutClinical_alertsInput
  }

  export type clinical_alertsCreateOrConnectWithoutTriage_sessionsInput = {
    where: clinical_alertsWhereUniqueInput
    create: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput>
  }

  export type clinical_alertsCreateManyTriage_sessionsInputEnvelope = {
    data: clinical_alertsCreateManyTriage_sessionsInput | clinical_alertsCreateManyTriage_sessionsInput[]
    skipDuplicates?: boolean
  }

  export type tenantsCreateWithoutTriage_sessionsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutTenantsInput
    clinical_alerts?: clinical_alertsCreateNestedManyWithoutTenantsInput
  }

  export type tenantsUncheckedCreateWithoutTriage_sessionsInput = {
    id?: string
    clinic_name: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutTenantsInput
    clinical_alerts?: clinical_alertsUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type tenantsCreateOrConnectWithoutTriage_sessionsInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutTriage_sessionsInput, tenantsUncheckedCreateWithoutTriage_sessionsInput>
  }

  export type audit_logsUpsertWithWhereUniqueWithoutTriage_sessionsInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutTriage_sessionsInput, audit_logsUncheckedUpdateWithoutTriage_sessionsInput>
    create: XOR<audit_logsCreateWithoutTriage_sessionsInput, audit_logsUncheckedCreateWithoutTriage_sessionsInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutTriage_sessionsInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutTriage_sessionsInput, audit_logsUncheckedUpdateWithoutTriage_sessionsInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutTriage_sessionsInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutTriage_sessionsInput>
  }

  export type clinical_alertsUpsertWithWhereUniqueWithoutTriage_sessionsInput = {
    where: clinical_alertsWhereUniqueInput
    update: XOR<clinical_alertsUpdateWithoutTriage_sessionsInput, clinical_alertsUncheckedUpdateWithoutTriage_sessionsInput>
    create: XOR<clinical_alertsCreateWithoutTriage_sessionsInput, clinical_alertsUncheckedCreateWithoutTriage_sessionsInput>
  }

  export type clinical_alertsUpdateWithWhereUniqueWithoutTriage_sessionsInput = {
    where: clinical_alertsWhereUniqueInput
    data: XOR<clinical_alertsUpdateWithoutTriage_sessionsInput, clinical_alertsUncheckedUpdateWithoutTriage_sessionsInput>
  }

  export type clinical_alertsUpdateManyWithWhereWithoutTriage_sessionsInput = {
    where: clinical_alertsScalarWhereInput
    data: XOR<clinical_alertsUpdateManyMutationInput, clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsInput>
  }

  export type tenantsUpsertWithoutTriage_sessionsInput = {
    update: XOR<tenantsUpdateWithoutTriage_sessionsInput, tenantsUncheckedUpdateWithoutTriage_sessionsInput>
    create: XOR<tenantsCreateWithoutTriage_sessionsInput, tenantsUncheckedCreateWithoutTriage_sessionsInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutTriage_sessionsInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutTriage_sessionsInput, tenantsUncheckedUpdateWithoutTriage_sessionsInput>
  }

  export type tenantsUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTenantsNestedInput
    clinical_alerts?: clinical_alertsUpdateManyWithoutTenantsNestedInput
  }

  export type tenantsUncheckedUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinic_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTenantsNestedInput
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type audit_logsCreateManyClinical_alertsInput = {
    id?: string
    tenant_id: string
    session_id: string
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type audit_logsUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutAudit_logsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyWithoutClinical_alertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsCreateManyTenantsInput = {
    id?: string
    session_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type clinical_alertsCreateManyTenantsInput = {
    id?: string
    session_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
  }

  export type triage_sessionsCreateManyTenantsInput = {
    id?: string
    patient_name: string
    intake_notes?: string | null
    known_medications?: string | null
    status?: string | null
    resume_url?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type audit_logsUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUpdateOneWithoutAudit_logsNestedInput
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clinical_alertsUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutClinical_alertsNestedInput
    triage_sessions?: triage_sessionsUpdateOneRequiredWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type triage_sessionsUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutTriage_sessionsNestedInput
    clinical_alerts?: clinical_alertsUpdateManyWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
    clinical_alerts?: clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsNestedInput
  }

  export type triage_sessionsUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    intake_notes?: NullableStringFieldUpdateOperationsInput | string | null
    known_medications?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsCreateManyTriage_sessionsInput = {
    id?: string
    tenant_id: string
    alert_id?: string | null
    physician_id: string
    action_taken: string
    override_justification?: string | null
    ip_address?: string | null
    timestamp?: Date | string | null
  }

  export type clinical_alertsCreateManyTriage_sessionsInput = {
    id?: string
    tenant_id: string
    alert_type: string
    severity: string
    description: string
    recommendation: string
    status?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinical_alerts?: clinical_alertsUpdateOneWithoutAudit_logsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_id?: NullableStringFieldUpdateOperationsInput | string | null
    physician_id?: StringFieldUpdateOperationsInput | string
    action_taken?: StringFieldUpdateOperationsInput | string
    override_justification?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clinical_alertsUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutClinical_alertsNestedInput
    tenants?: tenantsUpdateOneRequiredWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutClinical_alertsNestedInput
  }

  export type clinical_alertsUncheckedUpdateManyWithoutTriage_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    alert_type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}