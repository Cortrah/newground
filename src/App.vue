<template>
    <div id="app">
        <router-view/>

        <button @click.prevent="helloTest">hello</button>
        <button @click.prevent="modalTest">modal</button>

        <div id="helloStack" v-for="hello in hellos">
            <hello-world :msg="hello.msg"></hello-world>
        </div>

        <div id="modalStack" v-for="mod in modals">
            <test-modal :message="mod.message"></test-modal>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import TestModal from './modals/TestModal.vue'
    import HelloWorld from './components/HelloWorld.vue'

    let Constructor = Vue.extend(TestModal);

    export default {
        name: 'app',
        components: {
            TestModal,
            HelloWorld
        },
        data: function () {
            return {
                hellos: [],
                modals: []
            }
        },
        methods: {
            helloTest: function () {
                this.hellos.push({msg: "gogo:" + new Date().toString()});
            },
            modalTest: function () {
                let testModal = new Constructor({
                    el: this.$el.modalStack,
                    parent: this,
                    message: "hapidance:" + new Date().toString()
                });
                this.modals.push(testModal);
                console.log(this.modals);
            }
        }
    }
</script>

