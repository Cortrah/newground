<template>
    <div id="app">
        <router-view/>

        <button @click.prevent="helloTest">hi</button>
        <button @click.prevent="modalTest">modal</button>

        <div id="helloStack" v-for="hello in hellos">
            <hello-world :msg="hello.msg"></hello-world>
        </div>

        <div id="modalStack" v-for="mod in modals">
            <test-modal :title='mod.title'
                        :message='mod.message'
                        :complexObject="mod.complexObject"
                        save="saveIt">
            </test-modal>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import DmModal from './modals/DmModal.vue'
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
                this.hellos.push({msg: "gogo:" + this.modals.length + " "});
            },
            modalTest: function () {
                let testData = {
                    el: this.$el.modalStack,
                    parent: this,
                    title: "Hapi Dance",
                    message: "hapidance:" + new Date().toString(),
                    complexObject: {
                        name: 'A complex object with a name and some other objects',
                        thing1: false,
                        thing2: function(){ return "thing2 as a function"},
                        thing3: [1,2,3]
                    }
                };
                let testModal = new Constructor(testData);
                this.modals.push(testData);
                console.log(this.modals);
            },
            saveIt: function () {
                console.log("saving");
            }
        }
    }
</script>

