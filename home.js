function Home(){
    return (
        <Card
            bgcolor="info"
            txtcolor="white"
            header="Home"
            title="Welcome to Bad Bank"
            text="Thank you for your continued trust"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}