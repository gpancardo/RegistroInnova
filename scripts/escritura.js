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
            form.classList.add("grid-item");

            const tituloAdmin = document.createElement("h2");
            tituloAdmin.textContent="Administrar Evento";
            tituloAdmin.classList.add("bold-heading");

            const tituloDiv = crearInput("Título: ","text","titulo",true);
            const descripcionDiv = crearInput("Descripción: ","text","descripcion",true);
            const ubicacionDiv = crearInput("Ubicación: ","text","ubicacion",true);
            const ponenteDiv = crearInput("Ponente: ","text","ponente",true);
            const horaDiv = crearInput("Hora: ","time","hora",true);

            // Botón para agregar subeventos
            const agregarSubevento = document.createElement("button");
            agregarSubevento.type = "button";
            agregarSubevento.classList.add("morado");
            agregarSubevento.classList.add("redondeado");
            agregarSubevento.classList.add("texto-blanco");
            agregarSubevento.textContent = "Agregar Subevento";
            const botonesDiv = document.createElement("div");
            botonesDiv.classList.add("botones");
            botonesDiv.appendChild(agregarSubevento);

            // Evento para agregar subeventos de forma infinita
            agregarSubevento.addEventListener("click", function () {
                const subeventoForm = createSubeventoForm();
                botonesDiv.insertAdjacentElement("beforebegin", subeventoForm);
                agregarCSS();
            });

            // Botón completar
            const completar = document.createElement("button");
            completar.type = "button";
            completar.classList.add("rosa");
            completar.classList.add("redondeado");
            completar.classList.add("texto-blanco");
            completar.textContent = "Completar";
            botonesDiv.appendChild(completar);

            //Evento para completar el llenado de formulario
            completar.addEventListener("click",()=>{
                if ((confirm('Nuevo evento agregado con éxito'))==true){
                    location.reload();
                }
            });

            // Añadir elementos al formulario
            form.appendChild(tituloAdmin);
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
            form.appendChild(botonesDiv);

            // Añadir el formulario al cuerpo o a un contenedor
            dropdownContainer.appendChild(form);
            
            agregarCSS();
        }

        function createSubeventoForm() {

            const subeventoForm = document.createElement("div");
            subeventoForm.classList.add("subevento");

            const tituloSub = document.createElement("h3");
            tituloSub.textContent="Subevento";
            tituloSub.classList.add("bold-heading")

            const tituloDiv = crearInput("Título: ","text","titulo",true);
            const descripcionDiv = crearInput("Descripción: ","text","descripcion",true);
            const ubicacionDiv = crearInput("Ubicación: ","text","ubicacion",true);
            const ponenteDiv = crearInput("Ponente: ","text","ponente",true);
            const horaDiv = crearInput("Hora: ","time","hora",true);

            // Añadir campos al formulario de subevento
            subeventoForm.appendChild(tituloSub);
            subeventoForm.appendChild(tituloDiv);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(descripcionDiv);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(ubicacionDiv);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(ponenteDiv);
            subeventoForm.appendChild(document.createElement("br"));
            subeventoForm.appendChild(horaDiv);
            subeventoForm.appendChild(document.createElement("br"));

            return subeventoForm;
        }

        function crearInput(labelTxt,type,name,required){
            // Campos para el evento principal
            const label = document.createElement("label");
            label.textContent = labelTxt;
            const input = document.createElement("input");
            input.type = type;
            input.name = name;
            input.required = required;
            const div = document.createElement("div");
            div.appendChild(label);
            div.appendChild(input);

            return div;
        }

        function agregarCSS(){
            
            // Añadir clases css
            let labels = document.querySelectorAll('label');
            labels.forEach(label => {
                label.classList.add('regular-paragraph');
            });
            let inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.classList.add('redondeado');
            });
            let divs = document.querySelectorAll('div');
            divs.forEach(div => {
                if(div.classList.item(0) == null){
                    div.classList.add("display-flex");
                    div.classList.add("flex-direction-column");
                }
            });

        }