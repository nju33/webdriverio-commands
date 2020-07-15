import type { BrowserObject } from 'webdriverio'
import { getTableAsRecords } from './get-table-as-records'

const cellElementLike = {
  getText: jest.fn().mockResolvedValue('foo')
}

const trElementLike = {
  $$: jest
    .fn()
    .mockResolvedValue([cellElementLike, cellElementLike, cellElementLike])
}

const tableElementLike = {
  $$: jest.fn().mockResolvedValue([trElementLike, trElementLike])
}

const browserObjectLike = {
  $: jest.fn().mockResolvedValue(tableElementLike)
}

test('getTableAsRecords', async () => {
  const records = await getTableAsRecords.apply(
    (browserObjectLike as unknown) as BrowserObject,
    ['#table', ['foo', 'bar', 'baz']]
  )

  expect(records).toMatchObject([
    {
      foo: 'foo',
      bar: 'foo',
      baz: 'foo'
    },
    {
      foo: 'foo',
      bar: 'foo',
      baz: 'foo'
    }
  ])
})
