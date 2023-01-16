import styles from '../style'
import { arrowUp } from '../assets'

/* Aqui é o componente GETSTARTED, que contem o texto, a seta e o circulo */
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}> {/* circulo, e propriedade de mudar o cursor do mouse */}
      <div className={`${styles.flexCenter} flex-col bg-primary 
      w-[100%] h-[100%] rounded-full`}> {/* circulo interno de cor preta */}
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium 
          text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get
            </span>  
          </p>
            <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="arrowup" />
        </div>
          <p className='font-poppins font-medium 
          text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started 
            </span> 
          </p>
      </div>
    </div>
  )
}

export default GetStarted