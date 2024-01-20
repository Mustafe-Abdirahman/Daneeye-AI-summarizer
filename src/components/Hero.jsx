import { logo } from '../assets/'

const Hero = () => {
  return (
    <header className='w-full flex items-center justify-center flex-col'>

        <nav className='flex items-center justify-between w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

            <button className='black_btn' type='button'
            onClick={()=> window.open('https://github.com/Mustafe-Abdirahman')}
            >GitHub</button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles With <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero