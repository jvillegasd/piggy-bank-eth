<template>
  <div class="contact_card">
    <label class="contact_label" >Contact us</label>
    <form class="email_form">
      <label class="email_label" for="email">Email:</label>
      <input type="text" id="email" name="email" v-model="userEmail">

      <label class="message_label" for="message">Subject:</label>
      <textarea name="message" id="message" rows="10" cols="50"></textarea>

      <button class="submit_bt" >Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact-us',
  data () {
    return {
      userEmail: null,
      message: null
    }
  }
}
</script>

<style scoped>
  .contact_card {
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 320px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .contact_label {
    font-weight: bold;
  }
  .submit_bt {
    background-color: rgba(0, 94, 238, 0.8);
    outline: none;
    border: none;
    width: 75px;
    height: 30px;
    color: white;
    border-radius: 10px;
  }
  .submit_bt:hover {
    background-color: white;
    color: rgba(0, 94, 238, 0.8);
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 94, 238, 0.8);
  }
  .email_form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 250px;
  }
  textarea {
    resize: none;
  }
</style>
