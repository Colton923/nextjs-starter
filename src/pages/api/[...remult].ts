import { remultNext } from 'remult/remult-next';
import { Post } from '../../shared/Post';
import { Poster } from '../../shared/Poster';
import { createPostgresConnection } from 'remult/postgres';

export default remultNext({
  entities: [Post, Poster],
  dataProvider: createPostgresConnection({
    connectionString: process.env.DATABASE_URL,
  }),
});
