import commentTrue from "../images/commentTrue.svg";
import commentFalse from "../images/commentFalse.svg";

function InfoTooltip({ isOpen, isSuccessful, onClose, ...props }) {


    return (
      <div className={isOpen ? `pop-up pop-up_active` : 'pop-up'}>
        <div className="pop-up__container pop-up__comment">
          <img className="pop-up__comment-icon" src={isSuccessful ? commentTrue : commentFalse} alt="Иконка состояния" />
          <h2 className="pop-up__comment-title">{isSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так!Попробуйте ещё раз."}</h2>
          <button
            className="pop-up__exit pop-up__exit-profile"
            type="button"
            aria-label="выход"
            onClick={onClose}
          ></button>
        </div>
      </div>
    )
}

export default InfoTooltip;