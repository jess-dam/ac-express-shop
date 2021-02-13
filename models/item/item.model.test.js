const mongoose = require('mongoose');
const ItemModel = require('./item.model');
const dbConfig = require('../../db/config.json');

describe('ItemModel', () => {
    beforeEach(async (done) => {
        const url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.uxufv.mongodb.net/${dbConfig.dbName}-test?retryWrites=true&w=majority`;
        await mongoose.connect(url, { useNewUrlParser: true });
        done();
    })

    describe('basic db operations', () => {
        beforeEach(async (done) => {
            await ItemModel.deleteMany({});
            done();
        })

        test('can create an item in db', async (done) => {
            await ItemModel.create({
                name: 'Peach',
                type: 'FOOD',
            });

            const allItems = await ItemModel.find({});
            expect(allItems).toHaveLength(1);
            done();
        })
    })
})