import React from 'react';
//Used for SignUP
export default (props) => {
  const {

  } = props;



  return (
    <div>
    <section class="section p-b-80">
        <div class="container">

            <div class="row no-gutters">
                <div class="col-lg-4">
                    <div class="contact-info">
                        <div class="contact-info__item">
                            <h5 class="title--sm2">address:</h5>
                            <p class="value">Mission Bay, San Francisco, California</p>
                        </div>
                        <div class="contact-info__item">
                            <h5 class="title--sm2">PHONE NUMBER :</h5>
                            <p class="value">+1 (312) 547-0689</p>
                        </div>
                        <div class="contact-info__item">
                            <h5 class="title--sm2">email:</h5>
                            <p class="value">customersupport@receivesoftware.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <form class="form-contact js-contact-form" method="POST" action="#">
                        <div class="form-row no-gutters">
                            <div class="col-md-6">
                                <input class="au-input" type="text" name="name" placeholder="Name" required="required"></input>
                                <input class="au-input" type="email" name="email" placeholder="Email Address" required="required" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                                <input class="au-input" type="text" name="phone" placeholder="Phone" required="required"></input>
                            </div>
                            <div class="col-md-6 p-r-0">
                                <textarea class="au-textarea" name="message" placeholder="Message*" required="required"></textarea>
                                <div class="text-right">
                                    <button class="au-btn au-btn--solid" type="submit">Send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
