import { Entity, Fields } from 'remult'

export type Posters = {
  id: number
  name: string
  username: string
  email: string
}

@Entity<Posters>('posters', {
  allowApiCrud: true,
})
export class Poster {
  @Fields.autoIncrement()
  id = 0

  @Fields.string()
  name = ''

  @Fields.string()
  username = ''

  @Fields.string()
  email = ''
}
