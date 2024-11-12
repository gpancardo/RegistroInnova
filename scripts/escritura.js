        let ubicacion;
        let casos = ["evento", "misEventos", "eventos"];
        let dropdownContainer = document.getElementById('container');

        function escritura(caso) {
            if (casos.includes(caso)) {
                switch (caso) {
                    case "evento":
                        let form = document.querySelector("form");
                        if (form) {
                            if ((confirm('Está editando un evento. Si crea un nuevo evento perderá sus cambios. ¿Proceder?'))==true){
                                form.remove()
                                plantillaEvento();
                            }
                        } else {
                            plantillaEvento();
                        }
                        break;
                    case "misEventos":
                        plantillaMisEventos();
                        break;
                    case "eventos":
                        plantillaEventosGeneral();
                        break;
                    case "completar":
                        completar();
                        break;
                }
            }
        }

        function plantillaEvento() {
            const form = document.createElement("form");

            // Campos para el evento principal
            const tituloLabel = document.createElement("label");
            tituloLabel.textContent = "Título: ";
            const tituloInput = document.createElement("input");
            tituloInput.type = "text";
            tituloInput.name = "titulo";
            tituloInput.required = true;
            const tituloDiv = document.createElement("div");
            tituloDiv.appendChild(tituloLabel);
            tituloDiv.appendChild(tituloInput);

            const descripcionLabel = document.createElement("label");
            descripcionLabel.textContent = "Descripción: ";
            const descripcionInput = document.createElement("input");
            descripcionInput.type = "text";
            descripcionInput.name = "descripcion";
            descripcionInput.required = true;
            const descripcionDiv = document.createElement("div");
            descripcionDiv.appendChild(descripcionLabel);
            descripcionDiv.appendChild(descripcionInput);

            const ubicacionLabel = document.createElement("label");
            ubicacionLabel.textContent = "Ubicación: ";
            const ubicacionInput = document.createElement("input");
            ubicacionInput.type = "text";
            ubicacionInput.name = "ubicacion";
            ubicacionInput.required = true;
            const ubicacionDiv = document.createElement("div");
            ubicacionDiv.appendChild(ubicacionLabel);
            ubicacionDiv.appendChild(ubicacionInput);

            const ponenteLabel = document.createElement("label");
            ponenteLabel.textContent = "Ponente: ";
            const ponenteInput = document.createElement("input");
            ponenteInput.type = "text";
            ponenteInput.name = "ponente";
            ponenteInput.required = true;
            const ponenteDiv = document.createElement("div");
            ponenteDiv.appendChild(ponenteLabel);
            ponenteDiv.appendChild(ponenteInput);

            const horaLabel = document.createElement("label");
            horaLabel.textContent = "Hora: ";
            const horaInput = document.createElement("input");
            horaInput.type = "time";
            horaInput.name = "hora";
            horaInput.required = true;
            const horaDiv = document.createElement("div");
            horaDiv.appendChild(horaLabel);
            horaDiv.appendChild(horaInput);

            // Botón para agregar subeventos
            const agregarSubevento = document.createElement("button");
            agregarSubevento.type = "button";
            agregarSubevento.textContent = "Agregar Subevento";
            const agregarDiv = document.createElement("div");
            agregarDiv.classList.add("agregarSubevento");
            agregarDiv.appendChild(agregarSubevento);

            // Evento para agregar subeventos de forma infinita
            agregarSubevento.addEventListener("click", function () {
                const subeventoForm = createSubeventoForm();
                agregarDiv.insertAdjacentElement("beforebegin", subeventoForm);
            });

            // Botón completar
            const completar = document.createElement("button");
            completar.type = "button";
            completar.textContent = "Completar";
            const completarDiv = document.createElement("div");
            completarDiv.classList.add("completar");
            completarDiv.appendChild(completar);

            //Evento para completar el llenado de formulario
            completar.addEventListener("click",()=>{
                if ((confirm('Nuevo evento agregado con éxito'))==true){
                    location.reload();
                }
            });

            // Añadir elementos al formulario
            form.appendChild(tituloDiv);
            form.appendChild(document.createElement("br"));
            form.appendChild(descripcionDiv);
            form.appendChild(document.createElement("br"));
            form.appendChild(ubicacionDiv);
            form.appendChild(document.createElement("br"));
            form.appendChild(ponenteDiv);
            form.appendChild(document.createElement("br"));
            form.appendChild(horaDiv);
            form.appendChild(document.createElement("br"));
            form.appendChild(agregarDiv);
            form.appendChild(completarDiv);

            // Añadir el formulario al cuerpo o a un contenedor
            dropdownContainer.appendChild(form);
        }

        function createSubeventoForm() {

            const subeventoForm = document.createElement("div");
            subeventoForm.classList.add("subevento");

            const tituloSub = document.createElement("h2");
            tituloSub.textContent="Subevento";

            const tituloLabel = document.createElement("label");
            tituloLabel.textContent = "Título: ";
            const tituloInput = document.createElement("input");
            tituloInput.type = "text";
            tituloInput.name = "subtitulo";
            tituloInput.required = true;

            const descripcionLabel = document.createElement("label");
            descripcionLabel.textContent = "Descripción: ";
            const descripcionInput = document.createElement("input");
            descripcionInput.type = "text";
            descripcionInput.name = "subdescripcion";
            descripcionInput.required = true;

            const ubicacionLabel = document.createElement("label");
            ubicacionLabel.textContent = "Ubicación: ";
            const ubicacionInput = document.createElement("input");
            ubicacionInput.type = "text";
            ubicacionInput.name = "sububicacion";
            ubicacionInput.required = true;

            const ponenteLabel = document.createElement("label");
            ponenteLabel.textContent = "Ponente: ";
            const ponenteInput = document.createElement("input");
            ponenteInput.type = "text";
            ponenteInput.name = "subponente";
            ponenteInput.required = true;

            const horaLabel = document.createElement("label");
            horaLabel.textContent = "Hora: ";
            const horaInput = document.createElement("input");
            horaInput.type = "time";
            horaInput.name = "subhora";
            horaInput.required = true;

            // Añadir campos al formulario de subevento
            subeventoForm.appendChild(tituloSub);
            subeventoForm.appendChild(tituloLabel);
            subeventoForm.appendChild(tituloInput);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(descripcionLabel);
            subeventoForm.appendChild(descripcionInput);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(ubicacionLabel);
            subeventoForm.appendChild(ubicacionInput);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(ponenteLabel);
            subeventoForm.appendChild(ponenteInput);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(horaLabel);
            subeventoForm.appendChild(horaInput);
            subeventoForm.appendChild(document.createElement("br"));

            return subeventoForm;
        }
