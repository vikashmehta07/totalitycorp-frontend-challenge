import React from "react";
import {AiOutlineUser,AiOutlineMail,AiOutlineBank} from "react-icons/ai" ;
import {FaRegAddressCard,FaCcVisa,FaCcAmex,FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import { Button } from "./styles/Button";
import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import FormatPrice from "./Helpers/FormatPrice";


export default function Checkout() {
  const {total_price, shipping_fee } = useCartContext();

  return (

    <Wrapper>
    <div className="body">
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname" className="icon-center">
                    <AiOutlineUser style={{marginRight:"5px"}}/> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="email" className="icon-center">
                  <AiOutlineMail style={{marginRight:"5px"}}/>
                   
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr" className="icon-center">
                  <FaRegAddressCard style={{marginRight:"5px"}}/>
                  
                    
                    Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city" className="icon-center">
                  <AiOutlineBank style={{marginRight:"5px"}}/>
                    
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                  <FaCcVisa style={{color:"navy",marginRight:"5px"}}/>
                  <FaCcAmex style={{color:"blue",marginRight:"5px"}}/>
                  <FaCcMastercard style={{color:"red",marginRight:"5px"}}/>
                  <FaCcDiscover style={{color:"orange",marginRight:"5px"}}/>
                    
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" name="sameadr" /> Shipping address same
                as billing
              </label>
              <Button> Continue </Button>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="Container">
            
            <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
           
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
  }

  * {
    box-sizing: border-box;
  }

  .icon-center{
    display:flex;
    aligh-item : center;
    
  }
  h3{
    margin-bottom:15px;
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }

  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }

  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }

  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container {
    background-color: #fafafa;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  ${'' /* .btn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  } */}

  ${'' /* .btn:hover {
    background-color: #45a049;
  } */}

  a {
    color: #2196f3;
  }

  hr {
    border: 1px solid lightgrey;
  }

  span.price {
    float: right;
    color: grey;
  }
  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-25 {
      margin-bottom: 20px;
    }
  }
`;
