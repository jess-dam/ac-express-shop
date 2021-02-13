const app = require('../app')
const supertest = require('supertest')
const mongoose = require('mongoose')
const dbConfig = require('../db/config.json')
const Item = require('../models/item/item.model')

beforeAll(async () => {
    const url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.uxufv.mongodb.net/${dbConfig.dbNameTest}-test?retryWrites=true&w=majority`;
    await mongoose.connect(url, { useNewUrlParser: true });
})

describe('/item', () => {
    // beforeEach(async (done) => {
    //     await Item.deleteMany({})
    //     done()
    // })

    describe('GET /', () => {
        describe('given some items exist', () => {
            let res
            beforeAll(async (done) => {
                await Item.deleteMany({})
                await Item.create({})
                await Item.create({})

                res = await supertest(app).get(`/item/`)
                done()
            })

            test('returns status 200', () => {
                expect(res.status).toBe(200)
            })

            test('returns expected body', () => {
                expect(res.body.status).toBe('success')
                expect(res.body.message).toBe('Got all items')
                expect(res.body.items).toHaveLength(2)
            })
        })

        describe('GET :id', () => {
            describe('given an item with id', () => {
                let res, item
                beforeAll(async (done) => {
                    item = await Item.create({})
                    res = await supertest(app).get(`/item/${item._id}`)
                    done()
                })

                test('returns status 200', () => {
                    expect(res.status).toBe(200)
                })

                test('returns expected body', () => {
                    expect(res.body.status).toBe('success')
                    expect(res.body.message).toBe('Successfully got item')
                    expect(res.body.item._id).toEqual(item._id.toString())
                })
            })
        })
    })

    describe('POST /', () => {

    })

})