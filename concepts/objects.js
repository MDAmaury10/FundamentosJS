const tsuru = {
    model:2000,
    color:'verde',
    kilometers:200000,
    engine: '2.0 litros'
}
console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);
tsuru.engine = '4.0 litros';
console.log(tsuru);

tsuru.collitions = 5;
console.log(tsuru);
tsuru['numero placas'] = 'XD 666 X';
console.log(tsuru);

tsuru.services = [2005, 2010, 2015, 2020];
console.log(tsuru["services"]);
tsuru.status = 'apagado';

tsuru.start = function(){
    console.log('Revisión de sistema');
    console.log('Revisando niveles');
    console.log('R!');
    console.log('R!');
    console.log('R!');
    this.status = 'Encendido';
}

tsuru.start();
console.log(tsuru.status);

tsuru['turn off'] = function(){
    console.log('Apagandose...')
    this.status = 'Apagado';
    console.log(this.status);
}

tsuru['turn off']();

delete tsuru['numero placas'];
console.log(tsuru);