import './faqs.css'
import Accordion from './../../../../components/accordion/Accordion'

const data = [
  {
    question: '¿Cuánto tarda en llegar el pedido?',
    answer: `España:
      Entre 1 y 3 días laborales.
      
      Unión Europea:
      ¡Todavía no llegamos! Somos como un cachorro de tigre, lindos y peligrosos.

      Internacional:
      No realizamos envíos internacionales.
      `,
  },
  {
    question: '¿Puedo realizar la devolución?',
    answer: `¡Pero claro que si! Siempre y cuando sea dentro de los primeros 14 días naturales desde la recepción del pedido, el producto debe estar con su embalaje original, sus etiquetas y sin ningún tipo de daño o modificación de su estado inicial. Pero te adelantamos que te encantará, ¡No querrás devolverlo!`,
  },
  {
    question: '¿Cómo localizo mi pedido?',
    answer: `En el momento de la compra y que enviemos tu pedido recibirás un correo con la confirmación de compra y un número de tracking con la empresa de envíos para que puedas hacer el seguimiento cuando tú quieras`,
  },
  {
    question: '¿Cuáles son las formas de pago?',
    answer: `Para nosotros tu seguridad, tu tranquilidad y bienestar, está primero. Por eso te contamos que tenemos un certificado de seguridad SLL que hace a tus datos invisibles y completamente encriptados para los “amigos de lo ajeno “. 
      Podrás hacer el pago con tarjeta de crédito, transferencia bancaria, Apple Pay y Google Pay.
      `,
  },
  {
    question: '¿Cuál es mi talla?',
    answer: `Todavía no nos conocemos muy bien, pero te adelantamos que en nuestras fotos encontrarás a los modelos con su altura y la talla que está usando.
      Si todavía te quedan dudas sobre la talla, que no sea por dudar en consultar con nosotros en atención@arauca.eu, te vamos a tratar de ayudar en todo lo que podamos! Y si aún así querés estar seguro, tenemos nuestro medidor de talles en cada producto y en el medidor de talles (linkear hipervínculo a medidor de talla), pero te avisamos que puede variar un poco estas medidas.
      `,
  },
]

export default function Faqs() {
  return (
    <section id="faqs" className="faqs_section">
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
  )
}
