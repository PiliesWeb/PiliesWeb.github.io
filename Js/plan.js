document.addEventListener("DOMContentLoaded", function() {
    const primerSemestre = [
        { title: "Cálculo Diferencial", hours: 5, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas"},
        { title: "Física I", hours: 4, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas"},
        { title: "Química I", hours: 4, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Programación", hours: 4, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Introducción a la Ingeniería", hours: 3, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales" },
        { title: "Comunicación Oral y Escrita", hours: 3, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales" },
        { title: "Dibujo Asistido por Computadora", hours: 4, credits: 10, prerequisite: "Ninguno", color: "naranja", type: "Otras Asignaturas" },
        { title: "Laboratorio de Física I", hours: 2, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Laboratorio de Química I", hours: 2, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" }
        // Puedes añadir más materias del primer semestre aquí
    ];

    const segundoSemestre = [
        { title: "Cálculo Integral", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Física II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Química II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Ciencia de los Materiales", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Termodinámica I", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Álgebra Lineal", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Laboratorio de Física II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Laboratorio de Química II", hours: 6, credits: 10, prerequisite: "Ninguno" , color: "amarillo", type: "C. Básicas"}
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const tercerSemestre = [
        { title: "Cálculo Vectorial", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Física II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Bioquímica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería"},
        { title: "Electricidad y Magnetismo", hours: 6, credits: 10, prerequisite: "Ninguno" , color: "amarillo", type: "C. Básicas"},
        { title: "Balance de Materia y Energía", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Circuitos Eléctricos I", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Física III", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Laboratorio de Bioquímica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Circuitos Electricos I", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const cuartoSemestre = [
        { title: "Ecuaciones Diferenciales I", hours: 6, credits: 10, prerequisite: "Ninguno" , color: "amarillo", type: "C. Básicas"},
        { title: "Métodos Numéricos", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas"},
        { title: "Probabilidad y Estadistica", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Termodinámica II", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Mecánica de Fluidos", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Circuitos Eléctricos II", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Seguridad e Higiene", hours: 6, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales"},
        { title: "Laboratorio de Mecánica de Fluidos", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Circuitos Electricos II", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const quintoSemestre = [
        { title: "Ecuaciones Difefenciales II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "amarillo", type: "C. Básicas" },
        { title: "Conversión de la Energía", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería"},
        { title: "Bioenergía", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Transferencia de Calor y Masa", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Energías Renovables y su Impacto Social", hours: 6, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales"  },
        { title: "Electrónica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Relaciones Laborales", hours: 6, credits: 10, prerequisite: "Ninguno" , color: "verde", type: "C. Sociales" },
        { title: "Fundamentos de Energías Convencionales", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Conversión de la Energía", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Electrónica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const sextoSemestre = [
        { title: "Energía y Desarrollo Sustentable", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Energía de Biomasa", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Energía Geotérmica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Energía Fotovoltáica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Energía Térmico Solar", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Actitud Emprendedora", hours: 6, credits: 10, prerequisite: "Ninguno", color: "naranja", type: "Otras Asignaturas" },
        { title: "Electrónica de Potencia", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Energía de Biomasa", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Energía Fotovoltáica", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Energía Térmico Solar", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Electrónica de Potencia", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const septimoSemestre = [
        { title: "Modelado y Simulación de Sistemas", hours: 6, credits: 10, prerequisite: "Ninguno", color: "naranja", type: "Otras Asignaturas" },
        { title: "Diseño de Experimentos y Análisis de Datos", hours: 6, credits: 10, prerequisite: "Ninguno", color: "naranja", type: "Otras Asignaturas" },
        { title: "Energía Eólica", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Energía del Hidrógeno", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Energía Hidráulica", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Instrumentación y Control", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Tópicos Selectos I", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Laboratorio de Modelado y Simulación", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Diseño de Experimentos", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Laboratorio de Energía Eólica", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Laboratorio de Energía del Hidrógeno", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Laboratorio de Energía Hidráulica", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const octavoSemestre = [
        { title: "Análisis de Sist. Eléctricos de Potencia", hours: 6, credits: 10, prerequisite: "Ninguno", type: "C. de la Ingeniería" },
        { title: "Seminario de Tesis", hours: 6, credits: 10, prerequisite: "Ninguno" , color: "naranja", type: "Otras Asignaturas"},
        { title: "Marco Jurídico Ambiental y Energético", hours: 6, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales"},
        { title: "Taller de Ética", hours: 6, credits: 10, prerequisite: "Ninguno", color: "verde", type: "C. Sociales"},
        { title: "Ing. Económica y Estimación de Costos", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Gestión de Calidad", hours: 6, credits: 10, prerequisite: "Ninguno", color: "naranja", type: "Otras Asignaturas" },
        { title: "Auditorías Energéticas", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Tópicos Selectos II", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" },
        { title: "Tópicos Selectos III", hours: 6, credits: 10, prerequisite: "Ninguno", color: "morado", type: "Ing. Aplicada" }
        // Puedes añadir más materias del segundo semestre aquí
    ];

    const novenoSemestre = [
        { title: "Prácticas Profesionales", hours: 30, credits: 10, prerequisite: "Ninguno"},
    ];   
    
    const colores = {
        azul: "blue",
        amarillo: "#8d8b10",
        verde: "#032b17",
        naranja: "#5e3003",
        morado: "#500957",
        rojo: "#8f0f0f"
        // Puedes agregar más colores aquí según necesites
    };
    
    function createMateriaCard(materia) {
        const card = document.createElement("div");
        card.classList.add("card");
    
        const topSection = document.createElement("div");
        topSection.classList.add("top-section");
        topSection.style.background = colores[materia.color]; // Cambiamos el fondo de la top-section
        card.appendChild(topSection);
    
        const border = document.createElement("div");
        border.classList.add("border");
        topSection.appendChild(border);
    
        const icons = document.createElement("div");
        icons.classList.add("icons");
        topSection.appendChild(icons);
    
        const logo = document.createElement("div");
        logo.classList.add("logo");
        logo.textContent = "°";
        icons.appendChild(logo);
    
        const socialMedia = document.createElement("div");
        socialMedia.classList.add("social-media");
        socialMedia.textContent = materia.type;
        icons.appendChild(socialMedia);
    
        const bottomSection = document.createElement("div");
        bottomSection.classList.add("bottom-section");
        card.appendChild(bottomSection);
    
        const title = document.createElement("span");
        title.classList.add("title");
        title.textContent = materia.title;
        bottomSection.appendChild(title);
    
        const row = document.createElement("div");
        row.classList.add("row");
        bottomSection.appendChild(row);
    
        const items = [
            { label: "Hrs. por semana", value: materia.hours },
            { label: "Créditos", value: materia.credits },
            { label: "Requisito para", value: materia.prerequisite }
        ];
    
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            const bigText = document.createElement("span");
            bigText.classList.add("big-text");
            bigText.textContent = item.value;
            const regularText = document.createElement("span");
            regularText.classList.add("regular-text");
            regularText.textContent = item.label;
            itemDiv.appendChild(bigText);
            itemDiv.appendChild(regularText);
            row.appendChild(itemDiv);
        });
    
        return card;
    }
    

    function generateSemesterCards(semestre, container) {
        semestre.forEach(function(materia) {
            const card = createMateriaCard(materia);
            container.appendChild(card);
        });
    }

    const primerSemestreContainer = document.querySelector(".semestre:nth-child(1)");
    generateSemesterCards(primerSemestre, primerSemestreContainer);

    const segundoSemestreContainer = document.querySelector(".semestre:nth-child(2)");
    generateSemesterCards(segundoSemestre, segundoSemestreContainer);

    const tercerSemestreContainer = document.querySelector(".semestre:nth-child(3)");
    generateSemesterCards(tercerSemestre, tercerSemestreContainer);

    const cuartoSemestreContainer = document.querySelector(".semestre:nth-child(4)");
    generateSemesterCards(cuartoSemestre, cuartoSemestreContainer);

    const quintoSemestreContainer = document.querySelector(".semestre:nth-child(5)");
    generateSemesterCards(quintoSemestre, quintoSemestreContainer);

    const sextoSemestreContainer = document.querySelector(".semestre:nth-child(6)");
    generateSemesterCards(sextoSemestre, sextoSemestreContainer);

    const septimoSemestreContainer = document.querySelector(".semestre:nth-child(7)");
    generateSemesterCards(septimoSemestre, septimoSemestreContainer);

    const octavoSemestreContainer = document.querySelector(".semestre:nth-child(8)");
    generateSemesterCards(octavoSemestre, octavoSemestreContainer);

    const novenoSemestreContainer = document.querySelector(".semestre:nth-child(9)");
    generateSemesterCards(novenoSemestre, novenoSemestreContainer);
});

