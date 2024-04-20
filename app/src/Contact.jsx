
export default function Contact() {
  return (
    <>
      <form className='contactForm content'>
        <h3>CONTACT ME</h3>
        <p>aidenmolyneaux@hotmail.com</p>

        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' required></input>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required></input>
        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' required></textarea>
        <button type='submit'>Submit</button>

        <div>
        </div>

        <div>
          <p></p>
        </div>
      </form>
    </>    
  );
}