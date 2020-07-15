// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { GetTableAsRecords } from './commands'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace WebdriverIO {
    interface BrowserObject {
      getTableAsRecords: GetTableAsRecords
    }
  }
}
