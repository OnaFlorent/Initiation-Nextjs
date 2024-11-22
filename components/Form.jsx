const Form = () => {
  return (
    <form className="flex flex-col gap-4">
        <input type="text" className="input" placeholder="Nom et prénom" />
        <input type="text" className="input" placeholder="Adresse e-mail" />
        <input type="text" className="input" placeholder="Numéro de téléphone" />
        <textarea className="textarea mb-2" placeholder="Votre message" />
        <button type="submit" className="btn self-start">Envoyer le message</button>
    </form>
  )
}

export default Form