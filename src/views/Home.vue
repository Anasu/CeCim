<template>
  <div class="home">
    <breadcrumb :items="bcItems"/>
    
    <h2>Panel de registro médico</h2>
    <p>Estás revisando los datos de <span class="paciente">{{nombrePaciente}}</span></p>
 
    <div class="card-group">
      <div class="card-fat card-fat--orange">
        <img :src="panel1" alt="panel">
        <div class="card-fat__footer card-fat__footer--orange">
          <h3>Panel General</h3>
          <p>Datos demográficos, mensajes, recordatorios y más.</p>
        </div>
      </div>

      <div class="card-fat card-fat--blue">
        <img :src="historial" alt="historial">
        <div class="card-fat__footer card-fat__footer--blue">
          <h3>Historial</h3>
          <p>Factores de riesgo, historial familiar, estilo de vida y otros.</p>
        </div>
      </div>

      <div class="card-fat card-fat--green">
        <img :src="informe" alt="informe">
        <div class="card-fat__footer card-fat__footer--green">
          <h3>Informe</h3>
          <p>Generar e imprimir informe médico.</p>
        </div>
      </div>

      <div class="card-fat card-fat--orange">
        <img :src="documentos" alt="documentos">
        <div class="card-fat__footer card-fat__footer--orange">
          <h3>Documentos</h3>
          <p>Visualizar, subir y descargar documentos.</p>
        </div>
      </div>

      <div class="card-fat card-fat--blue">
        <img :src="derivaciones" alt="derivaciones">
        <div class="card-fat__footer card-fat__footer--blue">
          <h3>Derivaciones</h3>
          <p>Añadir y editar derivaciones. Imprimir formulario de derivaciones.</p>
        </div>
      </div>

      <div class="card-fat card-fat--green">
        <img :src="incidencias" alt="incidencias">
        <div class="card-fat__footer card-fat__footer--green">
          <h3>Incidencias</h3>
          <p>Problemas medicos, alergias, cirujías y otros.</p>
        </div>
      </div>

      <div class="card-fat card-fat--orange">
        <img :src="libro" alt="libro">
        <div class="card-fat__footer card-fat__footer--orange">
          <h3>Libro Mayor</h3>
          <p>Revisar e imprimir libros mayores.</p>
        </div>
      </div>

      <div class="card-fat card-fat--blue">
        <img :src="datos" alt="datos">
        <div class="card-fat__footer card-fat__footer--blue">
          <h3>Datos Externos</h3>
          <p>Visitas y procedimientos.</p>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import panel1 from "../assets/undraw_Resume_folder_re_e0bi.svg"
import historial from "../assets/undraw_notes1_cf55.svg"
import informe from "../assets/undraw_account_490v.svg"
import documentos from "../assets/undraw_collecting_fjjl.svg"
import derivaciones from "../assets/undraw_sync_files_xb3r.svg"
import incidencias from "../assets/undraw_medical_research_qg4d.svg"
import libro from "../assets/undraw_Personal_notebook_re_d7dc.svg"
import datos from "../assets/undraw_add_document_0hek.svg"

export default {
  name: 'Home',
  components: {
    Breadcrumb,
  },
  data()
  {
    return {
      nombrePaciente: 'Nombre del Paciente',
      bcItems: [
        {
            text: 'Inicio',
            to: '/'
          },
          {
            text: 'Panel de Registro Médico',
            active: true
          },
      ],
      panel1: panel1,
      historial: historial,
      informe: informe,
      documentos: documentos, 
      derivaciones: derivaciones,
      incidencias: incidencias,
      libro: libro,
      datos: datos,
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: left;
  margin-top: 2.5%;

  .paciente {
    font-weight: 900;
  }
}

/* css de las tarjetas */
.card-fat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 2.25%;
  width: 100%;

  &--orange {
  background-color: #FB8C00;
  }
  &--blue {
  background-color: #3B8FB9;
  }
  &--green {
  background-color: #43A047;
  }

  &__footer {
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem 2rem;

    &--orange {
    background-color: #EF6C00;
    }
    &--blue {
      background-color: #1E739E;
    }
    &--green {
    background-color: #2E7D32;
    }
  }
}
@media (min-width: 800px) {
  .card-fat {
    width: 45%;
  }
  .card-group {
    display: flex;
    justify-content: space-between;
  }
}
</style>