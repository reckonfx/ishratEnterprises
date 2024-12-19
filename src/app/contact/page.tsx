export default function ContactUs(){
    return(
        <>
        <section className="m-[20%] flex items-center justify-center flex-col border border-black rounded-lg   ">
            <h1 className="text-6xl font-bold text-center p-10 ">Contact Us</h1>
            <form action="mailto" className="flex items-start justify-between flex-col gap-5 p-24">
               <div className="flex items-start justify-between gap-24">
               <label htmlFor="Name" >Name</label>
               <input className="w-48" type="text" aria-placeholder="Enter your Name PLease" required />
               </div>

                <div className="flex items-start justify-between gap-12">
                <label htmlFor="phone" >Phone Number</label>
                <input className="w-48"  type="tel" aria-placeholder="Enter your Phone Number" required />
                </div>

                <div className="flex items-center justify-between gap-24">
                <label htmlFor="email">Email Id</label>
                <input className="w-48" type="email" required />
                </div>

               
               <div className="flex items-center justify-between gap-24">
               <label htmlFor="message" >Message</label>
               <textarea name="message" id="user message" rows={5} cols={50} aria-placeholder="Enter Your Message Here"> </textarea>
               </div>


                <button>Sumit Your Message</button>
            </form>
          

            <p>Thanks for contacting us We will get back you you very soon</p>
        </section>
        
        </>
    )
}