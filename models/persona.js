let Persona = function(nombre, apellido, sexo, fecha_nacimiento, edad, etnia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.fecha_nacimiento = fecha_nacimiento;
    this.edad = edad;
    this.etnia = etnia;
};

Persona.getNombre = function() {
    return nombre;
}

Persona.getApellido = function() {
    return apellido;
}

Persona.getSexo = function() {
    return sexo;
}

Persona.getFecha_nacimiento = function() {
    return fecha_nacimiento;
}

Persona.getEdad = function() {
    return edad;
}

Persona.getEtnia = function() {
    return etnia;
}

Persona.prototype.toString = function() {
    return `nombre: ${this.nombre} | apellido: ${this.apellido}`;
};

module.exports = Persona;