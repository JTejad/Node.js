const iva = 1.21;

const precios = [132, 450, 1230, 23, 10, 50, 230, 674, 131, 340];
    for (let precio of precios) {
        console.log(`El precio es: $${precio * iva}.-IVA incluido.`);
    }

