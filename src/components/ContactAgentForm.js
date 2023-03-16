const ContactAgentForm = () => {
  return (
    <div className="bg-white widget border rounded">
      <h3 className="h4 text-black widget-title mb-3">
      contacter l'agent immobilier
      </h3>
      <form action="" className="form-contact-agent">
        <div className="form-group">
          <label htmlFor="name">Votre nom complet</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input type="text" id="phone" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <div style={{ color: "red" }}>(n'est pas obligatoire)</div>
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <input
            type="submit"
            id="phone"
            className="btn btn-primary"
            defaultValue="Envoyer le message"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactAgentForm;
