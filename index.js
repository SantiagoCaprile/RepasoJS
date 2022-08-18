Empresas = [
    {
        nombre: "YPF",
        rubro: "Petrolero",
        empleados: [
            {
                nombre: "Julian",
                profesion: "Gerente",
                edad: 45,
                estSecundarios: "Bachiller Económico",
                estUniversitarios: "Adm de empresas"
            },
        ]
    },
    {
        nombre: "Shell",
        rubro: "Petrolero",
        empleados: []
    },
    {
        nombre: "Honda",
        rubro: "Automotor",
        empleados: []
    },
    {
        nombre: "Fiat",
        rubro: "Automotor",
        empleados: []
    },
    {
        nombre: "Intel",
        rubro: "Electronico",
        empleados: []
    }
]

const empresasAutomovil = Empresas.filter(empresa => empresa.rubro === "Automotor")

console.log(empresasAutomovil);
