import { redirect } from 'next/navigation'

function UserPage() {
  return (
    redirect('/user/home')
  )
}

export default UserPage