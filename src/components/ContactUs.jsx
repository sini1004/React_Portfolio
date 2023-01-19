import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactUs.scss'

const ContactUs = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rd4wtw', 'template_nzsh94v', form.current, 'a89ckRrZRoiegQtLk')
      .then((result) => {
        alert('전송이 완료되었습니다.')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mail-form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' placeholder="이름을 입력해주세요." />
        <label>Phone</label>
        <input type="text" name='phone' placeholder="연락처를 입력해주세요." />
        <label>Email</label>
        <input type="email" name='user_email' placeholder="메일주소를 입력해주세요."/>
        <label>Message</label>
        <textarea name='message'/>
        <input type="submit" value='Send' className='btn'/>
      </form>
    </div>
  )
}

export default ContactUs