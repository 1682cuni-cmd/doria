/**
 * DORIA — configuración del sitio
 * ---------------------------------
 * Este archivo es la fuente de verdad de los datos de la casa.
 * Al abrirse cualquier página, js/main.js lee estos valores y
 * actualiza nombre, responsable, rubro, dirección, teléfonos,
 * correo, ID de campaña, misión, visión, historia, enlaces
 * de WhatsApp y el campo oculto del formulario.
 *
 * Cómo editar:
 * 1. Cambie solo los textos entre comillas.
 * 2. Conserve las comas entre campos.
 * 3. En misión y visión, una línea en blanco separa párrafos.
 * 4. En historia puede agregar, quitar o reordenar hitos.
 * 5. Guarde el archivo y recargue el sitio en el navegador.
 *
 * Los años e hitos de «historia» están redactados como relato
 * de la casa. Ajústelos a la trayectoria real antes de publicar
 * si alguna fecha debe corregirse.
 *
 * Dirección: Calle 2 #094, Carmen de Carupa, Cundinamarca, 250420.
 * Si cambia el celular o el ID de campaña, escríbalos en
 * «celular», «celularE164», «whatsapp» y «campanaId».
 * Si esos campos quedan vacíos, el sitio no muestra teléfono,
 * WhatsApp ni campaña.
 */
(function () {
  function img(id, w) {
    return (
      "https://images.unsplash.com/" +
      id +
      "?auto=format&fit=crop&w=" +
      (w || 1600) +
      "&q=80"
    );
  }

  window.PINEDA_CONFIG = {
    nombre: "DORIA",
    responsable: "José Luis Doria Tapia",
    rubro: "Tienda de perfumes",
    slogan: "Fragancias elegidas con criterio, para permanecer.",

    direccion: "Calle 2 #094",
    ciudad: "Carmen de Carupa, Cundinamarca, 250420",

    celular: "+57 321 907 3565",
    celularE164: "+573219073565",
    whatsapp: "573219073565",

    email: "joanau158@gmail.com",
    campanaId: "",

    horario: "Lunes a viernes de 8:00 a 17:30 · Sábados de 9:00 a 13:00",

    mision:
      "En DORIA seleccionamos y ofrecemos perfumes con criterio, sobriedad y un trato directo. Nuestra misión es ayudar a cada persona a encontrar una fragancia que le corresponda: por su carácter, por la ocasión y por la permanencia en la piel. La tienda está en Carmen de Carupa y el acompañamiento es claro desde la primera conversación hasta la entrega del frasco.\n\nNo perseguimos la novedad vacía. Buscamos que cada elección sea consciente, que el origen del perfume se pueda explicar y que quien compra sepa quién responde por lo que lleva. El estándar de esta casa es simple de enunciar y exigente de cumplir: producto auténtico, consejo honesto y trato sin ambigüedad.",

    vision:
      "Aspiramos a que DORIA sea, en Carmen de Carupa y para quienes eligen con exigencia, la tienda de referencia cuando se busca un perfume bien explicado y bien cuidado. Queremos una casa reconocida por la verdad de lo que vende, la discreción del consejo y la calidad de la atención.\n\nNuestra visión es que familias y visitantes encuentren aquí un interlocutor único, capaz de escuchar un gusto y devolver una fragancia adecuada; y que cada frasco se recuerde por lo que es, no por una promesa inflada. Desde Carmen de Carupa queremos sostener un estándar sereno, responsable y de alta gama.",

    historia: [
      {
        anio: "1986",
        titulo: "La primera vitrina",
        texto:
          "En Carmen de Carupa abre una tienda pequeña dedicada al perfume. La casa toma el nombre DORIA y fija un principio que el tiempo no ha vuelto negociable: explicar con calma y vender solo lo que se puede responder. Aquellos primeros frascos enseñan el ritmo del oficio. La fragancia no se apura, y quien elige merece saber qué lleva y quién se lo ofrece.",
        imagen: img("photo-1515377905703-c4788e51af15", 1400),
        alt: "Frasco de perfume sobre una superficie oscura"
      },
      {
        anio: "1995",
        titulo: "El consejo en la tienda",
        texto:
          "El trabajo deja de ser solo entregar un frasco. Familias de la región confían a DORIA la elección de un perfume para el día, para una ocasión o para un regalo. Nace la costumbre de probar con calma y de nombrar las notas antes de decidir. El perfume empieza a entenderse como una elección personal, no como un objeto que se toma del estante sin explicación.",
        imagen: img("photo-1594035910387-fea47794261f", 1400),
        alt: "Frascos de perfume ordenados en una vitrina"
      },
      {
        anio: "2004",
        titulo: "La sede de la Calle 2",
        texto:
          "La tienda se establece en la Calle 2 #094. DORIA gana espacio para mostrar, conservar y explicar las fragancias, y con ello la capacidad de atender con más calma sin soltar el control de lo que se vende. Tener la selección bajo el mismo techo se vuelve la manera DORIA de responder por cada frasco.",
        imagen: img("photo-1615634260167-c8cdede054de", 1400),
        alt: "Detalle de un perfume en frasco de vidrio"
      },
      {
        anio: "2011",
        titulo: "El perfume de ocasión",
        texto:
          "Regalos, celebraciones y visitas entran al día a día de la casa. DORIA aprende a conjugar la sobriedad de una tienda seria con la calidez de un consejo cercano. El mismo criterio que sirve para elegir un perfume de uso diario sirve para un obsequio: autenticidad, explicación clara y una presencia que no exagera.",
        imagen: img("photo-1547887538-e3a2f32cb1cc", 1400),
        alt: "Frascos de perfume sobre mármol"
      },
      {
        anio: "2018",
        titulo: "El método de la casa",
        texto:
          "Se escribe el proceso que hoy rige cada visita: conversación, prueba, explicación de notas, elección y entrega. El cliente deja de llevarse un frasco al azar y empieza a recorrer un método con responsables y decisiones visibles. Desde entonces, la alta gama se entiende como claridad tanto como fragancia.",
        imagen: img("photo-1490750967868-88aa4486c946", 1400),
        alt: "Perfume en frasco de vidrio con luz suave"
      },
      {
        anio: "2026",
        titulo: "La casa en plena actividad",
        texto:
          "Desde Carmen de Carupa, DORIA sigue ofreciendo perfumes con consejo directo. La tienda de la Calle 2 #094 y el trato personal ordenan cada conversación. El propósito no ha cambiado: elegir fragancias auténticas, bien explicadas y capaces de acompañar a quien las usa.",
        imagen: img("photo-1523293182086-7651a899d37f", 1400),
        alt: "Colección de perfumes en una mesa"
      }
    ]
  };
})();
