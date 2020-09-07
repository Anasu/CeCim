<template>
  <div class="loginform">
    <h3>{{titulo}}</h3>
    <p>{{subtitulo}}</p>

    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Nombre de Usuario:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.user"
          required
          placeholder="Usuario"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Contraseña:" 
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pass"
          type="password"
          required
          placeholder="*******"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox >Recordar mis credenciales</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <div class="loginform__boton--izq">
        <a href="#">¿Olvidaste tus credenciales?</a>
        <b-button type="submit" variant="primary">INGRESAR</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

  export default {
    props: {
      titulo: String,
      subtitulo: String,
    },
    data() {
      return {
        form: {
          user: '',
          pass: '',
          checked: [],
        },
      }
    },
    methods: {
       ...mapActions([
      'validarLogin',
    ]),
      onSubmit(evt) {
        evt.preventDefault()
        console.log(JSON.stringify(this.form))
        this.validarLogin(this.form)
      },
    }
  }
</script>

<style lang="scss" scoped>
.loginform {
  padding: 50px 3.5vw;
  max-width: 380px;
  box-shadow: rgba($color: #000000, $alpha: 0.25) 0 8px 20px;
  border-radius: 2px;

  h3, p {
    margin-bottom: 1rem;
  }

  input  {
    margin-bottom: 2rem;
    border-width: 0px 0px 1px 0px;
    border-color: #006003;
    border-radius: 0px;
  }

  &__boton--izq {
    text-align: right;
    margin-top: 2rem;
  }
}
</style>