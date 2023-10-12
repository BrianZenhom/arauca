import './faqs.css';
import Accordion from './../../../../components/accordion/Accordion';

const data = [
  {
    question: '¿Cuándo agregan más camisetas?',
    answer:
      'Es un proyecto de un grupo con una visión, de crear una marca de camisetas, que represente bien la autenticidad de la persona. Inspira a ser uno mismo, y fiel a sus valores. Manteniendo siempre como prioridad el amor propio.',
  },
  {
    question: '¿Cuándo llega mi pedido?',
    answer:
      'Es un proyecto de un grupo con una visión, de crear una marca de camisetas, que represente bien la autenticidad de la persona. Inspira a ser uno mismo, y fiel a sus valores. Manteniendo siempre como prioridad el amor propio.',
  },
  {
    question: '¿Qué es ARAUCA?',
    answer:
      'Es un proyecto de un grupo con una visión, de crear una marca de camisetas, que represente bien la autenticidad de la persona. Inspira a ser uno mismo, y fiel a sus valores. Manteniendo siempre como prioridad el amor propio.',
  },
  {
    question: '¿Hacen envíos a toda europa?',
    answer:
      'Es un proyecto de un grupo con una visión, de crear una marca de camisetas, que represente bien la autenticidad de la persona. Inspira a ser uno mismo, y fiel a sus valores. Manteniendo siempre como prioridad el amor propio.',
  },
];

export default function Faqs() {
  return (
    <section id='faqs' className="faqs_section">
      <article className="faqs_content container">
        <header className="title">
          <h2>FAQs</h2>
          <span>Debajo encontrará preguntas frecuentes.</span>
        </header>
        <div className="faqs_preguntas-content">
          <Accordion sections={data} />
        </div>
        <article className="faqs_more">
          <h3>¿Tienes otra duda?</h3>
          <span>
            Nos encantaría ayudarte. Mandanos un email a consultas@arauca.eu{' '}
            <br />
            asunto &quot;OTRA PREGUNTA&quot; y te responderemos cuanto antes
          </span>
        </article>
      </article>
    </section>
  );
}
