import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './ContactUs.scss'

const ContactUs = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    message: ""
  });
  const { username, phone, email, message } = user; //user 객체 비구조화 할당

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); //...user로 불변성 유지와  [name]을 사용해서 현재 입력하고 있는 input의 name의 상태 변경.
  };

  const onReset = () => {
    setUser({ username: "", phone: "", email:"", message:"" });
  };

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
        <input type="submit" value='Send' onClick={onReset}/>
      </form>
    </div>
  )
}

export default ContactUs