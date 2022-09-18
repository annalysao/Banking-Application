function Withdraw(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [withdraw, setWithdraw]   = React.useState('');
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
        console.log(withdraw);
        if (!validate(withdraw,     'withdraw')) return;
        ctx.users.push({withdraw});
        setShow(false);
    }

    function clearForm(){
        setWithdraw('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                <input type="input" className="form-control" id="withdraw" placeholder="Enter withdrawl amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} />
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawl</button>
                </>
            )}
        />
    )
}