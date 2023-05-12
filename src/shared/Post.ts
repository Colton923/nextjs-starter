import { Entity, Fields } from 'remult'

export type Posts = {
  id: number
  title: string
  body: string
  userId: number
  createdAt: string
}

@Entity<Posts>('posts', {
  allowApiCrud: true,
})
export class Post {
  @Fields.autoIncrement()
  id = 0

  @Fields.string()
  title = ''

  @Fields.string()
  body = ''

  @Fields.number()
  userId = 0

  @Fields.date()
  createdAt = new Date()
}
