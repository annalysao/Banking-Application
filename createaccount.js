function CreateAccount(){
    const [show, setShow]                   = React.useState(true);
    const [status, setStatus]               = React.useState('');
    const [name, setName]                   = React.useState('');
    const [email, setEmail]                 = React.useState('');
    const [password, setPassword]           = React.useState('');
    const [formCompleted, setFormCompleted] = React.useState(false);
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name,     'name')) return;
        if (!validate(email,    'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:0});
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setFormCompleted(false);
        setShow(true);
    }
    
    function inspectFormStatus() {
        setFormCompleted(name && email && password);
      }

    return (
        <Card
            bgcolor="info"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input 
                    type="input" 
                    className="form-control"
                    id="name" 
                    placeholder="Enter name"  
                    value={name} 
                    onChange={e => {
                        setName(e.currentTarget.value);
                        inspectFormStatus()
                        }}
                    onBlur={(e) => inspectFormStatus()}
                    /><br/>
                Email address<br/>
                <input 
                    type="input" 
                    className="form-control"
                    id="email" 
                    placeholder="Enter email"  
                    value={email} 
                    onChange={e => {
                        setEmail(e.currentTarget.value); 
                        inspectFormStatus()}
                    }
                    onBlur={(e) => inspectFormStatus()} 
                    /><br/>
                Password<br/>
                <input 
                    type="password" 
                    required className="form-control"
                    id="password" 
                    placeholder="Enter password"  
                    minlength="8" 
                    value={password} 
                    onChange={e => {
                        setPassword(e.currentTarget.value);
                        inspectFormStatus();
                    }} 
                    onBlur={(e) => inspectFormStatus()}   
                    /><br/>
                <button 
                    type="submit" 
                    className="btn btn-light" 
                    onClick={handleCreate}
                    disabled={!formCompleted}
                    >Create Account
                </button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    )
}