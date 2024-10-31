import './gradientbtnTwo.css'

export default function GradientBtnTwo({ text, type }) {
  return (
    <button type={type} className="gradientBtn_componentTwo">
      {text}
    </button>
  )
}
