import NextAuth from 'next-auth'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: ''
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      authorize: async (credentials) => {
        let user = null

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
        const pwHash = credentials.password

        // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        user = await (credentials.email, pwHash)

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error('User not found.')
        }

        // return user object with the their profile data
        return user
      }
    }),
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ]
})
