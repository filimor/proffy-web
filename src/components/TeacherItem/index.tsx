import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://userstock.io/data/wp-content/uploads/2017/09/michael-dam-258165-scaled.jpg" alt="Gabriela Soares"/>
                <div>
                    <strong>Gabriela Soares</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, impedit! Aperiam fugiat quos adipisci sint saepe nesciunt. Dicta ducimus corporis cum reiciendis voluptates ad obcaecati repellat laudantium facere rem. Quaerat.
                <br/><br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quasi dolorum suscipit nesciunt eius porro rerum optio eos dicta aut asperiores modi error rem molestias harum reprehenderit praesentium neque doloribus.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
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