

function Relogio() {
    var dataAtual = new Date();

    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horarioAtual = horas + ':' + minutos + ':' + segundos;

    return (
        <div className="Relogio">
            <p>{horarioAtual}</p>
            <p>{dataAtual.toLocaleDateString()}</p>
        </div>
    );
}

export default Relogio;
