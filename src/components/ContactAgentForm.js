import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const ContactAgentForm = ({propertyId}) => {
  const [msgError, setMsgError] = useState(null);
  const [bootstrap, setBootstrap] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState('');
  const [msgByUser, setMsgByUser] = useState('');
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    return response.json();
  };
  
  const postMessage = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name.trim() || !phone.trim()) {
      let msg = "Le nom et numéro de téléphone sont obligatoires.";
      let bootstrapClass = "alert alert-danger";
      setBootstrap(bootstrapClass)
      setMsgError(msg)
      return;
    }

const phoneNumberRegex = /^(03[2,3,4,8])(\d{7})$|^(3[2,3,4,8])(\d{7})$/;
const phoneNumber = phone;
  
  if (phoneNumberRegex.test(phoneNumber)) {
    if (phoneNumber.length === 10 || phoneNumber.length === 9) {
      let data = {
        name,
        email,
        phone,
        message
      };
      try {
        const response = await postData( `${process.env.REACT_APP_PROXY}/api/message/`+propertyId, data);
        console.log(response);
        if (response.success === true){
          let msg = "Votre message a été envoyé avec succès";
          let bootstrapClass = "alert alert-success";
        setBootstrap(bootstrapClass)
        setEmail('')
        setMsgByUser('')
        setMsgError(msg)
        setName('')
        setPhone('')
        } else if(response.errors){
         let msg = response.errors.phone || response.errors.message || response.errors.email || response.errors.name;
         let bootstrapClass = "alert alert-danger";
         setBootstrap(bootstrapClass)
         setMsgError(msg)
        }else{
          let msg = response.error;
          let bootstrapClass = "alert alert-danger";
          setBootstrap(bootstrapClass)
          setMsgError(msg)
        }
      } catch (error) {
        console.log(error);
        let msg = "Une erreur s'est produite lors de l'envoi du message.";
        let bootstrapClass = "alert alert-danger";
       setBootstrap(bootstrapClass)
       setMsgError(msg)
      }
    } else {
      // Phone number has invalid length
      let msg = "votre numéro de téléphone n'est pas validé.";
      let bootstrapClass = "alert alert-danger";
      setBootstrap(bootstrapClass)
      setMsgError(msg)
    }
  } else {
    // Phone number has invalid format
    let msg = "votre numéro de téléphone n'est pas validé.";
    let bootstrapClass = "alert alert-danger";
    setBootstrap(bootstrapClass)
    setMsgError(msg)
  }
  };
  
  
  return (
<div className="bg-white widget border rounded">
  <h3 className="h4 text-black widget-title mb-3">
    contacter l'agent immobilier
  </h3>
  <form action="" className="form-contact-agent">
    <div className="form-group">
      <label htmlFor="name">Votre nom complet</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <input type="text" id="name" className="form-control" value = {name} onChange = {(e) =>setName(e.target.value)} required = "ON" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="phone">Téléphone</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">+261</span>
        </div>
        <input  type="number" id="phone" className="form-control"  value = {phone} onChange = {(e) =>setPhone(e.target.value)} required ="ON"/>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email">
        Email <nb style={{ color: "red" }}>(pas obligatoire)</nb>
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
        <input type="email" id="email" className="form-control"  value = {email} onChange = {(e) =>setEmail(e.target.value)} />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="message">Message <nb style={{ color: "red" }}>(pas obligatoire)</nb></label>
      <textarea  style={{ minHeight: '100px' }}  value = {msgByUser} onChange = {(e) =>setMsgByUser(e.target.value)} id="message" className="form-control"></textarea>
    </div>
    <div className="form-group">
      <input onClick={postMessage}
        type="submit"
        id="phone"
        className="btn btn-primary"
        defaultValue="Envoyer le message"
      />
    </div>
  </form>
  {msgError && (
        <div className={bootstrap}>
          {msgError}
        </div>
      )}
</div>
  );
};

export default ContactAgentForm;
