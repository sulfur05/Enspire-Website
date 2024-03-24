export default function Contact() { 
    return ( 
        <div className="bgcontact">
        <div className="py-2 px-4 mx-auto max-w-screen-md bgcontact"> 
            <h2 className="mb-4 text-4xl font-bold  
                           text-center green mt-6"> 
                CONTACT US 
            </h2> 
            {/* <p className="mb-4 font-light text-left  
                          text-gray-500 sm:text-xl"> 
                Got a issue? Want to send feedback? 
                Need details about our Courses? Let us know. 
            </p>  */}
            <form action="#"> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label for="firstName " 
                               className="block my-2 text-left  
                                          text-sm font-medium labels"> 
                            FIRST NAME 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bgblue
                                          border-transparent   
                                          text-sm rounded-lg labels block w-full p-2.5" 
                               placeholder="Enter First Name"
                               required/> 
                    </div> 
                    
                    <div className="w-1/2 pl-2"> 
                        <label for="firstName" 
                               className="block my-2 text-left text-sm  
                                          font-medium labels"> 
                            LAST NAME 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bgblue  border-transparent  
                                          border-gray-300   
                                          text-sm rounded-lg block w-full labels p-2.5"
                               placeholder="Enter Last Name"/> 
                    </div> 
                </div> 
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium labels "> 
                        YOUR EMAIL 
                    </label> 
                    <input type="email" 
                           className="shadow-sm bgblue border-transparent  
                                      border-gray-300  labels  
                                      text-sm rounded-lg block w-full p-2.5" 
                           placeholder="youremail@email.com" 
                           required /> 
                </div> 
                {/* <div> 
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium labels"> 
                        SUBJECT 
                    </label> 
                    <input type="text" 
                           className="block bgblue p-3 w-full text-sm  
                           labels  rounded-lg  
                           border-transparent border-gray-300 shadow-sm "
                           placeholder="What issue/suggestion do you have?" 
                           required /> 
                </div>  */}
                <div className="bgcontact"> 
                    <label for="message" 
                           className="block my-2 text-left  
                                      text-sm font-medium labels "> 
                        YOUR MESSAGE 
                    </label> 
                    <textarea rows="6" 
                              className="block bgblue p-2.5 w-full text-sm  
                                         text-gray-900  rounded-lg  
                                         shadow-sm border-transparent border-gray-800 " 
                              placeholder="Query/Suggestion..."/> 
                </div> 
                <button type="submit bgcontact" 
                        className="mt-2 p-2 float-right text-white   
                                   rounded-lg border-green-600  
                                   bg-green-600 hover:scale-105"> 
                    SEND MESSAGE 
                </button> 
            </form> 
        </div> 
        </div>
    ) 
}