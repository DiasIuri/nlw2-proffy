import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/32201545?s=460&u=53d67b995dd3c41a1abf3baddfe8aa4f8d839e25&v=4" alt="Iuri Dias"/>
        <div>
          <strong>Iuri Dias</strong>
          <span>Estruturas de Dados</span>
        </div>
      </header>
      
      <p>
        Estudante de Engenharia da Computação, desenvolvedor fullstack.
        <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ut eros at posuere. In a mauris nec sem viverra interdum quis et quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      
      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
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