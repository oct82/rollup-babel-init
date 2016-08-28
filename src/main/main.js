import mda from './mda.js'
import args from './args.json'

export default function () {
  return `mda(${args.toString()}):\n\n${JSON.stringify(mda(...args))}`
}
