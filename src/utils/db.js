import mongoose from 'mongoose'
import options from '../config'
mongoose.set('useFindAndModify', false)

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    dbName: 'Inventory',
    useCreateIndex: true,
    useNewUrlParser: true
  })
}
