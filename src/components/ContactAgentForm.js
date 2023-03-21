import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMessage } from "../hooks/useMessage";

const ContactAgentForm = ({ propertyId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resetInput, setResetInput] = useState(false); // new state

  const resetAllInputs = () => {
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setResetInput(false); // reset the resetInput state
  }

  const { postMessage, isLoading, msgError, bootstrapClassname, resetAgentInput } = useMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    postMessage(name, phone, email, message, propertyId);
  };

  useEffect(() => {
    if (resetAgentInput) {
      resetAllInputs();
    }
  }, [resetAgentInput, resetInput]);

  return (
    <div className="bg-white widget border rounded">
      <h3 className="h4 text-black widget-title mb-3">
        contacter l'agent immobilier
      </h3>
      <form action="" className="form-contact-agent" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Votre nom complet</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // required="ON"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">+261</span>
            </div>
            <input
              type="number"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              // required="ON"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <nb style={{ color: "red" }}>(pas obligatoire)</nb>
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <nb style={{ color: "red" }}>(pas obligatoire)</nb>
          </label>
          <textarea
            style={{ minHeight: "100px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            id="phone"
            className="btn btn-primary"
            defaultValue="Envoyer le message"
            disabled={isLoading}
          />
        </div>
      </form>
      {msgError && <div className={bootstrapClassname}>{msgError}</div>}
    </div>
  );
};

export default ContactAgentForm;
