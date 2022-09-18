function Home(){
    return (
        <Card
            bgcolor="success"
            txtcolor="white"
            header="Home"
            title="Welcome to the bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}