import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [inputText, setInputText] = useState('');
  const onReset = () => {
    setInputText('');
  }
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rd4wtw', 'template_nzsh94v', form.current, 'a89ckRrZRoiegQtLk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mail-form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' placeholder="이름을 입력해주세요."  value={inputText}/>
        <label>Phone</label>
        <input type="text" name='phone' placeholder="연락처를 입력해주세요."/>
        <label>Email</label>
        <input type="email" name='user_email' placeholder="메일주소를 입력해주세요."/>
        <label>Message</label>
        <textarea name='message' />
        <input type="submit" value='Send' onClick={onReset}/>
      </form>
    </div>
  )
}

export default ContactUs