        //codigo de JavaScript
        
        //alert('Bienvenidos a JavaScript');

        //Mensajes en consola del navegador
        console.log('Bienvenidos a JavaScript');
        console.log(5+3);

        //Mostrar mensajes en el navegador
        document.write('Un gusto saludarte en este curso 😎');

        //Variables
        //Las variables son espacios en memoria que usamos para guardar datos
        //Primero: se las declara(se las crea)
        //Segundo: se las inicializa (le voy a asignar un valor a la variable existente)

        var nombre;
        nombre='vero'

        let apellido = 'Menichetti';

        const pi = 3.14

        apellido = 'Perez';

        // pi = 'otra cosa';

        //Tipo de Datos
        //String
        let cliente = 'Fabrizio'
        let alumno = 'Roberto Gonzalez'
        let mensaje = 'Hola Mundo, soy feliz'

        //CamelCase
        let alumnoprincipal='Ellie'
        let alumno_malo='Carlos'

        //UpperCamelCase
        let AlumnoSecundario=''

        //number
        let numero1=34
        let numero2=-52
        let numero3=56.89
        let num1 = 20;
        let num2 = 2;

        //Boolean
        let comprar = true
        let comer = false

        //null
        let billetera = null

        //undefined
        let caja=0;

        //array o arreglos
        let arreglo = ['Vero',36,false];
        let alumnos = ['Jose','Alberto','Florinda'];

        //Object u Objetos
        let persona = {
                nombre: 'Josefina',
                apellido: 'Mandarino',
                edad: 33
        }

        //OPERADORES
        //Aritmeticos
        let suma = numero1 + numero2;
        let resta = numero1 - numero2;
        let multiplicacion = numero1 * numero3;
        let division = numero1 / numero2;
        let resto = num1 % num2;

        //Unitarios
        ++num2
        --num2

        //Relacionales
        num1=22;
        num2='22'
        console.log(num1 === num2);
        console.log(num1 >= num2);
        console.log(numero1 <= numero2);
        console.log(numero1 != numero2);

        console.log('El resultado de la suma es ' + suma);
        console.log('El resultado de la resta es' , resta);

        //Negacion
        let activado = true
        console.log(!activado)