import React, { useState } from 'react';
import './Contacto.css';  // Asegúrate de que el archivo de estilos esté disponible

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SendMailer(formData.email,formData.name,formData.subject, formData.message)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <img src="/img/logo.PNG" className="img-logo" alt="Logo" title="Inicio" />
          <p><strong>Teléfono:</strong> +54 9 3489 675553</p>
          <p><strong>Email:</strong> ezequiel87morelli@gmail.com</p>
          <p><strong>Ubicación:</strong> Merlo, Buenos Aires, Argentina.</p>
          <ul>
            <li>
              <a 
                href="https://wa.me/5493489675553?text=Hola%2C%20me%20comunico%20desde%20el%20E-Commerce%20de%20Herramientas%20Morelli.%20Estoy%20interesado%20en%20un%20producto%20y%20quisiera%20obtener%20más%20información."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="./img/whatsapp.png" alt="WhatsApp Icon" /> WhatsApp
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/herramientas.morelli/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="./img/instagram.png" alt="Instagram Icon" /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:ezequiel87morelli@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="./img/email.png" alt="Email Icon" /> Email
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h3>Formulario de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label htmlFor="subject">Asunto:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              required 
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
