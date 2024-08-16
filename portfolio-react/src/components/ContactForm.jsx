export default function ContacthtmlForm() {
  return (
    <form className="contact-form" action="#" method="post">
      <div className="input-block">
        <label htmlFor="name">
          Your Name <span className="text-required">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Your Full Name"
        />
      </div>
      <div className="input-block">
        <label htmlFor="email">
          Email <span className="text-required">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="input-block">
        <label htmlFor="company">
          I work at <span className="text-required">*</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          required
          placeholder="Enter Your Company Name"
        />
      </div>
      <div className="input-block">
        <fieldset>
          <legend>
            I am looking htmlFor (select multiple if needed)
            <span className="text-required">*</span>
          </legend>
          <div className="d-flex">
            <label>
              <input
                className="input-box"
                type="checkbox"
                name="services"
                id="web-development-services"
                value="Web Development Services"
              />
              <span className="radio-input">web development services</span>
            </label>
            <label>
              <input
                className="input-box"
                type="checkbox"
                name="services"
                id="web-design-services"
                value="Web Design Services"
              />
              <span className="radio-input">web design services</span>
            </label>
            <label>
              <input
                className="input-box"
                type="checkbox"
                name="illustrations"
                id="illustrations"
                value="Illustrations"
              />
              <span className="radio-input">Illustrations</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="input-block">
        <fieldset>
          <legend>
            My budget is <span className="text-required">*</span>
          </legend>
          <div className="d-flex">
            <label>
              <input
                className="input-box"
                type="radio"
                name="budget"
                id="budget-cad1"
                value="CAD $1500 - $3000"
              />
              <span className="radio-input">CAD $1500 - $3000</span>
            </label>
            <label>
              <input
                className="input-box"
                type="radio"
                name="budget"
                id="budget-cad2"
                value="CAD $3000 - $6000"
              />
              <span className="radio-input">CAD $3000 - $6000</span>
            </label>
            <label>
              <input
                className="input-box"
                type="radio"
                name="budget"
                id="budget-cad3"
                value="CAD $6001 and up"
              />
              <span className="radio-input">CAD $6001 and up</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="input-block">
        <label htmlFor="message">
          More details about the project
          <span className="text-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required=""
          rows="5"
          placeholder="Brief summary, your timeline, goals, etc."
        ></textarea>
      </div>
      <a href="#" className="more-btn btn-dark">
        <span className="bg-span">
          <span></span>
        </span>
        <span className="link-text relative">
          <span className="text-outer">
            <span className="text">Let's Do It</span>
          </span>
        </span>
      </a>
    </form>
  );
}
