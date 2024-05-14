
function Data() {
    var dataAtual = new Date();

    return (
        <div className="Data">
            <p>{dataAtual.toLocaleDateString()}</p>
        </div>
    );
}

export default Data;
