import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Header from "../../../components/Header";
import Image from "next/image";
import Carousel from "../../../components/Carousel";
import ShareButtons from "../../../components/ShareButtons";

const Log: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-auto items-start w-11/12 md:w-1/2">
        <h1 className="text-2xl lg:text-4xl font-semibold justify-start">
          Bosquegracias x Newtro
        </h1>
        <h5 className="justify-start">Bitácora de la residencia </h5>
        <p className="text-xs mr-4">May 21, 2024</p>
        <div className="flex items-center justify-between w-full mx-auto my-4 border-b border-fourth-green">
          <div className="flex items-center pb-2 leading-6">
            {/* <Image
              src="/pfp.png"
              width={40}
              height={40}
              className="rounded-full object-none"
              alt=""
            /> */}
            {/* <p className="text-xs font-semibold ml-2">RocioMio</p> */}
          </div>
        </div>
        {/* DIA 1 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 1</strong>
          <br></br><br></br>
          Como una reunión muy especial a la que nadie quiere faltar ni llegar
          tarde, la Residencia Bosque Gracias tuvo sus días previos de
          preparación, con el tiempo suficiente para darnos la bienvenida y
          adaptarnos al ritmo y los modos que el bosque sugeriría durante los
          próximos días.<br></br><br></br>
          La propuesta del encuentro siempre estuvo clara: queríamos conocernos,
          contar nuestras experiencias en relación a cada práctica artística,
          con el agregado especial de estar habitando un entorno natural
          imponente, co-creando con la naturaleza y en comunidad durante varios
          días.<br></br><br></br>
          Conocer los senderos del bosque fue una de las primeras actividades.
          Tuvimos la posibilidad de hacer un recorrido consciente a través de
          este ecosistema natural donde la vegetación sorprende a cada paso por
          su diversidad de colores, formas, texturas y patrones. No bastó mucho
          tiempo para que recorrer estos caminos se transforme en un ritual
          inspirador, donde una simple caminata era capaz de impulsar una nueva
          obra de arte.<br></br><br></br>
          Observar y co-crear con la naturaleza en 2024, también significa
          contar con cámaras analógicas y digitales, GPS, celulares para hacer
          fotogrametría, scanner portátil, etc; todas herramientas que como
          artistas digitales nos sirven para generar registros vívidos de todo
          lo que nos provee el bosque y experimentar.<br></br><br></br>
          Varios artistas viajamos desde alguna ciudad, donde el ruido y la
          celeridad con la que se vive diariamente, muchas veces nos quita la
          capacidad de estar presentes en tiempo y espacio. Respirar profundo,
          conectar con nuestro cuerpo, con nuestra mente, con nuestro entorno.
          <br></br><br></br>
          Una sesión de meditación guiada por la mañana fue perfecta como
          actividad de apertura, ya que permitió el intercambio de primeras
          impresiones, pareceres, intenciones, agradecimientos, chistes, risas y
          la reflexión final sobre la invitación que nos estaba haciendo Bosque
          Gracias para co-crear juntos durante toda la semana. <br></br><br></br>
          Por la tarde, comenzamos con el cronograma de talleres artísticos. El
          primer taller estuvo a cargo de{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/bosquegracias/"
            rel="noreferrer"
          >
            Rocío Mio
          </a>
          , nuestra anfitriona, que muy solidariamente nos contó con lujo de
          detalles toda su experiencia fabricando y utilizando sus propias
          tintas vegetales con frutos recolectados del bosque. <br></br><br></br>
          Además de maravillarnos por el color y el comportamiento no
          convencional de las tintas, tuvimos además una introducción a la
          pintura con acuarelas a cargo de{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/ignacioysidro/"
            rel="noreferrer"
          >
            Ignacio Ysidro
          </a>
          . Fue muy interesante ver a alguien con tantos años de experiencia,
          encontrándose por primera vez con cada una de estas tintas, probando
          técnicas y compartiendonos todo el abanico de posibilidades expresivas
          alrededor de esta técnica.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D1/D1_09.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 2 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 2</strong>
          <br></br><br></br>
          La “Casa Madre” es la casa central de Bosque Gracias, el único punto
          con conexión a internet wifi. Era muy fácil salir de la casa y
          desconectarse por un rato, así también entrar y conectar
          inmediatamente con la energía creativa de cada colega trabajando entre
          charlas y mates.
          <br></br><br></br>
          Temprano tuvimos una presentación de lujo por parte de{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/ber.sektor/"
            rel="noreferrer"
          >
            Ber Sektor
          </a>
          , artista pixel y co-creador de Shitty Games, una desarrolladora de
          videojuegos indie con más de 10 años de historia fabricando juegos
          sobre sucesos de la cultura argentina. Además nos acercó varias
          herramientas y yeites para experimentar, e incluso hacer animaciones
          con pixel art.
          <br></br><br></br>
          Como parte del intercambio durante los días de la residencia también
          estaba la posibilidad de crear pósters en blanco y negro hechos con
          impresora laser.{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/durumbreaks/"
            rel="noreferrer"
          >
            Gonz
          </a>{" "}
          y{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/santiago_ruau/"
            rel="noreferrer"
          >
            Santiago Ruau
          </a>{" "}
          pudieron dejar su huella en la Casa de Residencias, montando sus obras
          en un collage colaborativo en el que ya han participado otros amigos
          artistas como{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/takashoshi/"
            rel="noreferrer"
          >
            Takashoshi
          </a>
          , Juanito, y{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/takashoshi/"
            rel="noreferrer"
          >
            Pamilo Ceirone.
          </a>
          <br></br><br></br>
          Por la tarde, recibimos a un grupo de artistas y vecinos de Epuyén
          para brindarles una charla introductoria sobre Arte y Web3. Nuestro
          proyecto nació en plena virtualidad, algo que hace que valoremos el
          doble la posibilidad de encontrarnos personalmente y compartir nuestra
          experiencia. Nuestra intención fue llevar a la comunidad una serie de
          discusiones que sirvan como punto de partida para formar un
          pensamiento crítico al respecto. Entendiendo la blockchain como
          herramienta tecnológica, así también como fenómeno social, y no sólo
          dejarnos llevar por idealizaciones o prejuicios.
          <br></br><br></br>
          Durante la sesión, exploramos mitos, dudas y desafíos relacionados a
          nuestra práctica como artistas en web3. Fue emocionante ver a los
          artistas escanear obras impresas, o fotografiar piezas cerámicas.
          Surgieron varias ideas y estrategias sobre digitalización, se habló
          sobre cómo funcionan los mercados digitales y por supuesto alguna que
          otra colaboración espontánea entre los residentes.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D2/D2_09.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 3 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 3</strong>
          <br></br><br></br>
          El mundo de las cyanotipias, una técnica fotográfica que nos sumerge
          en el arte del revelado directo bajo la luz solar, se destaca por ser
          un proceso de revelado poco tóxico, lo que la convierte en una opción
          amigable con el medio ambiente y perfectamente viable para su
          realización en entornos rurales, contribuyendo así a la preservación
          del agua y la sostenibilidad.
          <br></br><br></br>
          Este taller provisto por Rocio Mio fue uno de los más esperados por
          los residentes. Había mucha expectativa sobre la idea de recolectar
          cosas y apilar cuerpos opacos sobre la hoja, y con una solución
          fotosensible experimentar la magia de crear imágenes únicas en tonos
          de azul, explorando el uso del monocromo y la luz de una manera
          totalmente nueva.
          <br></br><br></br>
          Nuestra búsqueda nos llevó por caminos inexplorados, donde encontramos
          una variedad de objetos inusuales: plantas, chapas, lámparas,
          semillas, juguetes y redes, todo ello válido para expresarnos
          artísticamente. Cada uno de nosotros descubrió tesoros ocultos y
          herramientas improvisadas, desde cámaras estenopeicas hasta
          proyectores hechos con cráneos.
          <br></br><br></br>
          ¡El resultado fue asombroso! La casa madre se transformó en un mar de
          hojas azules con obras cyanotípicas por todos lados. El proceso nos
          dejó maravillados y reflexionando sobre las infinitas posibilidades
          creativas que ofrece esta técnica. Fue una experiencia que nos dejó
          completamente cautivados, y que nos brindó innumerables oportunidades
          para explorar y experimentar.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D3/D3_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 4 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 4</strong>
          <br></br><br></br>
          Luego de varios días, la sinergia entre los residentes ya era una
          realidad. Surgieron colaboraciones espontáneas y obras en proceso de
          creación, todas inspiradas en las vivencias durante la residencia.
          Además de disfrutar de almuerzos reconfortantes, también aprovechamos
          las tardes para sumergirnos en las aguas del río y tener tiempo para
          compartir juntos y explorar otros saberes como por ejemplo el bordado,
          una propuesta extendida del taller de pixel art por parte de
          BerSektor.
          <br></br><br></br>
          Por la noche, se desarrolló una jam de audio y video colaborativa, en
          la que compartimos software, pantallas y datos. Contamos con
          proyectores, parlantes, controladores midi, micrófonos, sintetizadores
          e instrumentos de percusión. Realizamos algunas pruebas de mapping,
          intercambiamos técnicas de VJing y, junto a la música que acompañó
          durante toda la sesión, generamos un diálogo ritual orgánico entre el
          audio y la imagen.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover  aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover   aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D4/D4_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 5 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 5</strong>
          <br></br><br></br>A este punto de la residencia, el nivel de compromiso de los
          artistas con el proceso de experimentación ya era indiscutible. La
          colección de la Residencia Bosque Gracias x Newtro ya tenía decenas de
          obras publicadas y el ritmo de trabajo fluía entre disfrutar de las
          bondades del bosque y crear con lo que nos inspiraba.
          <br></br><br></br>
          Por la tarde noche, realizamos una lectura que trajo           <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/lucasoxx_/"
            rel="noreferrer"
          >Lucasoxx</a> {" "}
 para
          poder debatir aspectos de nuestra práctica; en esta ocasión sobre la
          jerarquía de valores que proponen los espacios de circulación de los
          archivos multimedia, sobre todo en redes sociales, y la
          (in)materialidad del arte digital en internet. <br></br><br></br>
          Encontramos en esta reflexión muchas preguntas acerca de cúal es la
          materialidad que compone la obra final; si no es más que un registro
          en la blockchain, y un archivo alojado que se puede reproducir,
          replicar y/o remixar; transformando algo nuestro en algo distinto, de
          otro, de todos, del mundo. Estos encuentros no pretenden encontrar
          respuestas sino seguir catalizando reflexiones alrededor de la
          práctica artística en web3.
          <br></br><br></br>
          Finalizamos con una sesión de experimentación con videoarte, donde
          pudimos montar un estudio improvisado con cámaras analógicas y
          procesadores de video, pantalla gigante, televisor de tubo,
          controlador midi, y todo lo necesario para explorar técnicas de
          feedback y colorización, acercándonos también a las prácticas del
          glitch art, un género que artistas como JottaRS, Zoen, Gonz y
          Lucasoxx, llevan experimentando hace varios años. El “aquí y ahora” se
          hizo materia con obras que surgieron espontáneamente de estos
          ejercicios, logrando resignificar material desarrollado a lo largo de
          los días mediante una técnica completamente nueva para varios de los
          residentes.
          <br></br><br></br>
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D5/D5_09.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 6 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 6</strong>
          <br></br><br></br>Fue realmente un privilegio poder pasar estos días en Bosque
          Gracias. Ya casi terminando el verano, se valoran mucho más los
          momentos de sol y el calor para aprovechar de un buen rato en el río y
          descansar bajo algún árbol. Una caminata por los alrededores, comiendo
          moras, ciruelas, y manzanas recolectadas en los senderos del bosque.
          <br></br><br></br>
          Por la tarde noche, muchas veces el ambiente en la Casa Madre era
          similar al de un cyber, con todas las mesas ocupadas con computadoras.
          Hubo un día en el cual todas estuvieron online en la misma página web:
          Hydra. El taller de creación de visuales con programación, facilitado
          por{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/jotta.rs/"
            rel="noreferrer"
          >
            Jotta
          </a>{" "}
          y{" "}
          <a
            target="_blank"
            className=" underline font-semibold"
            href="https://www.instagram.com/zoen_calega/"
            rel="noreferrer"
          >
            Zoen
          </a>
          , fue una propuesta que atrapó a todos los residentes. Con una
          introducción sobre cómo establecer funciones básicas, cada quien
          comenzó a generar iteraciones, combinaciones y alteraciones sobre los
          parámetros, generando distintos resultados y disfrutando del estímulo
          visual constante que produce un render en tiempo real. La experiencia
          fue un gran puntapié para que varios artistas programen por primera
          vez en sus vidas. <br></br><br></br>
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D6/D6_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA 7 */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA 7</strong>
          <br></br><br></br>Coordinamos junto a Santiago Ruau una visita al lago para
          realizar una experiencia de dibujo y creación libre. Tuvimos la
          oportunidad de ver un nuevo paisaje asombroso, y Santiago nos animó a
          liberar nuestras manos y dejar que el trazo fluya. Nos desafió a
          realizar al menos cinco dibujos con trazos sueltos, buscando generar
          placer en el proceso creativo y permitiendo que la línea se expresara
          sin restricciones.
          <br></br><br></br>
          La actividad resultó ser una experiencia divertida y enriquecedora
          para todos los participantes, cada uno encontrando su propio ritmo y
          estilo en el acto de dibujar. Fue un momento para disfrutar del gesto
          artístico y conectar con la espontaneidad de la creación, dejando que
          nuestras manos exploren el papel con libertad.
          <br></br><br></br>
          Durante la tarde, continuamos nuestra experimentación en obras
          colaborativas, sumergiéndonos aún más en la creatividad colectiva.
          Además, comenzamos un nuevo descubrimiento en el taller textil, donde
          nos adentramos en la caracterización de personajes mediante el uso de
          máscaras, maquillajes y fotografías en el bosque como telón de fondo.
          <br></br><br></br>
          Este enfoque en el taller textil nos permitió no solo explorar
          técnicas nuevas y expresivas, sino también sumergirnos en la narrativa
          visual, dando vida a personajes imaginativos en el entorno natural del
          bosque. A medida que trabajábamos juntos para crear estas
          representaciones visuales, surgieron nuevas conexiones y
          colaboraciones entre los participantes, enriqueciendo aún más nuestra
          experiencia creativa.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-72">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_09.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_10.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_11.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_12.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D7/D7_13.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>
        {/* DIA FINAL */}
        <p className="mb-2 text-justify mr-2">
          <strong>DIA FINAL</strong>
          <br></br><br></br>La última noche fue una celebración inolvidable, que incluyó
          una exposición y una impactante performance en vivo en el bosque,
          donde creamos una instalación multimedia única. Utilizamos pantallas,
          televisores de tubo, procesadores de imagen, cámaras, proyectores,
          feedback, así como música generativa, instrumentos, sintetizadores y
          el estímulo de ser la última jam de la Residencia Bosque Gracias.
          <br></br><br></br>
          La residencia llegó a su fin, pero nosotros ya estamos proyectando el
          próximo encuentro.
        </p>
        <Carousel size="relative self-center min-w-[300px] max-w-[350px] justify-center lg:w-[510px] lg:max-w-[600px] mb-48 lg:mb-80">
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_01.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_02.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_03.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_04.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_05.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_06.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_07.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_08.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
          <div>
            <Image
              src="https://storage.newtro.xyz/Bosque_Gracias/D8/D8_09.jpg"
              width={600}
              height={300}
              alt="Newtro Arts x Bosque Gracias"
              className="object-cover    aspect-video"
            />
          </div>
        </Carousel>

        <ShareButtons url="https://newtro.xyz/log/articles/bosque-gracias" title="Bosquegracias x Newtro - Bitácora de la residencia" />
        <div className="text-sm md:text-base bg-fifth-purple text-secondary-white my-8 px-4 py-5 cursor-default">
          Newtro Arts aims to promote, educate, and introduce latin american
          artists and cultural agents to blockchain technology and NFTs. We seek
          to communicate the significance of the web3 art ecosystem beyond the
          blockchain itself.
        </div>
      </div>
    </div>
  );
};

export default Log;
