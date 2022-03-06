import fs from 'fs-extra'
import { r } from '../scripts/utils'

const getManifest = () => {
  return {
    manifest_version: 3,
    name: 'YA DEVS2',
    description: 'Build an Extension!',
    version: '1.0',
    devtools_page: './dist/devtools/index.html',
    action: {
      default_popup: './dist/popup/index.html'
    }
  }
}

function writeManifest() {
  fs.writeJSON(r('extension/manifest.json'), getManifest(), { spaces: 2 })
}

writeManifest()