[@nju33/webdriverio-commands](../README.md) › [Globals](../globals.md) › ["src/commands/get-table-as-records.test"](_src_commands_get_table_as_records_test_.md)

# Module: "src/commands/get-table-as-records.test"

## Index

### Object literals

* [browserObjectLike](_src_commands_get_table_as_records_test_.md#const-browserobjectlike)
* [cellElementLike](_src_commands_get_table_as_records_test_.md#const-cellelementlike)
* [tableElementLike](_src_commands_get_table_as_records_test_.md#const-tableelementlike)
* [trElementLike](_src_commands_get_table_as_records_test_.md#const-trelementlike)

## Object literals

### `Const` browserObjectLike

### ▪ **browserObjectLike**: *object*

*Defined in [src/commands/get-table-as-records.test.ts:18](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L18)*

###  $

• **$**: *Mock‹any, any›* = jest.fn().mockResolvedValue(tableElementLike)

*Defined in [src/commands/get-table-as-records.test.ts:19](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L19)*

___

### `Const` cellElementLike

### ▪ **cellElementLike**: *object*

*Defined in [src/commands/get-table-as-records.test.ts:4](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L4)*

###  getText

• **getText**: *Mock‹any, any›* = jest.fn().mockResolvedValue('foo')

*Defined in [src/commands/get-table-as-records.test.ts:5](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L5)*

___

### `Const` tableElementLike

### ▪ **tableElementLike**: *object*

*Defined in [src/commands/get-table-as-records.test.ts:14](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L14)*

###  $$

• **$$**: *Mock‹any, any›* = jest.fn().mockResolvedValue([trElementLike, trElementLike])

*Defined in [src/commands/get-table-as-records.test.ts:15](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L15)*

___

### `Const` trElementLike

### ▪ **trElementLike**: *object*

*Defined in [src/commands/get-table-as-records.test.ts:8](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L8)*

###  $$

• **$$**: *Mock‹any, any›* = jest
    .fn()
    .mockResolvedValue([cellElementLike, cellElementLike, cellElementLike])

*Defined in [src/commands/get-table-as-records.test.ts:9](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.test.ts#L9)*
