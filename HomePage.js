import React from "react";
import ChatBox from "../components/ChatBox";
import "./homepage.css";

export default function HomePage() {
  return (
    <div     >


      {/* <h1 className="win1">Home Page</h1> */}

      <p className="win"> An anonymous helpdesk system prioritizes user privacy,
         enabling individuals to seek assistance without divulging 
         personal details. It's particularly valuable in contexts
          like mental health support or reporting sensitive issues.
           This system ensures confidentiality through secure, encrypted 
           communication channels, fostering a safe environment for users 
           to express concerns without fear of judgment. Implementing robust
            security measures is essential to protect user anonymity, involving
             regular updates, stringent protocols, and clear guidelines for handling 
             sensitive information. By combining effective support and stringent privacy 
             protection, an anonymous helpdesk system encourages open communication and empowers individuals to access assistance while maintaining their confidentiality.</p>
      <ChatBox />
    </div>
  );
}
