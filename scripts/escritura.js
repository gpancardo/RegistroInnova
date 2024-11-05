let ubicacion;
        let casos = ["evento", "misEventos", "eventos"];

        function escritura(caso) {
            if (casos.includes(caso)) {
                switch (caso) {
                    case "evento":
                        plantillaEvento();
                        break;
                    case "misEventos":
                        plantillaMisEventos();
                        break;
                    case "eventos":
                        plantillaEventosGeneral();
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

            const descripcionLabel = document.createElement("label");
            descripcionLabel.textContent = "Descripción: ";
            const descripcionInput = document.createElement("input");
            descripcionInput.type = "text";
            descripcionInput.name = "descripcion";
            descripcionInput.required = true;

            const ubicacionLabel = document.createElement("label");
            ubicacionLabel.textContent = "Ubicación: ";
            const ubicacionInput = document.createElement("input");
            ubicacionInput.type = "text";
            ubicacionInput.name = "ubicacion";
            ubicacionInput.required = true;

            const ponenteLabel = document.createElement("label");
            ponenteLabel.textContent = "Ponente: ";
            const ponenteInput = document.createElement("input");
            ponenteInput.type = "text";
            ponenteInput.name = "ponente";
            ponenteInput.required = true;

            const horaLabel = document.createElement("label");
            horaLabel.textContent = "Hora: ";
            const horaInput = document.createElement("input");
            horaInput.type = "time";
            horaInput.name = "hora";
            horaInput.required = true;

            // Botón para agregar subeventos
            const agregarSubevento = document.createElement("button");
            agregarSubevento.type = "button";
            agregarSubevento.textContent = "Agregar Subevento";

            // Contenedor para subeventos
            const subeventosContainer = document.createElement("div");

            // Evento para agregar subeventos de forma infinita
            agregarSubevento.addEventListener("click", function () {
                const subeventoForm = createSubeventoForm();
                subeventosContainer.appendChild(subeventoForm);
            });

            // Botón completar
            const completar = document.createElement("button");
            completar.type = "button";
            completar.textContent = "Completar";

            // Añadir elementos al formulario
            form.appendChild(tituloLabel);
            form.appendChild(tituloInput);
            form.appendChild(document.createElement("br"));
            form.appendChild(descripcionLabel);
            form.appendChild(descripcionInput);
            form.appendChild(document.createElement("br"));
            form.appendChild(ubicacionLabel);
            form.appendChild(ubicacionInput);
            form.appendChild(document.createElement("br"));
            form.appendChild(ponenteLabel);
            form.appendChild(ponenteInput);
            form.appendChild(document.createElement("br"));
            form.appendChild(horaLabel);
            form.appendChild(horaInput);
            form.appendChild(document.createElement("br"));
            form.appendChild(agregarSubevento);
            form.appendChild(subeventosContainer); // Contenedor de subeventos
            form.appendChild(document.createElement("br"));
            form.appendChild(completar);

            // Añadir el formulario al cuerpo o a un contenedor
            document.body.appendChild(form);
        }

        function createSubeventoForm() {
            const subeventoForm = document.createElement("div");
            subeventoForm.classList.add("subevento");

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