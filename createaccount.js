function CreateAccount(){
    const [show, setShow]                   = React.useState(true);
    const [status, setStatus]               = React.useState('');
    const [name, setName]                   = React.useState('');
    const [email, setEmail]                 = React.useState('');
    const [password, setPassword]           = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        else if (password.length < 8)
            setStatus('Error: ' + 'Password must be at least 8 characters');
            feedback('Enter a password of at least 8 characters');
            setTimeout(() => setStatus(''),3000);
            return false;
        return true;
    }

    function handleCreate(){
       
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

    const checkButton = function (){
    
        if (name === ''  )
        return 'disabled';
        if (email === '')
        return 'disabled';
        if (password ==='' )
        return 'disabled';
    
        return;
     
      }
    function checkButtonA(){
        
        if (name === ''  )
        return 'true';
        if (email === '')
        return 'true';
        if (password ==='' )
        return 'true';
        else
        return 'false';
     
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
                    onChange={e =>
                        setName(e.currentTarget.value)
                    }
                    /><br/>
                Email address<br/>
                <input 
                    type="input" 
                    className="form-control"
                    id="email" 
                    placeholder="Enter email"  
                    value={email} 
                    onChange={e =>
                        setEmail(e.currentTarget.value)
                    }
                    /><br/>
                Password (8 character minimum)<br/>
                <input 
                    type="password" 
                    required className="form-control"
                    id="password" 
                    placeholder="Enter password"  
                    minlength="8" 
                    value={password} 
                    onChange={e => 
                        setPassword(e.currentTarget.value)
                    }   
                    /><br/>
                <button 
                    type="submit" 
                    className= {`btn btn-light ${checkButton()}`}
                    onClick={handleCreate}
                    disabled={!name||!email||!password}
                    // aria-disabled={` ${checkButtonA()}`}
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