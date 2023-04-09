import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="contacts__title">Get news and updates</h2>
        <div className="contacts__inner">
          <div className="contacts__form">
            <form action="" className="form">
              <input
                className="form__input"
                type="email"
                placeholder="E-mail"
              />
              <button className="form__btn" type="submit">
                GO
              </button>
            </form>

            <p className="contacts__text">
              By signing up you agree to receive updates and marketing messages
              (e.g. email, social, etc.) from Meta about Meta’s existing and
              future products and services. You may withdraw your consent and
              unsubscribe at any time by clicking the unsubscribe link included
              in our messages. Your subscription is subject to the Terms and
              Privacy Policy.
            </p>
          </div>
          <Link to="mailto:oculusshop@gmail.com" className="contacts__email">
            oculusshop@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
