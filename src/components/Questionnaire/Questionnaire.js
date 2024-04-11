import React from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';

const Questionnaire = () => {
  const options1 = ['клиентах (КЛ)', 'конкурентах (КО)', 'социальных тенденциях (СО)', 'технологических тенденциях (ТТ)'];
  const options2 = ['своих экспертов (СВ)', 'сторонних экспертов (СТ)', 'заказчиков и клиентов (ЗК)', 'поставщиков (ПО)'];

  return (
    <div>
      <h1>Насколько наше предприятие ориентировано на знания?</h1>
      <div>
        <h2>Первая вкладка</h2>
        <Question category="СИ" text="Мы собираем информацию о:" options={options1} />
      </div>
      <div>
        <h2>Вторая вкладка</h2>
        <Question category="ФО" text="Мы регулярно проводим форумы с участием:" options={options2} />
      </div>
      <Link to="/results">Посмотреть результаты</Link>
    </div>
  );
}

export default Questionnaire;
