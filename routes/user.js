const router = express.Router();
const User = require('./controllers/user.control')


router.get('/:id');

router.get('/:id/inventory');

router.post('/signup', User.signUp());

router.put('/signin');



