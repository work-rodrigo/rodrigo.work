import { signIn } from '@/auth'
import { Button } from './ui/button'

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button type="submit">Signin with Google</button>
      <Button type="button">Signin</Button>
    </form>
  )
}
