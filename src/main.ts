
import { app } from 'electron'
import * as path from 'path'
import { Trakr } from './trakr'

let trakr = new Trakr(app)

trakr.init()