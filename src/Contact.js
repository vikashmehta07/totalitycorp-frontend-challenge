import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;
      

      .contact-form {
        max-width: 50rem;
        margin: auto;
        

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
           

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7117698543593!2d85.1939537745688!3d25.614492277444683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f135d16b871%3A0x9908f0a3876f666b!2sMy%20home!5e0!3m2!1sen!2sin!4v1696521154859!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="mapp"
        referrerPolicy="no-referrer-when-downgrade"/>

      <div className="container">
        <div className="contact-form">
          <form
            action=""
            method=""
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              value={isAuthenticated ? user.email : ""}
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
            
          </form>
          
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Contact;
