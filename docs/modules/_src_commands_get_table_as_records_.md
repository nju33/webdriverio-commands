[@nju33/webdriverio-commands](../README.md) › [Globals](../globals.md) › ["src/commands/get-table-as-records"](_src_commands_get_table_as_records_.md)

# Module: "src/commands/get-table-as-records"

## Index

### Type aliases

* [GetTableAsRecords](_src_commands_get_table_as_records_.md#gettableasrecords)

### Functions

* [getTableAsRecords](_src_commands_get_table_as_records_.md#gettableasrecords)

## Type aliases

###  GetTableAsRecords

Ƭ **GetTableAsRecords**: *typeof getTableAsRecords*

*Defined in [src/commands/get-table-as-records.ts:60](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.ts#L60)*

## Functions

###  getTableAsRecords

▸ **getTableAsRecords**‹**Headers**›(`this`: [BrowserObject](../interfaces/_src_extends_webdriverio_.__global.webdriverio.browserobject.md), `selector`: string, `headers`: Headers[]): *Promise‹Array‹Record‹Headers, string›››*

*Defined in [src/commands/get-table-as-records.ts:18](https://github.com/nju33/webdriverio-commands/blob/2cb5bd1/src/commands/get-table-as-records.ts#L18)*

Get data of a table as records

**`example`** 
```ts
import { getTableAsRecords } from 'THIS_PACKAGE_NAME'

browser.addCommand("getTableAsRecords", getTableAsRecords, true)
browser.getTableAsRecords('#table', ['foo', 'bar'])
```

**Type parameters:**

▪ **Headers**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [BrowserObject](../interfaces/_src_extends_webdriverio_.__global.webdriverio.browserobject.md) | - |
`selector` | string | A unique selector for a table element |
`headers` | Headers[] | An array of string as record key |

**Returns:** *Promise‹Array‹Record‹Headers, string›››*

- Records that each having the headers field
