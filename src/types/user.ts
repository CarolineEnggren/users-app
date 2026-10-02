// Defines the structure of a user returned by the API.

export type User = {
  id: number
  username: string
  profile: {
    name: string
    email: string
    address: {
      street: string
      city: string
      zipCode: string
    }
  }
  settings: {
    theme: string
    notifications: {
      email: boolean
      push: boolean
    }
  }
  roles: string[]
}