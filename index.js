require('dotenv').config()

const app = require('./src/app');
const db = require('./connection/dbConnect');

app.listen(Number(process.env.PORT || 5000), async () => {
  try {
    await db.connect();
    console.log(`DB connected. listening on port ${process.env.APP_PORT}`);
  } catch (e) {
    console.log(e);
  }
})
