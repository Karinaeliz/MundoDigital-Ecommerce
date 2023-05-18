import NotebookDell from '../src/Assest/NotebookDell.webp'
import notebookLenovo from '../src/Assest/notebookLenovo.png'
import notebookIqual from '../src/Assest/notebookIqual.webp'
import impresoraHPInk from '../src/Assest/impresoraHPInk.webp'
import plotterHPDesignJet from '../src/Assest/plotterHPDesignJet.webp'
import multifuncion from '../src/Assest/multifuncion.webp'
import joystick from '../src/Assest/joystick.webp'
import FIFA20 from '../src/Assest/FIFA20.webp'
import consolaRetro from '../src/Assest/consolaRetro.webp'
import minicomponentePanacom from '../src/Assest/minicomponentePanacom.webp'
import smartTvEnova from '../src/Assest/smartTvEnova.webp'
import smartTv4K from '../src/Assest/smartTv4K.webp'

const products = [
    {
        id: '1',
        name: 'Notebook Lenovo Ideapad 3 14ITL6',
        price: 303.539,
        categoryId: 'Notebook',
        img: notebookLenovo,
        stock: 20,
        description: 'Marca del procesador: Intel - Línea del procesador: Core i7 - Modelo del procesador: 1165G7 Nombre del sistema operativo: Windows - Versión del sistema operativo: 11 - Memoria RAM: 4GB DDR4-3200 (soldada) + 4GB SO-DIMM DDR4-3200 (extraible)  Capacidad de Memoria Máxima: Hasta 12 GB (4GB soldada + 8GB SO-DIMM) DDR4-3200 - Capacidad del SSD: 512 GB ',
    },
    {
        id: '2',
        name: 'Notebook 14" Dell Latitude',
        price: 163.599,
        categoryId: 'Notebook',
        img: NotebookDell,
        stock: 25,
        description: 'NOTEBOOK 14" DELL LATITUDE 3410 WINDOWS 10 HOME Intel Core i3 / 4 GB RAM / 500 GB HDD 300901073 La duración prolongada de la batería supera todo su día de trabajo. Conectividad: Wi-Fi 6 AX201 2x2 802.11ax + Bluetooth 5.1 - Batería: De carga rápida (ExpressCharge™) de 40 Whr (3 celdas) ',
    },
    {
        id: '3',
        name: 'Notebook Iqual Nq1 Intel Celeron',
        price: 99.999,
        categoryId: 'Notebook',
        img: notebookIqual,
        stock: 20,
        description: 'Notebook Iqual Nq1 Intel Celeron N4020 4gb 128gb Ssd Windows',
    },
    {
        id: '4',
        name: 'Impresora HP Ink Tank 315',
        price: 110.879,
        categoryId: 'Impresión',
        img: impresoraHPInk,
        stock: 15,
        description: 'InkJet Color / Multifunción / Insumos: Botellas HP GT52 BK CMY / Conectividad: Usb Capacidad de Bandeja: 60 Hojas / Tamaño hoja: A4, B5, A6, Sobre DL, Tamaños de soportes personalizados 76,2 x 127 a 215 x 355 mm Velocidad (ppm): 8 ppm negro / 5 ppm color Volumen Mensual: Hasta 1000 Páginas',
    },
    {
        id: '5',
        name: 'ploter HP DesignJet',
        price: 818.519,
        categoryId: 'Impresión',
        img: plotterHPDesignJet,
        stock: 8,
        description: 'Velocidad de impresión: Hasta 76 páginas por hora en tamaño A1 - Resolución de impresión: 2400 x 1200 ppp - Tecnología: Inyección térmica de tinta HP - Rendimiento de páginas: 20 ml de tinta producen 101 páginas A1/D ',
    },
    {
        id: '6',
        name: 'Impresora HP LaserJet Pro ',
        price: 358.519,
        categoryId: 'Impresión',
        img: multifuncion,
        stock: 10,
        description: 'Velocidad De Impresión, Negro: 41 - 50 - Color: Blanco y Negro - Tipo De Producto: Impresoras Láser - Familia: LaserJet - Segmento: Empresarial - Uso: Equipo de trabajo pequeño - Funciones: Imprimir, Escanear, copiar y Fax  ',
    },
    {
        id: '7',
        name: 'JOYSTICK GAMEPAD SONY',
        price: 33.039,
        categoryId: 'Gaming',
        img: joystick,
        stock: 10,
        description: 'Tipo de Joystick: Gamepad -Formato de Uso: Digital y Analógico -Conexión USB: Sí -Respuestas de Vibración: Sí-Conectividad de Joystick: Inalámbrico-Consola/s Compatible/s: PS4-Detección de Movimientos de Mando: Sí-Modo de Alimentación: Bateria-Respuestas de Vibración: Sí-Color: Camuflado ',
    },
    {
        id: '8',
        name: 'FIFA 20 PS4 Electronic Arts',
        price: 8.399,
        categoryId: 'Gaming',
        img: FIFA20,
        stock: 8,
        description: 'Formato: Físico. Genero: Deportes. Sub-Genero: Futbol. Requiere Control Especial: No. Voces: Ingles y Español. Textos: Ingles y Español. Generales Origen: Estados Unidos Formato: Físico Genero: Deportes Sub-Genero: Futbol Requiere Control Especial: No Voces: Ingles y Español Textos: Ingles y Español Garantía Duración: 3 meses ',
    },
    {
        id: '9',
        name: 'Consola Level Up Retro Boy',
        price: 7.999,
        categoryId: 'Gaming',
        img: consolaRetro,
        stock: 7,
        description: 'Modelo de Consola: Otros. Unidad Óptica: No. Conectividad de Joystick: Cableado. Color: Blanco. Salida RCA: 1',
    },
    {
        id: '10',
        name: 'Minicomponente Panacom SP-1762',
        price: 179.999,
        categoryId: 'AudioyTv',
        img: minicomponentePanacom,
        stock: 25,
        description: 'Autonomía de la batería: 4 h Marca: Panacom Configuración de canales: TODOS Incluye batería recargable: Sí Incluye soporte: Es portátil: Sí -Es inalámbrico: Sí -Potencia de salida (RMS): 40 W Cantidad de parlantes: 2 Tipos de filtros del parlante: 1 Formato del parlante: Caja Tipos de parlante: CAJA PORTÁTIL ENTRADA DE MICRÓFONO SUBWOOFER 12"X2 Con base: Sí Con Bluetooth: Sí Con modo manos libres: No Con controladores DJ integrados: Sí Con función karaoke: Sí Con luces LED: Sí Con micrófono: Sí Con radio: Sí Con efecto de voz: No Con Wi-Fi: No',
    },
    {
        id: '11',
        name: 'Smart Tv Enova',
        price: 124.999,
        categoryId: 'AudioyTv',
        img: smartTvEnova,
        stock: 12,
        description: '* Tamaño de Pantalla: 50 * Pantalla: 4K UHD * Resolución: 3840 x 2160 px * Relación de contraste: 5000:1 * Tiempo de respuesta: 8 ms * Escala de pantalla: 16:09 * HDR 10 * Angulo de Visión: H: 178º | V: 178º * Tecnología de Audio: Dolby (Dolby Digital, Dolby Digital Plus) * Conectividad: Wifi / Bluetooth / (3) HDMI tipo A 2.0 / (2) USB tipo A 2.0 * Audio salida digital: óptico (toslink) * Salida de audio: Jack 3,5 mm * Sistema Operativo: Android Tv * Apps: Netflix, Youtube, Amazon Prime * Chromecast * Control parental por software ',
    },
    {
        id: '12',
        name: 'Smart Tv 4K',
        price: 374.999,
        categoryId: 'AudioyTv',
        img: smartTv4K,
        stock: 6,
        description: 'TELEVISOR SMART TV 4K UHD 65" SAMSUNG CRYSTAL BU8000 CON SISTEMA TIZEN UN65BU8000GCZB • COLORES REALISTAS EN ESTADO PURO CON DYNAMIC CRYSTAL COLOR Sumergite en la imagen con mil millones de tonos de color. Dynamic Crystal Color ofrece variaciones realistas para que puedas ver todos los detalles. • AIRSLIM: ELEGANTE Y MÁS DELGADO QUE NUNCA El perfil delgado de tu TV se integra perfectamente en la pared, dándole al espacio una apariencia fascinante. • PROCESADOR CRYSTAL 4K La potente mejora de 4K garantiza que obtengas una resolución de hasta 4K para tu contenido favorito. Experimentá todos los detalles de la imagen.  ',
    },


]

export const getProducts= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductById= (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 2000)
    })
}
export const getProductsByCategory= (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productCategoria= products.filter(prod => prod.categoryId === categoryId );
            resolve(productCategoria);
        }, 2000)
    })
}

