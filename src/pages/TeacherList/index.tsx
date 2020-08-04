import React from 'react';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
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
            </main>
        </div>
    );
}

export default TeacherList;