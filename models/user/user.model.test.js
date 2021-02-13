const mongoose = require('mongoose');
const UserModel = require('./user.model');

describe(`UserModel`, () => {
    beforeEach(async (done) => {
        const url = `mongodb://127.0.0.1/perch-test-models`;
        await mongoose.connect(url, { useNewUrlParser: true });
        done();
    })

    describe('basic database operations', () => {
        beforeEach(async (done) => {
            await UserModel.deleteMany({});
            done();
        })

        test('can create a user as a db entry', async (done) => {
            await UserModel.create({
                username: 'TomNook1'
            });
            done();

            const allUsers = await UserModel.find({});
            expect(allUsers).toHaveLength(1);
        })
    })
})