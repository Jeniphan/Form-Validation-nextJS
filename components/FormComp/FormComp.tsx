import React from 'react'
import style from './Formcomponent.module.css'
import { useState } from 'react'

const FormComponent = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorRePassword, setErrorRePassword] = useState('')

  const [userNameColor, setUserNameColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [rePasswordColor, setRePasswordColor] = useState('')


  const validateForm = (e: any) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName('');
      setUserNameColor('#ECB365')
    } else {
      setUserNameColor('red')
      setErrorUserName('กรุณาป้อนชื่อผู้ใช้งานจำนวน 8 ตัวอักษร')
    }

    if (email.includes("@")) {
      setEmailColor('#ECB365')
      setErrorEmail('');
    } else {
      setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
      setEmailColor('red')
    }

    if (password.length > 8) {
      setPasswordColor('#ECB365')
      setErrorPassword('');
    } else {
      setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
      setPasswordColor('red')
    }

    if (password === rePassword && rePassword != '') {
      setRePasswordColor('#ECB365')
      setErrorRePassword('');
    } else {
      setErrorRePassword('รหัสผ่านไม่ตรงกัน')
      setRePasswordColor('red')
    }

  }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={validateForm}>
        <h2 className={style.head}>แบบฟอร์มลงทะเบียน</h2>
        <div className={style.formcontrol}>
          <label>ชื่อผู้ใช้งาน</label>
          <input type="text" value={userName} onChange={
            (e) => setUserName(e.target.value)
          } style={{ borderColor: userNameColor }}></input>
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className={style.formcontrol}>
          <label>อีเมล</label>
          <input type="email" value={email} onChange={
            (e) => setEmail(e.target.value)
          } style={{ borderColor: emailColor }}></input>
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className={style.formcontrol}>
          <label>รหัสผ่าน</label>
          <input type="password" value={password} onChange={
            (e) => setPassword(e.target.value)
          } style={{ borderColor: passwordColor }}></input>
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className={style.formcontrol}>
          <label>ยืนยันรหัสผ่าน</label>
          <input type="password" value={rePassword} onChange={
            (e) => setRePassword(e.target.value)
          } style={{ borderColor: rePasswordColor }}></input>
          <small style={{ color: rePasswordColor }}>{errorRePassword}</small>
        </div>

        <button type="submit">ลงทะเบียน</button>
      </form >
    </div >
  )

}

export default FormComponent;