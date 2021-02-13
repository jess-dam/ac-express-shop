const { TestScheduler } = require('jest')
const mongoose = require('mongoose')
const InventoryModel = require('./inventory.model')

describe('InventoryModel', () => {
    beforeEach(async (done) => {
        const url = `mongodb://127.0.0.1/perch-test-models`;
        await mongoose.connect(url, { useNewUrlParser: true })
        await InventoryModel.deleteMany({})
        done();
    })

    describe('basic db operations', () => {
        beforeEach(async (done) => {
                InventoryModel.deleteMany({})
                done()
            })

        test('can create an inveontory as db entry', async (done) => {
            await InventoryModel.create({})

            done()

            const allInventories = await InventoryModel.find({})
            expect(allInventories).toHaveLength(1)
        })
    })
})