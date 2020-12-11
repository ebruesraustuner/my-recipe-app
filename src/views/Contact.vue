<template>
        <form class="form" name="contactForm"  method="post" data-netlify="true">

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <div class="vtextbox">
                <label for="name" class="vlabel"><span>Name</span></label>
                <input id="name" v-model="name" type="text" name="name" class="vinput" placeholder="Ayşe Fatma Hayriye">
            </div>
            <div class="vtextbox">
                <label for="email" class="vlabel"><span> e-mail</span></label>
                <input id="email" v-model="email" type="email" name="email" class="vinput"
                    placeholder="aysefatma@hayriye.com">
            </div>
            <div class="vtextbox">
                <label for="message" class="vlabel"><span>Message</span></label>
                <textarea v-model="message" name="message" placeholder="Your message" class="vtextarea"></textarea>
            </div>

            <div class="vbutton-end">
                <button type="submit" name="submit" value="Submit" class="vbutton vbutton-default vbutton-end">Send</button>
            </div>

        </form>
</template>
<script>
    export default {
        data() {
            return {
                errors: [],
                name: null,
                email: null,
                message: null
            }
        },
        methods: {


        }

    }
</script>