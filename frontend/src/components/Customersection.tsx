import CustomerCard from "./CustomerCard"

const Customersection = () => {
  return (
    <>
    <div className="flex justify-between bg-zinc-950 mt-32 pb-32 w-[90%] mx-auto py-40 border-t-[1px] border-orange-400">
    <CustomerCard/>
        <div className="flex-col w-[50%]">
            <div className="text-3xl font-gradient-to-r from-orange-400 to-orange-200 font-extrabold font-montserrat">Login as a Customer</div>
    <div className="mt-6">
    The customer login experience on our decentralized platform ensures seamless and secure management of your subscriptions through
     blockchain technology. Once logged in, customers can explore a variety of businesses and services, selecting the subscriptions 
     that best fit their needs. Payments are made securely through blockchain transactions, facilitated by on-chain invoices generated
      by the businesses. These invoices provide a transparent and verifiable record of each transaction, enhancing trust and ensuring
       peace of mind. The intuitive customer dashboard offers a comprehensive overview of all active and pending subscriptions, with
        timely notifications for upcoming renewals or payments
           management.</div>
           </div>
             
           </div>
    </>
  )
}

export default Customersection