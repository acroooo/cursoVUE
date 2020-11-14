//VUE BASICS
//Esto lo puedo usar gracias al cdn en este ejemplo
const app = Vue.createApp({
    //recibe un objeto
    data() {
        //nuestros datos que vamos a ver reflejados en el id app
        return {
            titulo: 'Bank App Vue',
            cantidad: 1000,
            //en el caso del enlace tiene que empezar con https
            enlace:'https://www.google.com',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    //para los eventos, etc hay que trabajar con method
    //cada vez que se trabaja en computed o methods y se quiere acceder a data
    //se debe poner this adelante del dato que quiero traer

    //Se ejecutan cada vez que ocurra una re renderización
    methods: {
        //Objeto que recibe diferentes funciones
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true
                alert('Saldo en cero')
                return
            }
            this.cantidad -= valor
        }
    },
    //propiedades computadas, nos sirven para generar calculos en nuestros componentes
    computed: {
        //siempre tienen que retornar una información
        //dif con methods? => las props computadas se almacenan en cache
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculaTitulo(){
            return this.titulo.toUpperCase();
        }
    }
})