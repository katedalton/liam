
import FS   = require('fs')
import PATH = require('path')
import YAML = require('yaml')

export function read(dataSource : string) {
  const
    path = PATH.resolve('./content/' + dataSource + '.yml'),
    file = FS.readFileSync(path, 'utf8')
  return YAML.parse(file)
}
