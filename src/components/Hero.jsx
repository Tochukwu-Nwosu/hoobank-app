import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-white text-[52px] leading-[75px] ss:text-[72px] ss:leading-[100px]">
          The Next <br className="hidden sm:block" /> {" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="hidden ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold text-white text-[52px] leading-[75px] ss:text-[68px] ss:leading-[100px]">Payment Method.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

    </div>
  </section>
)

export default Hero
