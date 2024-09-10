<template>
    <form>
        <div class="form-control">
            <label for="firstname">Firstname</label>
            <input id="firstname" type="text" v-model="firstName">
        </div>
        <div class="form-control">
            <label for="lastname">Lastname</label>
            <input id="lastname" type="text" v-model="lastName">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hourly rate</label>
            <input id="rate" type="number">
        </div>
        <div class="form-control">
            <h3>Areas of expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend">
                <label for="frontend">Frontend development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend">
                <label for="backend">Backend development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career">
                <label for="career">Career advisory</label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: []
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
