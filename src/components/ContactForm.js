

const ContactForm = () => {
  return (
    <form action="">
      <div class="form-wrapper">
        <label for="name">Name</label>
        <input type="text" id="name" name="Name" placeholder="Full name" />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@mail.com" />

        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="xxx xx xxx" />

        <label for="message">Message </label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>

      </div>
      <button>Submit</button>
    </form>

  );
};

export default ContactForm;