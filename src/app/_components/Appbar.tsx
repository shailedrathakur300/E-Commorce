'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function Appbar() {
  const session = useSession()
  return (
    <div className="flex justify-between items-center">
      <div className="text-4xl font-bold shadow-md ">
        <h1>Shell Soul</h1>
      </div>
      <div>
        {session.data?.user && (
          <button
            className="m-2 p-2 bg-red-400"
            onClick={() => signOut()}
          >
            SignOut
          </button>
        )}
        {!session.data?.user && (
          <button
            className="m-2 p-2 bg-blue-400"
            onClick={() => signIn()}
          >
            SignIn
          </button>
        )}
      </div>
    </div>
  )
}

export default Appbar
