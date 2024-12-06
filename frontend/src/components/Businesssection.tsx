import BusinessCard from "./Businesscard"

const Businesssection = () => {
  return (
    <>
    <div className="flex justify-between bg-zinc-950 mt-32 w-[90%] mx-auto pt-40 pb-20 border-t-[1px] border-orange-400">
        <div className="flex-col w-[50%]">
            <div className="text-3xl font-gradient-to-r from-orange-400 to-orange-200 font-extrabold font-montserrat">Establish a Business</div>
    <div className="mt-6">
    Creating a business on our decentralized platform empowers entrepreneurs to establish and manage their subscription-based services
     seamlessly, leveraging the security and transparency of blockchain technology. As a business owner, you can create customized 
     subscription plans tailored to your customers' needs, ensuring a flexible and user-friendly experience. Each subscription generates
      on-chain invoices, streamlining payment processing and guaranteeing that transactions are secure and verifiable. These invoices
       provide a transparent and immutable record of all payments, fostering trust between you and your customers. Additionally, our
        platform offers a robust analytics dashboard where business owners can gain valuable insights into their operations. Track key
         performance indicators such as revenue trends, customer retention rates, and subscription growth, all presented in a clear and 
         intuitive format.
           management.</div>
           </div>
             <BusinessCard/>
           </div>
    </>
  )
}

export default Businesssection