import Appbar from './_components/Appbar'
import { Providers } from './provider'
function Home() {
  return (
    <Providers>
      <div>
        <main>
          <Appbar></Appbar>
        </main>
      </div>
    </Providers>
  )
}

export default Home
