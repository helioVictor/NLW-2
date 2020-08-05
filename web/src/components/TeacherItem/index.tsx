import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img src="/"/>
            <div>
              <strong>Diego Fernandes</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            primeiro texto
            <br /><br />
            Segundo texto de descricao
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 20</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>

        </article>
    );
}

export default TeacherItem;