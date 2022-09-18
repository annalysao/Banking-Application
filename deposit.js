function Deposit(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [deposit, setDeposit]     = React.useState('');
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
        console.log(deposit);
        if (!validate(deposit,     'deposit')) return;
        ctx.users.push({deposit});
        setShow(false);
    }

    function clearForm(){
        setDeposit('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                <input type="input" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} />
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
            )}
        />
    )
}