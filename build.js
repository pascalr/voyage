import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {buildWebsite} from './src/builder.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let rootDir = path.join(__dirname, 'docs')

let pages = [
  {url: '/', out: './docs/index.html'},
]

let places = ['thailand', 'cambodia', 'vietnam', 'china', 'japan', 'newzealand', 'italy', 'france', 'belgium', 'netherlands', 'turkey', 'bulgaria', 'usa']
places.forEach(place => {
  pages.push({url: '/t/'+place, out: './docs/t/'+place+'/index.html'})
})

buildWebsite(rootDir, pages)
