import Image from 'next/image'
import { Inter } from 'next/font/google'
import TypeaheadDropdown from '../components/TypeaheadDropdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <TypeaheadDropdown options={options} />
    </main>
  )
}