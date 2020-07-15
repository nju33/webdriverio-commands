import type { BrowserObject } from 'webdriverio'

/**
 * Get data of a table as records
 *
 * @param selector - A unique selector for a table element
 * @param headers - An array of string as record key
 * @returns - Records that each having the headers field
 *
 * @example
 * ```ts
 * import { getTableAsRecords } from 'THIS_PACKAGE_NAME'
 *
 * browser.addCommand("getTableAsRecords", getTableAsRecords, true)
 * browser.getTableAsRecords('#table', ['foo', 'bar'])
 * ```
 */
export async function getTableAsRecords<Headers extends string>(
  this: BrowserObject,
  selector: string,
  headers: Headers[]
): Promise<Array<Record<Headers, string>>> {
  const $table = await this.$(selector)
  const $$tr = await $table.$$('tbody tr')

  const lines = await Promise.all(
    $$tr.map(async ($tr) => {
      const $$cell = await $tr.$$('th')

      const texts = await Promise.all(
        $$cell.map(async ($cell) => {
          return await $cell.getText()
        })
      )

      return texts
    })
  )

  return lines.reduce<Array<Record<Headers, string>>>((result, line) => {
    const initialRecord = ({} as unknown) as Record<Headers, string>

    const record = line.reduce((acc, text, index) => {
      const header = headers[index]

      if (header === undefined) {
        return acc
      }
      acc[header] = text

      return acc
    }, initialRecord)

    result.push(record)

    return result
  }, [])
}

export type GetTableAsRecords = typeof getTableAsRecords
