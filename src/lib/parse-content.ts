
import FS   = require('fs')
import PATH = require('path')
import YAML = require('yaml')

export function parse(dataSource : string) {
  const
    path = PATH.resolve('../content/' + dataSource),
    file = FS.readFileSync(path, 'utf8')
  console.log(file)
}
