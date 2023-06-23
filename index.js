import dotenv from 'dotenv';

dotenv.config();

import app from './src/app.js';

app.listen( Number( process.env.PORT || 5000 ), async () => {
  try {
    console.log( `DB connected. listening on port ${process.env.PORT}` );
  } catch ( e ) {
    console.log( e );
  }
} );
